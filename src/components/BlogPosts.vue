<template>
    <div id="blog" class="flex flex-row justify-center items-center px-5 overflow-hidden">
      <div>
        <div v-for="(post, index) in posts" :key="index">
          <p class="mb-4 hover:underline text-xl"><a :href="post.url">{{ post.title }} — Read on {{ extractDomain(post.url) }}</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface BlogPost {
    title: string
    url: string
  }
  
  export default defineComponent({
    props: {
      posts: {
        type: Array as () => BlogPost[],
        required: true,
      },
    },
    methods: {
      extractDomain(url: string): string {
        try {
          const domain = new URL(url).hostname
          return domain.startsWith('www.') ? domain.substring(4) : domain
        } catch (error) {
          return url
        }
      },
    },
  })
  </script>
    