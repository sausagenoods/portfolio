<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GitHubIcon, MatrixIcon, LinkedInIcon } from 'vue3-simple-icons'
import ProjectCard from '../components/ProjectCard.vue'
import BlogPosts from '../components/BlogPosts.vue'

const fontClass = ref('font-sans')
const fonts = ['font-sans', 'font-mono', 'italic', 'font-extrabold', 'font-light']
const posts = [
    { title: 'How Chainalysis Made Their Way into Popular Monero Wallets', url: 'https://www.digilol.net/blog/chainanalysis-malicious-xmr.html' },
    { title: 'Establishing persistence using extended attributes on Linux', url: 'https://kernal.eu/posts/linux-xattr-persistence' },
    { title: 'Encrypt Communications using Self-signed Certificates in Go', url: 'https://www.digilol.net/blog/self-signed-certs-go.html' },
    { title: 'How to Host a Website on the I2P Anonymous Network', url: 'https://www.digilol.net/blog/i2p-hosting.html' },
    { title: 'How to Make a Responsive Contact Form Using Vue.js and Go', url: 'https://www.digilol.net/blog/contact-form-in-vuejs.html' },
]

onMounted(() => {
    let index = 0;
    const interval = setInterval(() => {
        fontClass.value = fonts[index]
        index = (index + 1) % fonts.length
    }, 500)

    setTimeout(() => {
        clearInterval(interval)
    }, 5000)
})
</script>

<template>
    <div class="relative flex flex-row min-h-screen justify-center items-center px-5 overflow-hidden">
        <div class="main-content">
            <h1 :class="['text-4xl md:text-5xl mb-5', fontClass]">Hello!</h1>
            <h2 class="text-2xl md:text-3xl mb-5">My name is İrem. Here are some quick facts about me:</h2>
            <ul class="list-inside list-['-_']">
                <li class="mb-2 text-xl md:text-2xl">I'm mainly a Go and Vue.js/TypeScript developer.</li>
                <li class="mb-2 text-xl md:text-2xl">I system-administer an awesome community called <a
                        href="https://kernal.eu" class="italic underline">kernal.eu</a>.</li>
                <li class="mb-2 text-xl md:text-2xl">I'm a <a class="italic underline"
                        href="https://kernal.eu/~siren/pentestplus.pdf">certified</a> penetration tester.</li>
                <li class="mb-2 text-xl md:text-2xl">I'm a free software advocate and a Linux user of ~10 years.
                    Currently on <a href="https://github.com/sausagenoods/nixconfig" class="underline">NixOS</a>.</li>
                <li class="mb-2 text-xl md:text-2xl">I'm one of the directors of a <a href="https://twed.org"
                        class="italic underline">non-profit</a> in Czech Republic whose main activity is organizing <a
                        href="https://monerokon.org" class="italic underline">Monero Konferenco</a>.</li>
                <li class="mb-2 text-xl md:text-2xl">I'm a 4th year informatics student at VILNIUS TECH.</li>
            </ul>
            <div class="mt-10 items-center flex flex-row gap-4">
                <a href="/#projects"
                    class="text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">Projects</a>
                <a href="/#blog"
                    class="text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">Blog</a>
                <a href="https://kernal.eu/~siren/cv.pdf"
                    class="text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">CV</a>
            </div>
            <div class="flex justify-center mt-10">
                <a href="#projects" class="text-3xl animate-bounce">
                    ↓
                </a>
            </div>
        </div>
    </div>

    <div id="projects" class="relative flex flex-row py-10 lg:px-48 justify-center items-center px-5 overflow-hidden">
        <div>
            <p class="text-4xl md:text-5xl mb-10 text-center">Projects</p>
            <p class="text-xl md:text-2xl mb-10 text-center">List of projects where I am the sole maintainer or the main
                contributor.</p>

            <div class="grid md:grid-cols-2 gap-5">

                <ProjectCard title="CNAME.sh" link="https://cname.sh" img="cname-dark.png"
                    desc="An upcoming platform that offers Dynamic DNS, DNS load balancing, Geo-routing and health-checks. I made the backend, the frontend and the landing website."
                    :tags='["Go", "Vue.js", "CockroachDB", "RabbitMQ", "TypeScript"]' />

                <ProjectCard title="MoneroPay" link="https://moneropay.eu" img="moneropay.png"
                    desc="The most popular payment processor for the Monero cryptocurrency. Written in Go and uses frameworks such as go-chi and zerolog."
                    :tags='["Go", "PostgreSQL", "SQLite"]' />

                <ProjectCard title="The Monero ATM Project" link="https://atm.monero.is" img="monero-atm.png"
                    desc="Open-source cryptocurrency ATM. All component communication happens over MQTT. Frontend is in Vue.js and has i18n support. For security, no wallet or keys are stored locally."
                    :tags='["Go", "MQTT", "IoT", "Vue.js", "TypeScript"]' />

                <ProjectCard title="VPN Application" img="poisonvpn.png"
                    desc="A proprietary VPN application/infrastructure I designed and programmed for a client. It's written in Go and uses xray-core. The backend consists of agents and a management server communicating in a private API secured by self-signed certificates. I used Vue.js for the management panel."
                    :tags='["Go", "Vue.js", "TypeScript"]' />

                <ProjectCard title="Website for Digilol" link="https://www.digilol.net" img="digilolwebsite.png"
                    desc="The website for Digilol that I built using Vitepress with custom components in Vue.js."
                    :tags='["Vue.js", "TypeScript"]' />
            </div>

            <p class="text-xl md:text-2xl mt-10 mb-2 text-center">You can find more of my projects and libraries on my
                <a class="underline" href="https://github.com/sausagenoods">GitHub</a>.</p>
            <p class="text-xl md:text-xl text-center">This website is also <a class="underline"
                    href="https://github.com/sausagenoods/portfolio">open-source</a>.</p>
        </div>
    </div>

    <p class="text-4xl md:text-5xl mt-48 mb-10 text-center w-full">Recent blog posts</p>
    <div id="blog" class="flex flex-row justify-center items-center px-5 overflow-hidden">
        <BlogPosts :posts="posts" />
    </div>

    <div id="socials" class="relative flex flex-row mt-48 mb-20 justify-center items-center px-5 overflow-hidden">
        <div>
            <p class="text-4xl md:text-5xl mb-10 text-center">Let's keep in touch, maybe?</p>
            <div class="my-5 items-center  justify-center flex flex-row gap-5">
                <a href="https://github.com/sausagenoods" class="mr-3">
                    <GitHubIcon size="35px" />
                </a>
                <a class="mr-3" href="https://matrix.to/#/@siren:kernal.eu">
                    <MatrixIcon size="35px" />
                </a>
                <a href="https://www.linkedin.com/in/installgentoo">
                    <LinkedInIcon size="35px" />
                </a>
            </div>
            <p class="text-2xl md:text-3xl mt-10 text-center">...or email me at siren[at]kernal.eu</p>
        </div>
    </div>
</template>

<style scoped>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}
</style>
