<template>
     <section id="sponsors" class="container pt-24 sm:pb-32 sm:pt-29">
          <h2
               class="text-center text-md lg:text-xl font-bold mb-8 text-green-500"
          >
               Investors and founders
          </h2>

          <div
               class="flex flex-wrap justify-center items-center gap-4 md:gap-8"
          >
               <div
                    v-for="(element, i) in sponsors"
                    :key="i"
                    class="flex items-center gap-1 text-muted-foreground/60"
               >
                    <span>
                         <Icon :name="element.icon" />
                    </span>

                    <h3 class="text-xl font-bold">{{ element.name }}</h3>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '@/components/ui/icon.vue';

interface ISponsorProps {
     icon: string;
     name: string;
}

const sponsors = ref<ISponsorProps[]>([
     { icon: 'radar', name: 'Sponsor 1' },
     { icon: 'radar', name: 'Sponsor 2' },
     { icon: 'radar', name: 'Sponsor 3' },
     { icon: 'radar', name: 'Sponsor 4' },
     { icon: 'radar', name: 'Sponsor 5' },
     { icon: 'radar', name: 'Sponsor 6' },
]);
</script>
