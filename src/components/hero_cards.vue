<template>
     <div
          class="hidden lg:flex flex-row flex-wrap gap-8 relative w-[338px] xl:w-[700px] h-[500px]"
     >
          <Card
               class="absolute bg-muted/50 w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
          >
               <CardHeader class="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                         <AvatarImage
                              alt="avatar"
                              src="https://github.com/shadcn.png"
                         />
                         <AvatarFallback>SH</AvatarFallback>
                    </Avatar>

                    <div class="flex flex-col">
                         <CardTitle class="text-lg"
                              >Artur Dotsent Vue</CardTitle
                         >
                         <CardDescription>@MikroTik2</CardDescription>
                    </div>
               </CardHeader>

               <CardContent>This landing page is awesome!</CardContent>
          </Card>

          <Card
               class="absolute hidden xl:flex bg-muted/50 right-[20px] top-4 w-80 flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
          >
               <CardHeader class="mt-8 flex justify-center items-center pb-2">
                    <Image
                         src="/images/avatar.jpg"
                         alt="avatar"
                         class="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />

                    <CardTitle class="text-center">Artur Dotsent</CardTitle>
                    <CardDescription class="font-normal text-green-500">
                         Frontend Developer
                    </CardDescription>
               </CardHeader>

               <CardContent class="text-center pb-2">
                    <p>
                         I really enjoy transforming ideas into functional
                         software that exceeds expectations
                    </p>
               </CardContent>

               <CardFooter>
                    <div>
                         <Button
                              type="link"
                              size="icon"
                              variant="ghost"
                              href="https://github.com/MikroTik2"
                         >
                              <span class="sr-only">Github icon</span>
                              <GithubLogoIcon class="w-5 h-5" />
                         </Button>
                         <Button
                              type="link"
                              variant="ghost"
                              size="icon"
                              href="https://www.instagram.com/artur.dosent28/"
                         >
                              <span class="sr-only">Instagram icon</span>
                              <Instagram />
                         </Button>
                         <Button
                              type="link"
                              variant="ghost"
                              size="icon"
                              href="https://www.linkedin.com/in/artur-dotsent-0a3a722a1/"
                         >
                              <span class="sr-only">Linkedin icon</span>
                              <Linkedin />
                         </Button>
                    </div>
               </CardFooter>
          </Card>

          <Card
               class="absolute bg-muted/50 top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
          >
               <CardHeader>
                    <CardTitle class="flex item-center justify-between">
                         Free

                         <Badge
                              variant="secondary"
                              class="text-sm rounded-full text-green-500"
                         >
                              Most popular
                         </Badge>
                    </CardTitle>

                    <div>
                         <span class="text-3xl font-bold">$0</span>
                         <span class="text-muted-foreground"> /month</span>
                    </div>

                    <CardDescription>
                         Lorem ipsum dolor sit, amet ipsum consectetur
                         adipisicing elit.
                    </CardDescription>
               </CardHeader>

               <CardContent>
                    <Button
                         type="button"
                         class="w-full bg-green-500 hover:bg-green-500/90"
                         >Start Free Trial</Button
                    >
               </CardContent>

               <hr class="w-4/5 m-auto mb-4" />

               <CardFooter class="flex">
                    <div class="space-y-4">
                         <span
                              class="flex"
                              v-for="(element, i) in pricesInfo"
                              :key="i"
                         >
                              <Check class="text-green-500" />
                              <h3 class="ml-2">{{ element.label }}</h3>
                         </span>
                    </div>
               </CardFooter>
          </Card>

          <Card
               class="absolute hidden xl:block bg-muted/50 w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
          >
               <CardHeader
                    class="space-y-1 flex md:flex-row justify-start items-start gap-4"
               >
                    <div class="mt-1 bg-green-500/20 p-1 rounded-xl">
                         <Icon
                              class="w-12 fill-green-500 h-12"
                              name="light-darkmode"
                         />
                    </div>

                    <div>
                         <CardTitle>Light & dark mode</CardTitle>
                         <CardDescription class="text-md mt-2">
                              Lorem ipsum dolor sit amet consect adipisicing
                              elit. Consectetur natusm.
                         </CardDescription>
                    </div>
               </CardHeader>
          </Card>
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Check, Instagram, Linkedin } from 'lucide-vue-next';
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
     CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from './ui/badge';

import Button from '@/components/ui/button.vue';
import Icon from '@/components/ui/icon.vue';
import Image from '@/components/ui/image.vue';

import { GithubLogoIcon } from '@radix-icons/vue';

interface IPricesInfo {
     label: string;
}

const pricesInfo = ref<IPricesInfo[]>([
     { label: '4 Team member' },
     { label: '4 GB Storage' },
     { label: 'Upto 6 pages' },
]);
</script>
