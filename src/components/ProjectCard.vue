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
      return 'bg-green-200 text-green-800'
    case 'go':
    case "postgresql":
      return 'bg-blue-200 text-blue-800'
    case 'typescript':
      return 'bg-yellow-200 text-yellow-800'
    case 'python':
    case 'cockroachdb':
      return 'bg-purple-200 text-purple-800'
    case 'mqtt':
    case 'rabbitmq':
    return 'bg-red-200 text-red-800'
    default:
      return 'bg-gray-200 text-gray-800'
  }
}
</script>

<template>
    <div class="rounded overflow-hidden shadow-lg dark:bg-gray-900">
      <img v-if="img" class="w-full" :src="img" alt="Sunset in the mountains">
      <img v-else class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="mb-2"><span class="font-bold text-xl mr-2">{{ title }}</span><span v-if="link" class="text-gray-700 dark:text-gray-200 text-base">— <a :href="link" class="underline">{{ link }}</a></span></div>
            <p class="text-gray-700 dark:text-gray-200 text-base text-md">
                {{ desc }}
            </p>
        </div>
        <div class="px-6 pb-2">
            <span v-for="tag in tags" :class="`${getTagColor(tag)} inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`">
                {{ tag }}
            </span>
        </div>
    </div>
</template>