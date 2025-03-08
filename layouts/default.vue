<template>
  <div class="p-4">
    <div class="flex justify-center mb-2">
      <NuxtLink to="/" class="text-xl"> Nurbek Baizakov</NuxtLink>
    </div>
    <div class="flex justify-center gap-2">
      <NuxtLink to="/">
        <Button
          label="Home"
          variant="link"
          :class="route.path === '/' ? 'underline underline-offset-2' : ''"
        />
      </NuxtLink>
      <NuxtLink to="/cv">
        <Button
          label="CV"
          variant="link"
          :class="route.path === '/cv' ? 'underline underline-offset-2' : ''"
        />
      </NuxtLink>
      <Button label="Projects" variant="link" disabled />
      <Button label="Github" variant="link" disabled />
      <Button label="About" variant="link" disabled />
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
