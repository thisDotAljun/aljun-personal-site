<template>
  <section
    class="flex flex-col-reverse h-fit pro-max:h-screen lg:h-screen lg:grid lg:grid-cols-2 bg-primary-light p-6 gap-10 md:gap-0 lg:gap-10 xl:gap-0"
  >
    <ImageSection />
    <IntroductionSection />
  </section>
</template>

<script setup lang="ts">
import IntroductionSection from '@/components/hero/IntroductionSection.vue'
import ImageSection from '@/components/hero/ImageSection.vue'
</script>
