<template>
  <section class="flex justify-center px-5 py-20">
    <div class="container md:w-[600px] text-center">
      <span class="font-medium font-visiapro-light text-xl text-center text-gray-600 tracking-[.25em]">Sabtu, 24 Juni 2023</span>
      <div
        class="text-5xl font-bold text-[#5b6759] font-brittanysignature pt-10"
      >
        {{ props.title }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>
