<template>
     <section id="cta" class="bg-muted/50 py-16 my-24 sm:my-32">
          <div class="container lg:grid lg:grid-cols-2 place-items-center">
               <div class="lg:col-start-1">
                    <h2 class="text-3xl md:text-4xl font-bold">
                         All Your
                         <span
                              class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
                         >
                              Ideas & Concepts
                         </span>
                         In One Interface
                    </h2>
                    <p class="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Eaque, beatae. Ipsa tempore ipsum iste quibusdam
                         illum ducimus eos. Quasi, sed!
                    </p>
               </div>

               <div class="space-y-4 lg:col-start-2">
                    <Button
                         type="button"
                         class="w-full bg-green-500 hover:bg-green-500/90 md:mr-4 md:w-auto"
                         >Request a Demo</Button
                    >
                    <Button
                         type="button"
                         variant="outline"
                         class="w-full md:w-auto"
                    >
                         View all features
                    </Button>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button.vue';
</script>
