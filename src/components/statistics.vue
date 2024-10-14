<template>
     <section id="statistics">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
               <div
                    class="space-y-2 text-center"
                    v-for="(element, i) in stats"
                    :key="i"
               >
                    <h2 class="text-3xl sm:text-4xl font-bold">
                         {{ element.quantity }}
                    </h2>
                    <p class="text-xl text-muted-foreground">
                         {{ element.description }}
                    </p>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IPropsStatistics {
     quantity: string;
     description: string;
}

const stats = ref<IPropsStatistics[]>([
     {
          quantity: '2.7K+',
          description: 'Users',
     },
     {
          quantity: '1.8K+',
          description: 'Subscribers',
     },
     {
          quantity: '112',
          description: 'Downloads',
     },
     {
          quantity: '4',
          description: 'Products',
     },
]);
</script>
