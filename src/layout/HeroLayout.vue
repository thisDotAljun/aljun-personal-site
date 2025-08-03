<template>
  <main
    class="flex flex-col-reverse lg:grid lg:grid-cols-2 h-full bg-primary-light p-6 gap-10 md:gap-0"
  >
    <ImageSection />
    <IntroductionSection />
  </main>
</template>

<script setup lang="ts">
import IntroductionSection from '@/components/hero/IntroductionSection.vue'
import ImageSection from '@/components/hero/ImageSection.vue'
</script>
