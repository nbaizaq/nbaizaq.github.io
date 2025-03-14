<template>
  <div class="p-4">
    <div class="flex justify-center my-4 print:my-0">
      <NuxtLink to="/" class="text-xl"> Nurbek Baizakov</NuxtLink>
    </div>
    <div class="flex justify-center gap-2 print:hidden flex-wrap">
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
      <NuxtLink to="/contact">
        <Button
          label="Contact"
          variant="link"
          :class="
            route.path === '/contact' ? 'underline underline-offset-2' : ''
          "
        />
      </NuxtLink>
      <NuxtLink to="http://www.linkedin.com/in/nbaizaq" target="_blank">
        <Button label="LinkedIn" variant="link" icon="pi pi-linkedin" />
      </NuxtLink>
      <NuxtLink to="https://github.com/nbaizaq" target="_blank">
        <Button label="Github" variant="link" icon="pi pi-github" />
      </NuxtLink>
      <NuxtLink to="https://leetcode.com/u/nbaizakof" target="_blank">
        <Button label="LeetCode" variant="link"
          ><template #icon>
            <img src="~/assets/img/leetcode.png" class="w-4 h-4" />
          </template>
        </Button>
      </NuxtLink>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
