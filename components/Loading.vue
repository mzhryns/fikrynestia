<template>
  <div class="left-0 right-0 w-full h-full fixed z-[9999] bg-neutral-900">
    <div class="left-0 right-0 w-full h-full absolute">
      <div class="left-[50%] top-[50%] absolute translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 class="text-[1.8rem] lg:text-[3rem] text-neutral-100 pb-8 font-brittanysignature">
          {{ props.title }}
        </h1>
        <span class="w-[75px] h-[75px] inline-block rounded-[100%] border-2 border-black/5 border-t-white animate-spin" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>
