<script setup>
import { computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'

const props = defineProps({
  number: Number,
  required: Boolean
})

const inputId = computed(() => (`text-field-${props.number}`))
</script>

<template>
  <div class="text-field">
    <label :for="`${inputId}`">
      <slot>{{ title }}</slot>
    </label>
    <input type="text" :id="`${inputId}`" />
  </div>
</template>
