<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  img?: string
  link?: string
  tags: string[]
}>()

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'vue.js':
    case 'vue':
      return 'bg-green-300 text-green-900'
    case 'go':
    case "postgresql":
      return 'bg-blue-300 text-blue-900'
    case 'typescript':
      return 'bg-yellow-300 text-yellow-900'
    case 'python':
    case 'cockroachdb':
      return 'bg-purple-300 text-purple-900'
    case 'mqtt':
    case 'rabbitmq':
      return 'bg-red-300 text-red-900'
    default:
      return 'bg-gray-300 text-gray-900'
  }
}
</script>

<template>
  <div class="rounded overflow-hidden shadow-lg dark:bg-stone-900 bg-stone-100">
    <img v-if="img" class="w-full" :src="img" alt="Sunset in the mountains">
    <img v-else class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="mb-2"><span class="font-bold text-xl mr-2">{{ title }}</span><span v-if="link"
          class="text-gray-700 dark:text-gray-200 text-base">— <a :href="link" class="underline">{{ link }}</a></span>
      </div>
      <p class="text-gray-700 dark:text-gray-200 text-base text-md">
        {{ desc }}
      </p>
    </div>
    <div class="px-6 pb-2">
      <span v-for="tag in tags"
        :class="`${getTagColor(tag)} inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`">
        {{ tag }}
      </span>
    </div>
  </div>
</template>