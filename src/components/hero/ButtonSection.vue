<template>
  <div class="flex flex-col items-center sm:flex-row sm:items-start gap-5">
    <Button
      :pt="{
        label: 'font-light text-xs',
        icon: 'animate-bounce',
      }"
      class="w-fit px-6 py-3"
      label="Know me more"
      icon="pi pi-arrow-down"
      iconPos="right"
    />
    <Button
      :pt="{
        label: 'font-light text-xs',
      }"
      as="a"
      href="https://github.com/thisDotAljun/aljun-personal-site"
      target="_blank"
      rel="noopener"
      class="w-fit px-6 py-3 bg-white text-primary-black border-transparent"
      label="Gihub Repository"
      icon="pi pi-github"
      iconPos="right"
    />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>
