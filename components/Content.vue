<template>
  <section class="flex justify-center px-5 bg-white py-20">
    <div class="container md:w-[600px] text-center">
      <span class="font-bold text-xl text-gray-600 tracking-wide uppercase">{{ title }}</span>
      <p class="text-gray-500 mt-4 pt-5 md:w-5/6 mx-auto my-auto">
        {{ text1 }}
      </p>
      <div class="mt-10">
        <div class="text-4xl md:text-4xl font-['Dancing_Script'] text-[#5b6759]">
          {{ props.groom }}
        </div>
        <span class="text-sm text-gray-500 font-visiapro-light">{{ props.groomDescription }}</span>
      </div>
      <div class="text-xl mt-4 text-gray-500 tracking-wider font-semibold">
        &
      </div>
      <div class="mt-4">
        <div class="text-4xl md:text-4xl font-['Dancing_Script'] text-[#5b6759]">
          {{ props.bride }}
        </div>
        <span class="text-sm text-gray-500 font-visiapro-light">{{ props.brideDescription }}</span>
      </div>
      <p class="text-gray-500 mt-10 md:w-5/6 mx-auto my-auto">
        {{ text2 }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  groom: { type: String, required: true },
  bride: { type: String, required: true },
  groomDescription: { type: String, required: true },
  brideDescription: { type: String, required: true },
});

const title = ref<string>('اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ');
const text1 = ref<string>('Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan mengharap Ridho serta Rahmat Allah Subhanahu Wa Ta\'ala, kami bermaksud menyelenggarakan pernikahan putra-putri kami:');
const text2 = ref<string>('Merupakan kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do\'a restu kepada kedua mempelai.');
</script>
