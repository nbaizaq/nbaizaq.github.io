<template>
  <div class="container">
    <div class="text-2xl text-center">Love to hear from you!</div>
    <div class="mt-8 flex-col flex gap-2">
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        href="https://t.me/nbaizaq"
      >
        <i class="pi pi-telegram !text-sm" /> nbaizaq
      </a>
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        href="tel:+996558826282"
      >
        <i class="pi pi-phone !text-sm" /> +996 558 826-282
      </a>
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        href="mailto:n.baizakof@gmail.com"
      >
        <i class="pi pi-at !text-sm" /> n.baizakof@gmail.com
      </a>
      <div class="flex gap-1 items-center shrink-0 mt-4">
        <i class="pi pi-map-marker !text-sm" /> Bishkek, Kyrgyzstan
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact",
});
</script>