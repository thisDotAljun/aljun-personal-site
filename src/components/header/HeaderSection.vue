<template>
  <header class="flex justify-between w-full px-12 py-2 overflow-x-auto gap-[40px]">
    <h2 class="text-primary-grey font-black">AC</h2>
    <div class="inline-flex items-center gap-[40px]">
      <Button
        :pt="{
          label: 'font-semibold text-xs truncate',
          icon: 'primary-grey',
        }"
        as="a"
        href="https://www.linkedin.com/in/aljun-cortina-438433254/"
        target="_blank"
        rel="noopener"
        class="w-fit bg-white text-primary-grey border-transparent"
        label="Aljun Cortina"
        icon="pi pi-linkedin"
        iconPos="left"
      />
      <div class="inline-flex gap-[8px]">
        <i class="pi pi-envelope text-primary-grey"></i>
        <h3 class="text-xs text-primary-grey font-semibold">cortinaaljun@gmail.com</h3>
      </div>
      <div class="inline-flex gap-[8px]">
        <i class="pi pi-phone text-primary-grey"></i>
        <h3 class="text-xs text-primary-grey font-semibold">+639216312810</h3>
      </div>
      <Button
        icon="pi pi-file-pdf"
        severity="secondary"
        rounded
        variant="outlined"
        aria-label="Bookmark"
        size="small"
        v-tooltip.bottom="{
          value: 'Download CV',
          pt: {
            text: 'text-[10px]',
          },
        }"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>
