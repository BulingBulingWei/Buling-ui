import { createApp } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import Loading from '../index'
import { TLoadingProps } from '../types'

type TUseLoadingOptions = {
  showOverlay?: TLoadingProps['showOverlay']
  text?: TLoadingProps['text']
  overlayProps?: TLoadingProps['overlayProps']
  delay?: TLoadingProps['delay']
}

type TInstanceAPI = {
  hideLoading: () => void
  showLoading: () => void
}

//
const useLoading = (options?: TUseLoadingOptions | string) => {
  let instance: ComponentPublicInstance<TInstanceAPI>
  if (typeof options === 'string') {
    options = { text: options }
  }

  const show = () => {
    if (!instance) {
      // 创建一个loading组件实例，然后后挂载（mount）到一个新建的div元素上
      instance = createApp(Loading, options as TUseLoadingOptions).mount(
        document.createElement('div')
      ) as ComponentPublicInstance<TInstanceAPI>

      const wrap = document.createElement('div')
      //$el 是该组件实例管理的 DOM 根节点。
      wrap.appendChild(instance.$el)
      document.body.appendChild(wrap)
    }
    instance.showLoading()
  }

  const hide = () => {
    if (instance) {
      instance.hideLoading()
    }
  }
  return {
    show,
    hide
  }
}

export default useLoading
