<template>
     <section id="features" class="container py-24 sm:py-32 space-y-8">
          <h2 class="text-3xl lg:text-4xl font-bold md:text-center">
               Many
               <span
                    class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
               >
                    Great Features
               </span>
          </h2>

          <div class="flex flex-wrap md:justify-center gap-4">
               <div v-for="(element, i) in featureList" :key="i">
                    <Badge variant="secondary" class="text-sm rounded-full">
                         {{ element }}
                    </Badge>
               </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <Card
                    class="bg-muted/50"
                    v-for="(element, i) in features"
                    :key="i"
               >
                    <CardHeader>
                         <CardTitle>{{ element.title }}</CardTitle>
                    </CardHeader>

                    <CardContent>{{ element.description }}</CardContent>

                    <CardFooter>
                         <Image
                              :src="element.image"
                              :alt="element.title"
                              class="w-[200px] lg:w-[300px] mx-auto"
                         />
                    </CardFooter>
               </Card>
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
     Card,
     CardContent,
     CardFooter,
     CardHeader,
     CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import Image from '@/components/ui/image.vue';

interface FeatureProps {
     title: string;
     description: string;
     image: string;
}

const features: FeatureProps[] = [
     {
          title: 'Responsive Design',
          description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
          image: '/src/assets/public/images/looking-ahead.png',
     },
     {
          title: 'Intuitive user interface',
          description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
          image: '/src/assets/public/images/reflecting.png',
     },
     {
          title: 'AI-Powered insights',
          description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
          image: '/src/assets/public/images/growth.png',
     },
];

const featureList = ref<string[]>([
     'Dark/Light theme',
     'Reviews',
     'Features',
     'Pricing',
     'Contact form',
     'Our team',
     'Responsive design',
     'Newsletter',
     'Minimalist',
]);
</script>
