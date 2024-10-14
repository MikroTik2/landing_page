<template>
     <section
          class="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
     >
          <div class="text-center lg:text-start space-y-6">
               <main class="text-5xl md:text-6xl font-bold">
                    <h1 class="inline">
                         <span
                              class="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text"
                         >
                              Shadcn
                         </span>

                         landing page
                    </h1>

                    for

                    <h2 class="inline">
                         <span
                              class="inline bg-gradient-to-r from-[#61DA56] via-[#1fc045] to-[#03a333] text-transparent bg-clip-text"
                         >
                              Vue
                         </span>
                         developers
                    </h2>
               </main>

               <p
                    class="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
               >
                    Build your React landing page effortlessly with the required
                    sections to your project.
               </p>

               <div class="space-y-4 md:space-y-0 md:space-x-4">
                    <Button
                         type="button"
                         class="w-full bg-green-500 hover:bg-green-500/90 md:w-1/3"
                         >Get Started</Button
                    >

                    <Button
                         type="link"
                         variant="outline"
                         class="w-full md:w-1/3"
                         href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                         target="_blank"
                    >
                         Github Repository
                         <GithubLogoIcon class="ml-2 w-5 h-5" />
                    </Button>
               </div>
          </div>

          <div class="z-10">
               <HeroCards />
          </div>

          <div class="shadow"></div>
     </section>
</template>

<script setup lang="ts">
import { GithubLogoIcon } from '@radix-icons/vue';

import Button from '@/components/ui/button.vue';
import Section from '@/components/ui/section.vue';
import Container from '@/components/ui/container.vue';
import HeroCards from '@/components/hero_cards.vue';
</script>
