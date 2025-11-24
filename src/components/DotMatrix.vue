<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'

interface Props {
  text?: string[]
  duration?: number
  flickerEnabled?: boolean
  flickerMinDelay?: number
  flickerMaxDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  text: () => ['welcome to posterchild, today.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'],
  duration: 30,
  flickerEnabled: true,
  flickerMinDelay: 3000,
  flickerMaxDelay: 8000
})

const isFlickering = ref(false)
let flickerInterval: number | null = null

const startFlicker = () => {
  if (!props.flickerEnabled) return
  
  const scheduleNextFlicker = () => {
    const delay = props.flickerMinDelay + Math.random() * (props.flickerMaxDelay - props.flickerMinDelay)
    
    flickerInterval = window.setTimeout(() => {
      const flickerDuration1 = 50 + Math.random() * 100
      isFlickering.value = true
      
      setTimeout(() => {
        isFlickering.value = false
        
        setTimeout(() => {
          const flickerDuration2 = 50 + Math.random() * 100
          isFlickering.value = true
          
          setTimeout(() => {
            isFlickering.value = false
            scheduleNextFlicker()
          }, flickerDuration2)
        }, 100 + Math.random() * 150)
      }, flickerDuration1)
    }, delay)
  }
  
  scheduleNextFlicker()
}

onMounted(() => {
  startFlicker()
})

onUnmounted(() => {
  if (flickerInterval) {
    clearTimeout(flickerInterval)
  }
})
</script>

<template>
  <div class="overflow-x-hidden pointer-events-none absolute w-screen top-[5.6em] sm:top-0 sm:h-screen sm:left-[-1em]">
    <div class="matrixcontainer sm:rotate-[-8deg]">
      <div class="dotgloss w-full"></div>
      <div class="dotmatrix3">
        <!-- Background layer with spaces (always visible) -->
        <Vue3Marquee :duration="duration" :pause-on-hover="false" :clone="true" :gradient="false">
          <span 
            v-for="(word, index) in text" 
            :key="`bg-${index}`" 
            class="dottext3 ledbdrev dottext-background"
          >
            {{ '\xa0'.repeat(word.length) }}
          </span>
        </Vue3Marquee>
        <!-- Foreground layer with actual text (flickers) -->
        <Vue3Marquee :duration="duration" :pause-on-hover="false" :clone="true" :gradient="false" class="dottext-foreground">
          <span 
            v-for="(word, index) in text" 
            :key="`fg-${index}`" 
            class="dottext3 ledbdrev"
            :class="{ 'flickering': isFlickering }"
          >
            {{ word }}
          </span>
        </Vue3Marquee>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dotmatrix3 {
  background-image: linear-gradient(black, #1a0000);
  color: orangered;
  position: relative;
}

.dottext3 {
  font-family: 'ledbdrev';
  width: 100%;
  white-space: nowrap;
  font-size: 2em;
  text-shadow: rgba(255, 178, 178, 0.9) 0px 0px 20px;
  transition: opacity 0.05s ease-in-out;
}

.dottext-foreground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.dottext3.flickering {
  opacity: 0;
}

.dotmatrix3:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: 50%;
  background: linear-gradient(rgba(252, 40, 40, 0.3), rgba(252, 40, 40, 0.1));
  pointer-events: none;
  z-index: 10;
}
</style>