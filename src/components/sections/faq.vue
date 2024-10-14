<template>
     <section id="faq" class="container py-24 sm:py-32">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
               Frequently Asked
               <span
                    class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
               >
                    Questions
               </span>
          </h2>

          <Accordion type="single" collapsible class="w-full AccordionRoot">
               <AccordionItem
                    v-for="(element, i) in FAQList"
                    :key="i"
                    :value="element.value"
               >
                    <AccordionTrigger class="text-left">
                         {{ element.question }}
                    </AccordionTrigger>

                    <AccordionContent>{{ element.answer }}</AccordionContent>
               </AccordionItem>
          </Accordion>

          <h3 class="font-medium mt-4">
               Still have questions?
               <a
                    rel="noreferrer noopener"
                    href="#"
                    class="text-green-500 transition-all border-green-500 hover:border-b-2"
               >
                    Contact us
               </a>
          </h3>
     </section>
</template>

<script setup lang="ts">
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from '@/components/ui/accordion';
import { ref } from 'vue';

interface IFAQProps {
     question: string;
     answer: string;
     value: string;
}

const FAQList = ref<IFAQProps[]>([
     {
          question: 'Is this template free?',
          answer: 'Yes. It is a free ShadcnUI template.',
          value: 'item-1',
     },
     {
          question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
          value: 'item-2',
     },
     {
          question:
               'Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?',
          answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?',
          value: 'item-3',
     },
     {
          question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
          answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
          value: 'item-4',
     },
     {
          question:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
          value: 'item-5',
     },
]);
</script>
