<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import DotMatrix from '../components/DotMatrix.vue'
import BlogPosts from '../components/BlogPosts.vue'

const ledMatrixText = ['blog.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0']

const posts = [
    {
        title: 'Disrupting a Telegram-Based Phishing Campaign',
        url: 'https://www.digilol.net/blog/phishing-intercepted-cert'
    },
    {
        title: 'DLSEC-2025-1: 3X-UI Update Accepts Forged Server Certificates (CVE-2025-29331)',
        url: 'https://www.digilol.net/security-advisories/dlsec2025-001.html'
    },
    {
        title: 'How Chainalysis Made Their Way into Popular Monero Wallets',
        url: 'https://www.digilol.net/blog/chainanalysis-malicious-xmr.html'
    },
    {
        title: 'Establishing persistence using extended attributes on Linux (featured on MITRE ATT&CK)',
        url: 'https://kernal.eu/posts/linux-xattr-persistence'
    },
    {
        title: 'Encrypt Communications using Self-signed Certificates in Go',
        url: 'https://www.digilol.net/blog/self-signed-certs-go.html'
    },
    {
        title: 'How to Host a Website on the I2P Anonymous Network',
        url: 'https://www.digilol.net/blog/i2p-hosting.html'
    },
]

const media = [
    {
        title: 'İrem Kuyucu - Success Story',
        url: 'https://workinlithuania.com/stories/irem-kuyucu/'
    },
    {
        title: 'Lithuania: Students stop university from using only proprietary authentication',
        url: 'https://fsfe.org/news/2023/news-20230418-01.en.html'
    },
]

</script>

<template>
    <div class="md:px-32 relative min-h-screen overflow-hidden">
        <DotMatrix :text="ledMatrixText" />

        <Navbar />

        <div class="mt-40 px-10 sm:px-0 sm:mt-32 pb-20">
            <div class="max-w-5xl mx-auto mb-10">
                <p class="text-3xl md:text-4xl mb-5 text-center">Recent Blog Posts</p>

                <div class="flex flex-row justify-center items-center">
                    <BlogPosts :posts="posts" />
                </div>
            </div>

            <div class="max-w-5xl mx-auto">
                <p class="text-3xl md:text-4xl mb-5 text-center">News, Interviews and Talks</p>

                <div class="flex flex-row justify-center items-center">
                    <BlogPosts :posts="media" />
                </div>
            </div>

        </div>
    </div>
</template>