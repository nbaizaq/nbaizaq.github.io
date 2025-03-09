<template>
  <span
    v-if="props.type"
    class="py-0.5 px-1 rounded-lg border-1 text-xxs capitalize border-dashed"
    :class="
      props.type === 'full-time'
        ? 'border-blue-300 bg-blue-50  text-blue-400'
        : 'border-gray-300 bg-gray-50  text-gray-400'
    "
  >
    {{ props.type }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type?: EmploymentType;
}>();
</script>
