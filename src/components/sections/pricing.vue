<template>
     <section id="pricing" class="container py-24 sm:py-32">
          <h2 class="text-3xl md:text-4xl font-bold text-center">
               Get
               <span
                    class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
               >
                    Unlimited
               </span>
               Access
          </h2>
          <h3 class="text-xl text-center text-muted-foreground pt-4 pb-8">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
               reiciendis.
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <Card v-for="(element, i) in pricingList" :key="i">
                    <CardHeader>
                         <CardTitle class="flex item-center justify-between">
                              {{ element.title }}
                              <Badge
                                   v-if="
                                        element.popular === PopularPlanType.YES
                                   "
                                   variant="secondary"
                                   class="text-sm rounded-full text-green-500"
                              >
                                   Most popular
                              </Badge>
                         </CardTitle>
                         <div>
                              <span class="text-3xl font-bold"
                                   >${{ element.price }}</span
                              >
                              <span class="text-muted-foreground"> /month</span>
                         </div>

                         <CardDescription>{{
                              element.description
                         }}</CardDescription>
                    </CardHeader>

                    <CardContent>
                         <Button
                              class="w-full bg-green-500 hover:bg-green-500/90"
                              >{{ element.buttonText }}</Button
                         >
                    </CardContent>

                    <hr class="w-4/5 m-auto mb-4" />

                    <CardFooter class="flex">
                         <div class="space-y-4">
                              <span
                                   v-for="(benefit, i) in element.benefitList"
                                   :key="i"
                                   class="flex"
                              >
                                   <Check class="text-green-500" />
                                   <h3 class="ml-2">{{ benefit }}</h3>
                              </span>
                         </div>
                    </CardFooter>
               </Card>
          </div>
     </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Badge } from '@/components/ui/badge';
import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
} from '@/components/ui/card';

import { Check } from 'lucide-vue-next';

import Button from '@/components/ui/button/Button.vue';

enum PopularPlanType {
     NO = 0,
     YES = 1,
}

interface PricingProps {
     title: string;
     popular: PopularPlanType;
     price: number;
     description: string;
     buttonText: string;
     benefitList: string[];
}

const pricingList = ref<PricingProps[]>([
     {
          title: 'Free',
          popular: 0,
          price: 0,
          description:
               'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
          buttonText: 'Get Started',
          benefitList: [
               '1 Team member',
               '2 GB Storage',
               'Upto 4 pages',
               'Community support',
               'lorem ipsum dolor',
          ],
     },
     {
          title: 'Premium',
          popular: 1,
          price: 5,
          description:
               'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
          buttonText: 'Start Free Trial',
          benefitList: [
               '4 Team member',
               '4 GB Storage',
               'Upto 6 pages',
               'Priority support',
               'lorem ipsum dolor',
          ],
     },
     {
          title: 'Enterprise',
          popular: 0,
          price: 40,
          description:
               'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
          buttonText: 'Contact US',
          benefitList: [
               '10 Team member',
               '8 GB Storage',
               'Upto 10 pages',
               'Priority support',
               'lorem ipsum dolor',
          ],
     },
]);
</script>
