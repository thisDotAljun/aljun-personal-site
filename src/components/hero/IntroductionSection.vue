<template>
  <section class="col-start-2 flex flex-col my-auto">
    <div class="space-y-4 sm:space-y-0">
      <h1
        class="font-bold text-primary-black text leading-none sm:leading-[1.25] text-[clamp(50px,3vw,64px)] transition will-change-transform delay-700 animate-fade-hero-text mb-4"
      >
        Hi, I’m Aljun and I’m
      </h1>
      <div class="flex items-center">
        <h1
          class="z-20 font-bold leading-none text-clip sm:leading-[1.25] lg:truncate text-white text-[clamp(50px,3vw,64px)] will-change-transform delay-150 animate-fade-hero-subtext"
        >
          a Frontend Developer
        </h1>
        <div
          class="absolute start-0 p-16 sm:p-10 pro-max:p-16 bg-primary-black w-full will-change-transform delay-150 animate-fade-hero-bar"
        ></div>
      </div>
    </div>
    <p
      class="text-[20px] text-primary-black leading-[1.5] my-6 text-[clamp(12px,3vw,20px)] will-change-transform delay-150 animate-fade-hero-text"
    >
      I am a Frontend Developer specializing in building web-based applications.<br />
      I have over three years of experience developing Management Information <br />
      Systems and Data Processing Systems at my current role with the <br />
      Philippine Statistics Authority.
    </p>
    <ButtonSection />
  </section>
</template>

<script setup lang="ts">
import ButtonSection from './ButtonSection.vue'
</script>
