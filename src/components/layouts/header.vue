<template>
     <header
          class="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background"
     >
          <ul
               class="group flex-1 list-none items-center gap-x-1 container h-14 px-4 flex justify-between"
               data-orientation="horizontal"
          >
               <div class="font-bold flex">
                    <a
                         rel="noreferrer noopener"
                         href="/"
                         class="ml-2 font-bold text-xl flex"
                    >
                         <Icon name="branding" />
                         ShadcnUI/Vue
                    </a>
               </div>

               <!-- mobile -->
               <span class="flex md:hidden">
                    <Sheet>
                         <ModeToggle />

                         <SheetTrigger class="px-2">
                              <Menu />
                         </SheetTrigger>

                         <SheetContent side="left">
                              <SheetHeader>
                                   <SheetTitle class="font-bold text-xl">
                                        Shadcn/React
                                   </SheetTitle>
                              </SheetHeader>

                              <nav
                                   class="flex flex-col justify-center items-center gap-2 mt-4"
                              >
                                   <Button
                                        type="link"
                                        variant="ghost"
                                        :href="element.href"
                                        v-for="(element, i) in menuItems"
                                        :key="i"
                                   >
                                        {{ element.label }}
                                   </Button>

                                   <Button
                                        type="link"
                                        variant="secondary"
                                        href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                                   >
                                        <GithubLogoIcon class="mr-2 w-5 h-5" />
                                        Github
                                   </Button>
                              </nav>
                         </SheetContent>
                    </Sheet>
               </span>

               <!-- center -->
               <nav class="hidden md:flex gap-2">
                    <Button
                         type="link"
                         variant="ghost"
                         :href="element.href"
                         v-for="(element, i) in menuItems"
                         :key="i"
                    >
                         {{ element.label }}
                    </Button>
               </nav>

               <!-- right -->
               <div class="hidden md:flex gap-2">
                    <Button
                         type="link"
                         variant="secondary"
                         href="https://github.com/MikroTik2/landing_page_for_school"
                    >
                         <GithubLogoIcon class="mr-2 w-5 h-5" />
                         Github
                    </Button>

                    <ModeToggle />
               </div>
          </ul>
     </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
     Sheet,
     SheetContent,
     SheetHeader,
     SheetTitle,
     SheetTrigger,
} from '@/components/ui/sheet';
import { GithubLogoIcon } from '@radix-icons/vue';
import { Menu } from 'lucide-vue-next';

import Button from '@/components/ui/button.vue';
import Icon from '@/components/ui/icon.vue';
import ModeToggle from '@/components/mode_toggle.vue';

interface IMenuItemsProps {
     href: string;
     label: string;
}

const menuItems = ref<IMenuItemsProps[]>([
     {
          href: '#features',
          label: 'Features',
     },
     {
          href: '#testimonials',
          label: 'Testimonials',
     },
     {
          href: '#pricing',
          label: 'Pricing',
     },
     {
          href: '#faq',
          label: 'FAQ',
     },
]);
</script>
