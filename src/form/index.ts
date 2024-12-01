import _Form from './form.vue'
import _FormItem from './formItem.vue'
import { withInstall, WithInstallType } from '@/utils'

export type { TFormProps as FormProps } from './types'

const Form = withInstall(_Form) as WithInstallType<typeof _Form>
export const FormItem = withInstall(_FormItem) as WithInstallType<typeof _FormItem>

export default Form

declare module 'vue' {
  interface GlobalComponents {
    BuForm: typeof Form
    BuFormItem: typeof FormItem
  }
}
