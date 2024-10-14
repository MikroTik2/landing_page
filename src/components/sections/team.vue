<template>
     <section id="team" class="container py-24 sm:py-32">
          <h2 class="text-3xl md:text-4xl font-bold">
               <span
                    class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
               >
                    Our Dedicated
               </span>
               Crew
          </h2>

          <p class="mt-4 mb-10 text-xl text-muted-foreground">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Veritatis dolor pariatur sit!
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
               <Card
                    :key="i"
                    v-for="(element, i) in teamList"
                    class="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
               >
                    <CardHeader
                         class="mt-8 flex justify-center items-center pb-2"
                    >
                         <Image
                              :src="element.imageUrl"
                              :alt="element.position"
                              class="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                         />

                         <CardTitle class="text-center text-2xl">{{
                              element.name
                         }}</CardTitle>

                         <CardDescription class="text-green-500">
                              {{ element.position }}
                         </CardDescription>
                    </CardHeader>

                    <CardContent class="text-center pb-2">
                         <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                         </p>
                    </CardContent>

                    <CardFooter>
                         <div
                              v-for="(social, i) in element.socialNetworks"
                              :key="i"
                         >
                              <Button
                                   type="link"
                                   size="icon"
                                   variant="ghost"
                                   :href="social.url"
                              >
                                   <span class="sr-only"
                                        >{{ social.name }} icon</span
                                   >
                                   <component :is="socialIcon(social.name)" />
                              </Button>
                         </div>
                    </CardFooter>
               </Card>
          </div>
     </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from '@/components/ui/card';
import { Facebook, Instagram, Linkedin } from 'lucide-vue-next';
import Image from '@/components/ui/image.vue';

interface TeamProps {
     imageUrl: string;
     name: string;
     position: string;
     socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
     name: string;
     url: string;
}

const socialIcon = (name: string) => {
     switch (name) {
          case 'Linkedin':
               return Linkedin;

          case 'Facebook':
               return Facebook;

          case 'Instagram':
               return Instagram;

          default:
               return null;
     }
};

const teamList: TeamProps[] = [
     {
          imageUrl: 'https://i.pravatar.cc/150?img=35',
          name: 'Emma Smith',
          position: 'Product Manager',
          socialNetworks: [
               {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/leopoldo-miranda/',
               },
               {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/',
               },
               {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/',
               },
          ],
     },
     {
          imageUrl: 'https://i.pravatar.cc/150?img=60',
          name: 'John Doe',
          position: 'Tech Lead',
          socialNetworks: [
               {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/leopoldo-miranda/',
               },
               {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/',
               },
               {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/',
               },
          ],
     },
     {
          imageUrl: 'https://i.pravatar.cc/150?img=36',
          name: 'Ashley Ross',
          position: 'Frontend Developer',
          socialNetworks: [
               {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/leopoldo-miranda/',
               },

               {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/',
               },
          ],
     },
     {
          imageUrl: 'https://i.pravatar.cc/150?img=17',
          name: 'Bruce Rogers',
          position: 'Backend Developer',
          socialNetworks: [
               {
                    name: 'Linkedin',
                    url: 'https://www.linkedin.com/in/leopoldo-miranda/',
               },
               {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/',
               },
          ],
     },
];
</script>
