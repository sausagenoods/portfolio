<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import DotMatrix from '../components/DotMatrix.vue'

const ledMatrixText = ['Welcome to posterchild, today.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0']
</script>

<template>
    <div class="md:px-32 relative min-h-screen md:h-screen overflow-hidden">
        <DotMatrix :text="ledMatrixText" />

        <Navbar />

        <div class="mt-40 pb-10 px-10 md:p-0 md:mt-7 flex lg:h-screen justify-center items-center max-w-screen">
            <div class="grid md:grid-cols-[1fr_450px] md:gap-24 gap-4">
                <div class="flex flex-col justify-center">
                    <h2 class="text-2xl md:text-3xl mb-5">My name is İrem Kuyucu. Here are some quick facts
                        about me:</h2>
                    <ul class="list-inside list-['-_']">
                        <li class="mb-2 text-xl md:text-2xl">I'm the co-founder of <a class="italic underline"
                                href="https://www.digilol.net">Digilol</a> and <a class="italic underline"
                                href="https://www.rastersec.com">RasterSec</a>.</li>
                        <li class="mb-2 text-xl md:text-2xl">I am the editor and sysadmin of a hacker community called
                            <a href="https://kernal.eu" class="italic underline">kernal.eu</a>.
                        </li>
                        <li class="mb-2 text-xl md:text-2xl">I hold the following certifications:
                            <a class="italic underline" href="https://kernal.eu/~siren/pentestplus.pdf">Pentest+</a>,
                            <a class="italic underline" href="https://kernal.eu/~siren/cka.pdf">Certified Kubernetes
                                Administrator (CKA)</a>, <a class="italic underline"
                                href="https://www.credly.com/badges/8f0fecb3-1675-416e-8edb-9075e10d27bc">Okta Certified
                                Professional</a>.
                        </li>
                        <li class="mb-2 text-xl md:text-2xl">I'm a free software advocate and a Linux user of ~11 years.
                        </li>
                        <li class="text-xl md:text-2xl">I mainly program in C, Go and TypeScript.</li>
                        <div class="items-center flex flex-row flex-wrap my-5 sm:mt-10 gap-4" id="contact">
                            <a href="https://matrix.to/#/@siren:kernal.eu"
                                class="sm:text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">Matrix</a>
                            <a href="mailto:siren@kernal.eu"
                                class="sm:text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">Email</a>
                            <a href="https://www.linkedin.com/in/installgentoo/"
                                class="sm:text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">LinkedIn</a>
                            <a href="https://github.com/sausagenoods"
                                class="sm:text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">GitHub</a>
                            <a href="https://hackerone.com/sausagenoods?type=user"
                                class="sm:text-xl bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white font-semibold hover:text-white dark:hover:text-black py-2 px-4 border border-black dark:border-white hover:border-transparent rounded transition-colors">HackerOne</a>

                        </div>
                    </ul>
                </div>
                <img class="hidden md:block rounded" src="/irem.webp" />
                <img class="block md:hidden rounded" src="/irem2.webp" />
            </div>
        </div>
    </div>
</template>