<template>
  <section class="flex justify-center px-5 bg-[url('@/assets/images/bg-cover.jpg')] bg-cover py-20">
    <div class="container md:w-[600px] text-center">
      <div
        class="text-5xl font-bold text-[#5b6759] font-brittanysignature pb-1"
      >
        {{ props.title }}
      </div>
      <div class="container w-[250px] my-5 mx-auto">
        <img src="@/assets/images/cover-people.png">
      </div>
      <div class="tracking-widest font-['Allura'] text-lg text-gray-500">
        We're Getting Married
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>
