<template>
  <div
    class="flex h-screen bg-[url('@/assets/images/bg-cover.jpg')] bg-cover justify-center z-[9999]"
  >
    <div class="flex flex-col w-full md:w-[600px] justify-center items-center">
      <div class="tracking-widest uppercase font-medium pb-2 text-gray-600">
        The Wedding of
      </div>
      <div
        class="text-5xl font-bold font-['Dancing_Script'] text-[#5b6759] pb-3"
      >
        {{ props.title }}
      </div>
      <div class="tracking-widest pb-1 text-sm text-gray-500">
        We're Getting Married
      </div>
      <div class="container w-[250px] my-5">
        <img src="@/assets/images/cover-people.png">
      </div>
      <div
        v-if="props.invited != null"
        class="flex flex-col w-full text-center text-gray-700"
      >
        <span class="font-semibold tracking-widest text-gray-500">TO</span>
        <span
          class="text-2xl py-1 text-gray-700 tracking-wider font-['Dancing_Script']"
        >{{ props.invited }}</span>
      </div>
      <button
        class="bg-[#1B9C85] rounded-full px-4 py-2 text-white hover:bg-[#87CBB9] font-medium tracking-widest mt-4 cursor-pointer"
        @click="props.onClick"
      >
        OPEN
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  invited: { type: String, default: null },
  onClick: { type: Function, default: () => {} },
});
</script>
