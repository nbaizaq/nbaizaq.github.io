<template>
  <div class="border-1 p-4 rounded-xl border-gray-200">
    <div class="flex gap-2 items-center">
      <div class="text-sm text-gray-500">{{ workingPeriod }}</div>
      <div
        v-if="props.experience.employmentType"
        class="py-0.5 px-1 rounded-xl border-1 text-xs capitalize border-dashed"
        :class="
          props.experience.employmentType === 'full-time'
            ? 'border-blue-300 bg-blue-50  text-blue-400'
            : 'border-gray-300 bg-gray-50  text-gray-400'
        "
      >
        {{ props.experience.employmentType }}
      </div>
    </div>
    <div class="text-xl py-1 font-medium">
      {{ props.experience.title }}
    </div>
    <div class="text-sm">
      {{ props.experience.company }}
      <a
        :href="props.experience.website"
        target="_blank"
        class="text-gray-500"
        >{{ props.experience.website }}</a
      >
    </div>
    <ul class="mt-4 list-disc pl-4" v-if="props.experience.responsibilities">
      <li
        v-for="responsibility in props.experience.responsibilities"
        class="text-sm py-1"
      >
        {{ responsibility }}
      </li>
    </ul>
    <div
      v-if="props.experience.techStack.length"
      class="flex gap-2 items-center flex-wrap mt-4"
    >
      <Tag
        v-for="techStackItem in props.experience.techStack"
        :value="techStackItem"
        severity="secondary"
        pt:label:class="text-xs"
      ></Tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  experience: CvExperience;
}>();
const workingPeriod = computed(() => {
  return `${formatDate(props.experience.start)} - ${formatDate(
    props.experience.end
  )}`;
});

function formatDate(date?: Date) {
  if (!date) return "Present";

  return date.toLocaleDateString(["en"], {
    year: "numeric",
    month: "short",
  });
}
</script>
