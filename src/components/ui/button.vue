<template>
     <Button
          v-if="type === 'button'"
          :disabled="props.disabled"
          :variant="props.variant"
          :size="props.size"
          :type="props.type"
          class="h-[40px]"
     >
          <slot />
     </Button>

     <a
          v-else
          class="h-[40px]"
          :href="`${props.href}`"
          :class="
               cn(buttonVariants({ variant: props.variant, size: props.size }))
          "
     >
          <slot />
     </a>
</template>

<script lang="ts" setup>
import { buttonVariants, Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import type { IButtonProps } from '@/models/button.model';

const props = defineProps<IButtonProps>();
</script>
