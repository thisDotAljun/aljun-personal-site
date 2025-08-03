<template>
  <section class="relative flex flex-col justify-center w-full max-w-9/12 gap-5">
    <h1 class="font-medium md:ml-auto leading-none">{{ projectName }}</h1>
    <div class="inline-flex flex-wrap justify-start md:justify-end gap-2">
      <Chip
        v-for="(language, key) in languageUse"
        :key="key"
        :label="language"
        class="bg-primary-black text-white !text-xs"
      />
    </div>
    <p class="">
      {{ description }}
    </p>
  </section>
</template>

<script setup lang="ts">
import Chip from 'primevue/chip'

type SkillDescriptionProps = {
  projectName: string
  description: string
  languageUse: string[]
}

defineProps<SkillDescriptionProps>()
</script>
