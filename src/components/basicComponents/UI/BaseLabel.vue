<template>
  <div class="absolute w-28.5 h-22 top-0 right-0">
    <p
      class="relative bg-black text-white text-center font-medium text-xs rotate-45 left-1 top-6 w-35 pb-0.5"
    >
      {{ sale }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSaleCalculation } from '@/use/useSaleCalculation.js';

/* props */

const props = defineProps({
  element: {
    type: Object,
    required: true
  }
});

/* sale calculation */
const { countSale } = useSaleCalculation();
const sale = computed(() => {
  if (!props.element.sale) return;
  return countSale(props.element.sale, props.element.price);
});
</script>
