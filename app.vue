<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import "primeicons/primeicons.css";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Nurbek Baizakov` : "Nurbek Baizakov";
  },
});
</script>
