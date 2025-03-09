<template>
  <div>
    <div class="text-xl text-blue-500 font-medium">{{ props.title }}</div>
    <hr class="my-4 text-gray-400"></hr>
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
