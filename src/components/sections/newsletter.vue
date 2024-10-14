<template>
     <section id="newsletter">
          <hr class="w-11/12 mx-auto" />

          <div class="container py-24 sm:py-32">
               <h3 class="text-center text-4xl md:text-5xl font-bold">
                    Join Our Daily
                    <span
                         class="bg-gradient-to-b from-green-500/60 to-green-500 text-transparent bg-clip-text"
                    >
                         Newsletter
                    </span>
               </h3>
               <p class="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Lorem ipsum dolor sit amet consectetur.
               </p>

               <form
                    class="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
                    @submit="onSubmit"
               >
                    <FormField v-slot="{ componentField }" name="email">
                         <FormItem class="w-full" v-auto-animate>
                              <FormControl>
                                   <Input
                                        type="email"
                                        class="bg-muted/50 dark:bg-muted/80"
                                        autocomplete="email"
                                        placeholder="leomirandadev@gmail.com"
                                        v-bind="componentField"
                                   />
                              </FormControl>
                              <FormMessage />
                         </FormItem>
                    </FormField>
                    <Button
                         class="bg-green-500 hover:bg-green-500/90"
                         type="submit"
                    >
                         Subscribe
                    </Button>
               </form>
          </div>

          <Toaster />
          <hr class="w-11/12 mx-auto" />
     </section>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import {
     FormControl,
     FormField,
     FormItem,
     FormMessage,
} from '@/components/ui/form';
import { Toaster } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import { useForm } from 'vee-validate';
import * as z from 'zod';

import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import telegramService from '@/services/modules/telegram.module';

const { toast } = useToast();

const schema = toTypedSchema(
     z.object({
          email: z.string().email(),
     })
);

const { handleSubmit, resetForm } = useForm({
     validationSchema: schema,
});

const onSubmit = handleSubmit(async values => {
     resetForm();

     await telegramService.sendMessage(values.email);

     toast({
          title: 'Success',
          description:
               'You have successfully subscribed to our daily newsletter.',
     });
});
</script>
