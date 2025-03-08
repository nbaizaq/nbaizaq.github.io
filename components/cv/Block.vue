<template>
  <div>
    <div class="text-xl text-blue-500 font-medium">{{ props.title }}</div>
    <div class="w-full my-4 h-0.5 bg-blue-200 rounded-lg"></div>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>
