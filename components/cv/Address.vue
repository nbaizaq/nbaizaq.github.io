<template>
  <div class="flex gap-2 items-center justify-between flex-wrap text-xs my-2">
    <a
      class="flex gap-1 items-center shrink-0 hover:text-blue-500"
      href="tel:+996558826282"
    >
      <i class="pi pi-phone !text-sm" /> +996 558 826-282
    </a>
    <a
      class="flex gap-1 items-center shrink-0 hover:text-blue-500"
      href="mailto:n.baizakof@gmail.com"
    >
      <i class="pi pi-at !text-sm" /> n.baizakof@gmail.com
    </a>
    <a
      class="flex gap-1 items-center shrink-0 hover:text-blue-500"
      href="http://github.com/nbaizaq"
    >
      <i class="pi pi-github !text-sm" />
    </a>
    <a
      class="flex gap-1 items-center shrink-0 hover:text-blue-500"
      :href="useRuntimeConfig().public.baseUrl"
    >
      <i class="pi pi-globe !text-sm" /> nbaizaq.github.io
    </a>
    <div class="flex gap-1 items-center shrink-0">
      <i class="pi pi-map-marker !text-sm" /> Bishkek, Kyrgyzstan
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
