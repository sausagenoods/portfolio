<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import DotMatrix from '../components/DotMatrix.vue'
import ProjectCard from '../components/ProjectCard.vue'

const ledMatrixText = ['projects.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0']
</script>

<template>
    <div class="md:px-32 relative min-h-screen overflow-hidden">
        <!-- Dot Matrix Background -->
        <DotMatrix :text="ledMatrixText" />

        <!-- Navbar -->
        <Navbar />

        <!-- Main Content -->
        <div class="mt-40 px-10 sm:px-0 sm:mt-32 pb-20">
            <div class="max-w-7xl mx-auto">
                <p class="text-4xl md:text-5xl mb-10 text-center">Projects</p>
                <p class="text-xl md:text-2xl mb-16 text-center max-w-3xl mx-auto">
                    Some projects where I am the sole maintainer or the main contributor.
                </p>

                <div class="grid md:grid-cols-2 gap-5">
                    <ProjectCard 
                        title="Plastik3D" 
                        link="https://plastik3d.net" 
                        img="plastik3d.webp"
                        desc="A system for ordering 3D prints, with automatic print evaluation and cost estimation."
                        :tags='["Go", "Vue.js"]' 
                    />
                    
                    <ProjectCard 
                        title="The Monero ATM Project" 
                        link="https://atm.monero.is" 
                        img="monero-atm.webp"
                        desc="Open-source cryptocurrency ATM. All component communication happens over MQTT. Frontend is in Vue.js and has i18n support. For security, no wallet or keys are stored locally."
                        :tags='["Go", "MQTT", "IoT", "Vue.js", "TypeScript"]' 
                    />

                    <ProjectCard 
                        title="MoneroPay" 
                        link="https://moneropay.eu" 
                        img="moneropay.webp"
                        desc="The most popular payment processor for the Monero cryptocurrency. Written in Go and uses frameworks such as go-chi and zerolog."
                        :tags='["Go", "PostgreSQL", "SQLite"]' 
                    />

                    <ProjectCard 
                        title="CNAME.sh" 
                        link="https://cname.sh" 
                        img="cname-dark.webp"
                        desc="An upcoming platform that offers Dynamic DNS, DNS load balancing, Geo-routing and health-checks. I made the backend, the frontend and the landing website."
                        :tags='["Go", "Vue.js", "CockroachDB", "RabbitMQ", "TypeScript"]' 
                    />

                    <ProjectCard 
                        title="Metronero" 
                        link="https://github.com/metronero" 
                        video="metronero.webm"
                        desc="Multi-merchant, highly customizable and scalable checkout and PoS system for the Monero cryptocurrency."
                        :tags='["Go", "Vue.js", "PostgreSQL"]' 
                    />

                    <ProjectCard 
                        title="Website for Digilol" 
                        link="https://www.digilol.net" 
                        video="digilol.webm"
                        desc="The website for Digilol that I built using Vitepress with custom components in Vue.js."
                        :tags='["Vue.js", "TypeScript"]' 
                    />

                    <ProjectCard 
                        title="Turkish Formant Speech Synthesizer" 
                        link="https://youtu.be/GelelqJ59tU"
                        img="lapic.png"
                        desc="A simple speech synthesizer that uses LPC decoding. It's possible for it to speak other languages in Turkish-ified form with a funny accent. Click the link for a demo of the synthesizer singing Daisy Bell."
                        :tags='["C", "C++"]' 
                    />
                </div>

                <div class="mt-16 text-center">
                    <p class="text-xl md:text-2xl mb-2">
                        You can find more of my projects and libraries on my
                        <a class="underline hover:text-orangered transition-colors" href="https://github.com/sausagenoods">GitHub</a>.
                    </p>
                    <p class="text-xl md:text-xl">
                        This website is also 
                        <a class="underline hover:text-orangered transition-colors" href="https://github.com/sausagenoods/portfolio">open-source</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-orangered {
    color: orangered;
}
</style>