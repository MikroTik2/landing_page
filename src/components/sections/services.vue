<template>
     <section class="container py-24 sm:py-32">
          <div class="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
               <div>
                    <h2 class="text-3xl md:text-4xl font-bold">
                         <span
                              class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
                         >
                              Client-Centric
                         </span>
                         Services
                    </h2>

                    <p class="text-muted-foreground text-xl mt-4 mb-8">
                         Lorem ipsum dolor sit amet consectetur, adipisicing
                         elit. Veritatis dolor.
                    </p>

                    <div class="flex flex-col gap-8">
                         <Card v-for="(element, i) in serviceList" :key="i">
                              <CardHeader
                                   class="space-y-1 flex md:flex-row justify-start items-start gap-4"
                              >
                                   <div
                                        class="mt-1 bg-green-500/20 p-1 rounded-2xl"
                                   >
                                        <Icon
                                             class="fill-green-500"
                                             :name="element.icon"
                                        />
                                   </div>
                                   <div>
                                        <CardTitle>{{
                                             element.title
                                        }}</CardTitle>
                                        <CardDescription class="text-md mt-2">
                                             {{ element.description }}
                                        </CardDescription>
                                   </div>
                              </CardHeader>
                         </Card>
                    </div>
               </div>

               <Image
                    src="/images/cube-leg.png"
                    class="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
                    alt="About services"
               />
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
     Card,
     CardDescription,
     CardHeader,
     CardTitle,
} from '@/components/ui/card';

import Icon from '@/components/ui/icon.vue';
import Image from '@/components/ui/image.vue';

interface ServiceProps {
     title: string;
     description: string;
     icon: string;
}

const serviceList = ref<ServiceProps[]>([
     {
          title: 'Code Collaboration',
          description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
          icon: 'chart',
     },
     {
          title: 'Project Management',
          description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
          icon: 'wallet',
     },
     {
          title: 'Task Automation',
          description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
          icon: 'magnifier',
     },
]);
</script>
