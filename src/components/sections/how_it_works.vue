<template>
     <section id="howItWorks" class="container text-center py-24 sm:py-32">
          <h2 class="text-3xl md:text-4xl font-bold">
               How It
               <span
                    class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
               >
                    Works
               </span>
               Step-by-Step Guide
          </h2>
          <p class="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Veritatis dolor pariatur sit!
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <Card
                    v-for="(element, i) in features"
                    :key="i"
                    class="bg-muted/50"
               >
                    <CardHeader>
                         <CardTitle
                              class="grid gap-4 text-2xl place-items-center"
                         >
                              <Icon
                                   class="w-14 fill-green-500"
                                   :name="element.icon"
                              />
                              {{ element.title }}
                         </CardTitle>
                    </CardHeader>
                    <CardContent>{{ element.description }}</CardContent>
               </Card>
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import Icon from '@/components/ui/icon.vue';

interface IFeatureProps {
     icon: string;
     title: string;
     description: string;
}

const features = ref<IFeatureProps[]>([
     {
          icon: 'media',
          title: 'Accessibility',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
     },
     {
          icon: 'map',
          title: 'Community',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
     },
     {
          icon: 'plane',
          title: 'Scalability',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
     },
     {
          icon: 'gift',
          title: 'Gamification',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
     },
]);
</script>
