<template>
  <div class="w-full md:w-3/4 md:mx-auto lg:w-1/2">
    <ClientOnly>
      <div class="flex justify-end print:hidden" v-if="supportsPrint">
        <Button variant="text" size="small" @click="onPrint">Print</Button>
      </div>
    </ClientOnly>
    <hr class="my-4 print:my-2 text-gray-400 border-dashed" />
    <div class="flex flex-col gap-8">
      <CvAddress />
      <CvBlock title="Professional summary" class="leading-8 text-sm">
        {{ professionalSummary }}
      </CvBlock>
      <CvBlock title="Work Experience">
        <div class="flex flex-col gap-4">
          <CvExperienceItem
            v-for="experience in experiences.reverse()"
            :key="experience.title"
            :experience="experience"
            full-time
          />
        </div>
      </CvBlock>
      <CvBlock title="Projects">
        <div class="flex flex-col gap-4">
          <CvExperienceItem
            v-for="experience in projects.reverse()"
            :key="experience.title"
            :experience="experience"
            full-time
          />
        </div>
      </CvBlock>
      <CvBlock title="Education">
        <CvEducation :education="education" />
      </CvBlock>
      <CvBlock title="Languages">
        <ul class="list-disc list-inside">
          <li v-for="lang in languages" :key="lang" class="my-1">{{ lang }}</li>
        </ul>
      </CvBlock>
      <CvBlock title="Skills">
        <div class="flex gap-2 items-center flex-wrap">
          <SharedSkillTag v-for="skill in skills" :key="skill" :value="skill" />
        </div>
      </CvBlock>
      <CvBlock title="Awards">
        <div class="flex flex-col gap-4">
          <div v-for="award in awards.reverse()" :key="award.award">
            <div class="text-xs text-gray-500">
              {{ award.dates.map(formatDate).join(" - ") }}
            </div>
            <div>{{ award.award }}</div>
            <div class="text-sm text-gray-700">
              {{ award.location }}
            </div>
          </div>
        </div>
      </CvBlock>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  professionalSummary,
  experiences,
  projects,
  education,
  awards,
  languages,
  skills,
} from "~/server/data/cvData";

useHead({
  title: "CV",
});

const supportsPrint = computed(() => {
  if (useNuxtApp().ssrContext) return false;
  return window.print !== undefined;
});

function onPrint() {
  window.print();
}
</script>
