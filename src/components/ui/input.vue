<template>
     <div class="grid gap-1.5">
          <Input
               :type="props.type"
               :disabled="props.disabled"
               :value="props.modelValue"
               v-bind="$attrs"
               @input="
                    $emit(
                         'update:modelValue',
                         ($event.target as HTMLInputElement).value
                    )
               "
          />
     </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input';
import type { IInputProps } from '@/models/input.model';
const emit = defineEmits();

const props = defineProps<IInputProps>();
</script>
