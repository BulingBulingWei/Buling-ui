<template>
  <div :class="`${name}`">
    <div :class="`${name}__toolbar`">
      <div :class="`${name}__cancel`" @click="cancel">{{ cancelText }}</div>
      <div :class="`${name}__title`">{{ title }}</div>
      <div :class="`${name}__confirm`" @click="confirm">{{ confirmText }}</div>
    </div>
    <div :class="`${name}__main`">
      <div v-for="(item, index) in columnsList" :key="index" :class="`${name}-item__group`">
        <PickerItem
          :column="item"
          :field-names="columnFieldNames"
          :columns-type="columnsType"
          :value="defaultValues && defaultValues[index]"
          @change="(options) => changeHandler(index, options)"
        />
      </div>
      <div :class="`${name}__mask `" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePicker } from './usePicker'
import PickerItem from './picker-item.vue'
import PickerProps from './types'
import config from '../config'

const { prefix } = config
const name = `${prefix}-picker`

const props = defineProps(PickerProps)
const emits = defineEmits(['confirm', 'cancel', 'change', 'update:modelValue'])

const {
  columnFieldNames,
  columnsType,
  defaultValues,
  columnsList,
  cancel,
  confirm,
  changeHandler
} = usePicker(props, emits)
</script>

<style lang="less">
@import url('./styles/index.less');
</style>
