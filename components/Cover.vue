<template>
  <div
    class="flex h-screen bg-[url('@/assets/images/bg-cover.jpg')] bg-cover justify-center z-[9999]"
  >
    <div class="flex flex-col w-full md:w-[600px] justify-center items-center">
      <div class="tracking-widest uppercase font-medium pb-6 text-gray-600">
        The Wedding of
      </div>
      <div
        class="text-5xl font-bold font-brittanysignature text-[#5b6759] pb-1"
      >
        {{ props.title }}
      </div>
      <div class="container w-[250px] my-5">
        <img src="@/assets/images/cover-people.png">
      </div>
      <div
        v-if="props.invited != null"
        class="flex flex-col w-full text-center text-gray-700"
      >
        <span class="font-semibold tracking-widest text-gray-500">Kepada Yth. Bapak/Ibu/Saudara/i</span>
        <span
          class="text-2xl py-1 text-[#5b6759] tracking-wider font-['Dancing_Script']"
        >{{ props.invited }}</span>
      </div>
      <button
        class="bg-[#5b6759] rounded-full px-4 py-2 text-white hover:bg-[#a0a89f] font-medium tracking-widest mt-4 cursor-pointer"
        @click="props.onClick"
      >
        <div class="flex items-center text-center">
          <EnvelopeOpenIcon class="h-6 w-6 mr-2" />
          <span class="whitespace-nowrap">BUKA UNDANGAN</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeOpenIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
  title: { type: String, required: true },
  invited: { type: String, default: null },
  onClick: { type: Function, default: () => {} },
});
</script>
