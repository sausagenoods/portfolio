<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'CV', url: '/cv.pdf' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Art', url: 'https://gallery.posterchild.today' }
]
</script>

<template>
    <div class="absolute top-4 md:top-6 left-0 right-0 px-4 md:px-6 flex place-content-between items-center z-50">
        <button @click="toggleTheme"
            class="text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black p-2 border border-black dark:border-white hover:border-transparent rounded-full transition-colors flex-shrink-0">
            <span v-if="colorMode === 'light'">
                <SunIcon class="w-6 h-6 m-1" />
            </span>
            <span v-else>
                <MoonIcon class="w-6 h-6 m-1" />
            </span>
        </button>

        <nav class="hidden md:flex gap-5 text-xl flex-shrink-0">
            <template v-for="item in navItems" :key="item.path || item.url">
                <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer"
                    class="hover:underline transition-all whitespace-nowrap">
                    {{ item.name }}
                </a>
                <router-link v-else-if="item.path" :to="item.path"
                    class="hover:underline transition-all whitespace-nowrap">
                    {{ item.name }}
                </router-link>
            </template>
        </nav>

        <button @click="toggleMobileMenu"
            class="md:hidden text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black p-2 border border-black dark:border-white hover:border-transparent rounded-full transition-colors flex-shrink-0">
            <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6 m-1" />
            <XMarkIcon v-else class="w-6 h-6 m-1" />
        </button>
    </div>

    <Transition name="slide-fade">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white dark:bg-black z-40 md:hidden"
            @click="closeMobileMenu">
            <nav class="flex flex-col items-center justify-center h-full gap-8 text-2xl">
                <template v-for="item in navItems" :key="item.path || item.url">
                    <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer"
                        @click="closeMobileMenu" class="hover:underline transition-all">
                        {{ item.name }}
                    </a>
                    <router-link v-else-if="item.path" :to="item.path" @click="closeMobileMenu"
                        class="hover:underline transition-all">
                        {{ item.name }}
                    </router-link>
                </template>
            </nav>
        </div>
    </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>