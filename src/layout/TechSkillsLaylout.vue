<template>
  <section class="flex flex-col items-center p-6 gap-7">
    <div class="text-center">
      <h1>Developed Project</h1>
      <p class="text-primary-black text-[clamp(12px,3vw,15px)]">
        These projects were developed as part of a team effort, with my primary role focused on
        frontend development.
      </p>
      <p class="text-primary-black text-[clamp(12px,3vw,15px)]">
        Most of the systems are internal applications that require VPN access for security.
      </p>
    </div>
    <div
      v-for="(el, el_index) in data"
      :key="el_index"
      class="grid grid-rows-1 md:grid-cols-2 items-center gap-6"
    >
      <ImagesShots :src="el.image_path" />
      <ProjectDescription
        class="justify-self-center md:justify-self-start"
        :project-name="el.project_name"
        :description="el.description"
        :language-use="el.language_used"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ImagesShots from '@/components/technicalskills/ImagesShots.vue'
import ProjectDescription from '@/components/technicalskills/ProjectDescription.vue'
import { ref } from 'vue'

const data = ref([
  {
    image_path: '/images/Geoms/Login.png',
    project_name: '2023 Updating of List of Aquafarm (ULAF)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    language_used: ['VueJs', 'Html', 'TailwindCss', 'Axios'],
  },
  {
    image_path: '/images/InnovationSummit/WebView/Login.png',
    project_name: 'Innovation Summit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    language_used: ['VueJs', 'Html', 'TailwindCss', 'Axios'],
  },
  {
    image_path: '/images/Geoms/Login.png',
    project_name: 'Geo-Enabled Master Sample (GeoMS)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    language_used: ['VueJs', 'Html', 'TailwindCss', 'Axios'],
  },
  {
    image_path: '/images/Geoms/Login.png',
    project_name: '2024 Regional Data Festival',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    language_used: ['NextJS', 'Html', 'TailwindCss', 'Axios'],
  },
  {
    image_path: '/images/Geoms/Login.png',
    project_name: 'Agriculture and Fisheries Statistics Surveys',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    language_used: ['Laravel Lumen', 'MySql'],
  },
  {
    image_path: '/images/Geoms/Login.png',
    project_name: 'Price Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    language_used: ['VueJs', 'Html', 'TailwindCss', 'Axios'],
  },
])
</script>
