<template>
  <Card class="w-fit m-auto">
    <template #content>
      <Image :src="src" alt="Image" pt:image:class="w-[300px] h-[200px] rounded-lg" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Image from 'primevue/image'
import Card from 'primevue/card'

type ScreenShotImageProps = {
  src: string
}

defineProps<ScreenShotImageProps>()
</script>
