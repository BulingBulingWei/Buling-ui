<template>
  <div :class="`${name}__toolbar`">
    <div :class="`${name}__cancel`" @click="cancel">
      <slot name="cancel">{{ barConfig.cancelText }}</slot>
    </div>
    <div :class="`${name}__title`">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :class="`${name}__confirm`" @click="confirm">
      <slot name="confirm">
        <template v-if="type === 'tips'">
          <CloseIcon color="var(--bu-popup-toolbar-close-color)" size="0.36rem" />
        </template>
        <template v-else>
          {{ barConfig.confirmText }}
        </template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import config from '../../config'
import { CloseIcon } from '@buling-ui-icon'
const { prefix } = config
const name = `${prefix}-popup`

const props = defineProps({
  type: {
    type: String as PropType<'tips' | 'operation'>,
    default: 'tips'
  },
  cancelText: String,
  title: String,
  confirmText: String
})

const emits = defineEmits(['cancel', 'confirm', 'close'])

const barConfig = computed(() => {
  return {
    cancelText: props.cancelText || (props.type === 'tips' ? '' : '取消'),
    confirmText: props.confirmText || (props.type === 'tips' ? '' : '确定')
  }
})

const cancel = () => {
  emits('cancel')
}

const confirm = () => {
  props.type === 'tips' ? emits('close') : emits('confirm')
}
</script>

<style lang="less"></style>
