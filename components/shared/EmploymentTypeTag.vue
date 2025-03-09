<template>
  <span
    v-if="props.type"
    class="py-0.5 px-1 rounded-lg border-1 text-xxs capitalize border-dashed whitespace-nowrap"
    :class="
      props.type === 'full-time'
        ? 'border-primary-300 bg-primary-50  text-primary-400'
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
