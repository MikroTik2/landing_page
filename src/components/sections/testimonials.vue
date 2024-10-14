<template>
     <section id="testimonials" class="container py-24 sm:py-32">
          <h2 class="text-3xl md:text-4xl font-bold">
               Discover Why
               <span
                    class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
               >
                    People Love
               </span>
               This Landing Page
          </h2>

          <p class="text-xl text-muted-foreground pt-4 pb-8">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
               unde error facere hic reiciendis illo
          </p>

          <div
               class="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6"
          >
               <Card
                    v-for="(element, i) in testimonials"
                    :key="i"
                    class="max-w-md md:break-inside-avoid overflow-hidden"
               >
                    <CardHeader class="flex flex-row items-center gap-4 pb-2">
                         <Avatar>
                              <AvatarImage
                                   :alt="`avatar_${element.userName}`"
                                   :src="element.image"
                              />
                              <AvatarFallback>OM</AvatarFallback>
                         </Avatar>

                         <div class="flex flex-col">
                              <CardTitle class="text-lg">{{
                                   element.name
                              }}</CardTitle>
                              <CardDescription>{{
                                   element.userName
                              }}</CardDescription>
                         </div>
                    </CardHeader>

                    <CardContent>{{ element.comment }}</CardContent>
               </Card>
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from '@/components/ui/card';

interface ITestimonialProps {
     image: string;
     name: string;
     userName: string;
     comment: string;
}

const testimonials = ref<ITestimonialProps[]>([
     {
          image: 'https://github.com/shadcn.png',
          name: 'Artur Dotsent Vue',
          userName: '@MikroTik2',
          comment: 'This landing page is awesome!',
     },
     {
          image: 'https://github.com/shadcn.png',
          name: 'Artur Dotsent Vue',
          userName: '@MikroTik2',
          comment: 'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
     },

     {
          image: 'https://github.com/shadcn.png',
          name: 'Artur Dotsent Vue',
          userName: '@MikroTik2',
          comment: 'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
     },
     {
          image: 'https://github.com/shadcn.png',
          name: 'Artur Dotsent Vue',
          userName: '@MikroTik2',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
     },
     {
          image: 'https://github.com/shadcn.png',
          name: 'Artur Dotsent Vue',
          userName: '@jMikroTik2',
          comment: 'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.',
     },
     {
          image: 'https://github.com/shadcn.png',
          name: 'Artur Dotsent Vue',
          userName: '@MikroTik2',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
     },
]);
</script>
