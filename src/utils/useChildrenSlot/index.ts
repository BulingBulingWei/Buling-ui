import { VNode } from 'vue'

const getChildrenList = (children: VNode[]) => {
  if (children.length === 1 && typeof children[0].type === 'symbol') {
    const secondChildren = children[0].children
    const secondSlots = secondChildren?.default?.()
    if (secondChildren?.length) {
      return children[0].children
    } else if (secondSlots?.length) {
      return secondSlots
    }
  }
  return children
}

const getVNodePropsList = <T>(list: VNode<any, any, T>[], booleanAttribute: string[]) => {
  return list.map((item: any) => {
    const propsName = Object.keys(item.props)

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
const useChildrenSlot: TUseChildrenSlot = <T>(
  childrenVNode: VNode[],
  vNodeTypeName?: string,
  options?: OptionType
) => {
  const vNodeList: VNode<any, any, T>[] = []
  const children = getChildrenList(childrenVNode)
  const { booleanAttribute = [] } = options || {}

  if (!vNodeTypeName) return [children, getVNodePropsList(children, booleanAttribute)]

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
