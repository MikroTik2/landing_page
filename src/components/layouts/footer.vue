<template>
     <footer id="footer">
          <hr class="w-11/12 mx-auto" />

          <section
               class="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
          >
               <div class="col-span-full xl:col-span-2">
                    <a
                         rel="noreferrer noopener"
                         href="/"
                         class="font-bold text-xl flex"
                    >
                         <Icon name="branding" />
                         ShadcnUI/Vue
                    </a>
               </div>

               <div class="flex flex-col gap-2">
                    <h3 class="font-bold text-lg">Follow US</h3>
                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Github
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Twitter
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Dribbble
                         </a>
                    </div>
               </div>

               <div class="flex flex-col gap-2">
                    <h3 class="font-bold text-lg">Platforms</h3>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Web
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Mobile
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Desktop
                         </a>
                    </div>
               </div>

               <div class="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">About</h3>
                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Features
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Pricing
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              FAQ
                         </a>
                    </div>
               </div>

               <div class="flex flex-col gap-2">
                    <h3 className="font-bold text-lg">Community</h3>
                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Youtube
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Discord
                         </a>
                    </div>

                    <div>
                         <a
                              rel="noreferrer noopener"
                              href="#"
                              class="opacity-60 hover:opacity-100"
                         >
                              Twitch
                         </a>
                    </div>
               </div>
          </section>

          <section class="container pb-14 text-center">
               <h3>
                    &copy; {{ CopyrightAuto() }} Landing page made by
                    <a
                         rel="noreferrer noopener"
                         target="_blank"
                         href="https://www.linkedin.com/in/leopoldo-miranda/"
                         class="text-[#32a852] transition-all border-[#32a852] hover:border-b-2"
                    >
                         Artur Dotsent
                    </a>
               </h3>
          </section>
     </footer>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/icon.vue';
import CopyrightAuto from '@/helpers/copyright-auto.helper';
</script>
