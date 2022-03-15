<template>
  <div>
    <van-field v-model="text"
               :label="label"
               :placeholder="placeholder"
               is-link
               readonly
               @click="openPicker" />
    <van-popup v-model:show="showPicker"
               teleport='body'
               position="bottom">
      <van-picker v-if="type==='select'"
                  :columns="options"
                  :columns-field-names="{
      text: 'label'
    }"
                  @confirm="onPickerConfirm"
                  @cancel="showPicker = false" />
      <!--  -->
      <van-datetime-picker v-if="showDatetimePicker"
                           :type="type"
                           v-model='date'
                           v-bind="$attrs"
                           @confirm="onDateConfirm"
                           @cancel="showPicker = false" />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { formatDate, now } from "/@/utils/date"

const props = defineProps({
  type: {
    type: String,
    validator(v: string) {
      return ['select', 'datetime', 'date', 'time', 'year-month', 'month-day', 'datehour'].includes(v)
    },
    default: 'select'
  },
  label: String,
  placeholder: {
    type: String,
    default: '请选择'
  },
  modelValue: [String, Number, Array],
  options: {
    type: Array as () => any[],
    default: () => []
  },
  valueFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  }
})

const emit = defineEmits(['update:modelValue'])
const text = ref('')
const date = ref(new Date())
const showPicker = ref(false)

const showDatetimePicker = computed(() => {
  return ['datetime', 'date', 'time', 'year-month', 'month-day', 'datehour'].includes(props.type)
})

const openPicker = (key: string) => {
  showPicker.value = true
}

const onPickerConfirm = (res: any) => {
  text.value = res.label
  emit('update:modelValue', res.value)
  showPicker.value = false
}

watch(() => props.modelValue, (value) => {
  if (value && !text.value) {
    if (props.type === 'select') {
      const _res = props.options.find(o => o.value === value)
      text.value = _res ? _res.label : ''
    } else if (showDatetimePicker.value) {
      date.value = new Date(value as string)
      text.value = formatDate(value as string, props.valueFormat)
    }
  }
}, { immediate: true })

const onDateConfirm = (res: any) => {
  const date = formatDate(res, props.valueFormat)
  emit('update:modelValue', date)
  text.value = date
  showPicker.value = false
}
</script>

<style lang="scss" scoped>
</style>
