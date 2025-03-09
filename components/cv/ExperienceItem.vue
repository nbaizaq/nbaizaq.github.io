<template>
  <div class="border-1 p-4 rounded-xl border-gray-200">
    <div class="flex gap-2 items-center">
      <div class="text-sm text-gray-500 italic">{{ workingPeriod }}</div>
      <SharedEmploymentType :type="props.experience.employmentType" />
    </div>
    <div class="text-xl py-1 font-medium">
      {{ props.experience.title }}
    </div>
    <div class="text-sm">
      @ {{ props.experience.company }}
      <div
        v-if="props.experience.website"
        class="inline-flex gap-2 items-center"
      >
        ·
        <a
          :href="props.experience.website"
          target="_blank"
          class="text-gray-500 hover:text-primary-500"
          ><i class="pi pi-external-link !text-xs" />
          {{ props.experience.website }}</a
        >
      </div>
    </div>
    <div v-if="props.experience.location" class="text-sm mt-1 text-gray-500">
      {{ props.experience.location }}
    </div>
    <div class="mt-4">
      <div class="text-sm text-gray-500">Responsibilities</div>
      <ul class="mt-2 list-disc pl-4" v-if="props.experience.responsibilities">
        <li
          v-for="responsibility in props.experience.responsibilities"
          class="text-sm py-1"
        >
          {{ responsibility }}
        </li>
      </ul>
    </div>
    <div
      v-if="props.experience.techStack.length"
      class="flex gap-2 items-center flex-wrap mt-4"
    >
      <SharedSkillTag
        v-for="techStackItem in props.experience.techStack"
        :value="techStackItem"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/helpers";
const props = defineProps<{
  experience: CvExperience;
}>();
const workingPeriod = computed(() => {
  return `${formatDate(props.experience.start)} - ${formatDate(
    props.experience.end
  )}`;
});
</script>
