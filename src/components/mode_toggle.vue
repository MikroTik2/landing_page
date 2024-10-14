<template>
     <DropdownMenu>
          <DropdownMenuTrigger asChild>
               <Button variant="ghost" size="icon">
                    <Sun
                         class="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <Moon
                         class="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />

                    <span class="sr-only">Toggle theme</span>
               </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
               <DropdownMenuItem @click="setTheme('light')">
                    Light
               </DropdownMenuItem>
               <DropdownMenuItem @click="setTheme('dark')">
                    Dark
               </DropdownMenuItem>
          </DropdownMenuContent>
     </DropdownMenu>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

const isLightTheme = ref(false);

const setTheme = (theme: 'light' | 'dark') => {
     isLightTheme.value = theme === 'dark';
     document.body.classList.toggle('dark', isLightTheme.value);
     localStorage.setItem('theme', theme);
};

onMounted(() => {
     const savedTheme = localStorage.getItem('theme');
     if (savedTheme) {
          setTheme(savedTheme as 'light' | 'dark');
     }
});
</script>
