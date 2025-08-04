import { VNode } from 'vue'

const getChildrenList = (children: VNode[]) => {
  // Vue 的插槽结构在编译后会包一层 Fragment
  if (children.length === 1 && typeof children[0].type === 'symbol') {
    // 取出 Fragment 内部的 children。
    // 有时 children 是数组（VNode[]），有时是 slot 函数（即 { default: () => VNode[] }），这里尝试两种都兼容。
    const secondChildren = children[0].children
    const secondSlots = (secondChildren as any)?.default?.()
    if (secondChildren?.length) {
      return secondChildren
    } else if (secondSlots?.length) {
      return secondSlots
    }
  }
  return children
}

const getVNodePropsList = <T>(list: VNode<any, any, T>[], booleanAttribute: string[]) => {
  return list.map((item: any) => {
    const propsName = Object.keys(item.props ?? {})

    const processBooleanProps = (value: boolean | '') => {
      return value === '' || value
    }

    propsName.forEach((name) => {
      if (booleanAttribute.includes(name)) {
        Object.assign(item.props, { [name]: processBooleanProps(item.props[name]) })
      }
    })

    return {
      ...item.props,
      children: item.children
    }
  }) as (T & { children: any })[]
}

type OptionType = {
  booleanAttribute: string[]
}

interface TUseChildrenSlot {
  <T>(childrenVNode: VNode[], vNodeTypeName?: string, options?: OptionType): [
    VNode<any, any, T>[],
    (T & { children: any })[]
  ]
}

// useChildrenSlot 的作用是从插槽内容中提取出指定类型的 VNode 数组
const useChildrenSlot: TUseChildrenSlot = <T>(childrenVNode: VNode[], vNodeTypeName?: string, options?: OptionType) => {
  const vNodeList: VNode<any, any, T>[] = []
  const children = getChildrenList(childrenVNode)
  const { booleanAttribute = [] } = options || {}

  if (!vNodeTypeName) return [children, getVNodePropsList(children, booleanAttribute)]

  // 从slot列表里面取出type为vNodeTypeName的元素（过滤），最后只返回slot里面指定的元素列表
  // 用法：比如在checkGroup 组件里面只渲染 checkbox 子组件，其他组件不渲染。
  const getChildrenItem = (children: (VNode | any)[]) => {
    children.forEach((item) => {
      if (item.type.__name === vNodeTypeName) {
        vNodeList.push(item)
      } else if (Array.isArray(item.children)) {
        getChildrenItem(item.children)
      }
    })
  }
  getChildrenItem(children)

  const propsList = getVNodePropsList<T>(vNodeList, booleanAttribute)

  return [vNodeList, propsList]
}

export default useChildrenSlot
