<template>
  <section class="flex justify-center px-5 bg-[url('@/assets/images/bg-cover.jpg')] bg-cover py-20">
    <div class="container md:w-[600px] text-center">
      <div class="tracking-widest uppercase font-medium pb-2 text-gray-600">
        The Wedding of
      </div>
      <div
        class="text-5xl font-bold font-['Dancing_Script'] text-[#29A07B] pb-3"
      >
        {{ props.title }}
      </div>
      <div class="tracking-widest pb-1 text-sm text-gray-500">
        We're Getting Married
      </div>
      <div class="container w-[250px] my-5 mx-auto">
        <img src="@/assets/images/cover-people.png">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>
