<template>
  <section class="flex bg-[url('@/assets/images/bg-cover.jpg')] bg-cover justify-center px-5 py-20">
    <div class="flex flex-col w-full md:w-[768px]">
      <span class="font-medium font-creattion text-5xl text-center text-gray-600 tracking-wide">Save The Date</span>
      <span class="font-medium font-visiapro-light text-xl text-center text-gray-600 tracking-[.25em]">Ahad, 25 Juni 2023</span>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
        <div class="bg-white rounded-lg p-5 shadow-md">
          <div class="text-5xl text-[#5b6759] text-bold">
            {{ formattedDays }}
          </div>
          <span class="text-xs text-gray-500 tracking-wider">days</span>
        </div>
        <div class="bg-white rounded-lg p-5 shadow-md">
          <div class="text-5xl text-[#5b6759] text-bold">
            {{ formattedHours }}
          </div>
          <span class="text-xs text-gray-500 tracking-wider">hours</span>
        </div>
        <div class="bg-white rounded-lg p-5 shadow-md">
          <div class="text-5xl text-[#5b6759] text-bold">
            {{ formattedMinutes }}
          </div>
          <span class="text-xs text-gray-500 tracking-wider">minutes</span>
        </div>
        <div class="bg-white rounded-lg p-5 shadow-md">
          <div class="text-5xl text-[#5b6759] text-bold">
            {{ formattedSeconds }}
          </div>
          <span class="text-xs text-gray-500 tracking-wider">seconds</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div
          v-for="(event, key) in props.events.events"
          :key="key"
          class="bg-white rounded-lg p-4 shadow-md"
        >
          <p class="text-center text-[#5b6759] tracking-[.3em] font-visiapro-light font-bold text-xl">
            {{ event.name }}
          </p>
          <hr
            class="my-2 h-0.5 border-t-0 bg-[#5b6759] opacity-100 dark:opacity-50"
          >
          <div
            v-for="(description, index) in event.descriptions"
            :key="index"
            class="text-gray-500"
          >
            <div class="flex items-center text-center">
              <div class="h-6 w-6 mr-2 text-[#5b6759]">
                <CalendarIcon
                  v-if="index === 0"
                />
                <ClockIcon
                  v-if="(index === 1 && event.descriptions.length === 4)"
                />
                <HomeIcon
                  v-if="(index === 1 && event.descriptions.length === 2) ||(index === 2 && event.descriptions.length === 4)"
                />
              </div>
              <span class="whitespace-nowrap">{{ description }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <NuxtLink
          class="flex justify-center items-center bg-[#5b6759] rounded-full px-4 py-2 text-white hover:bg-[#a0a89f] font-medium tracking-widest cursor-pointer text-center"
          to="https://goo.gl/maps/DvcZgt8PWUCg44T57"
          target="_blank"
        >
          <div class="flex items-center text-center">
            <MapIcon class="h-6 w-6 mr-2" />
            <span class="whitespace-nowrap">Open Maps</span>
          </div>
        </NuxtLink>
        <NuxtLink
          class="flex justify-center items-center bg-[#5b6759] rounded-full px-4 py-2 text-white hover:bg-[#a0a89f] font-medium tracking-widest cursor-pointer text-center"
          :to="getSessionLink(props.session)"
          target="_blank"
        >
          <div class="flex items-center text-center">
            <CalendarDaysIcon class="h-6 w-6 mr-2" />
            <span class="whitespace-nowrap">Add to Calendar</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CalendarIcon, ClockIcon, HomeIcon, MapIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
  events: { type: Object as () => Events, required: true },
  mainDate: { type: Date, default: new Date() },
  session: { type: Number, default: 0 },
});

const targetTime = toRef(() => props.mainDate);
const currentTime = ref<Date>(new Date());

const formattedDays: ComputedRef<string> = computed(() => remainingTime.value.days);
const formattedHours: ComputedRef<string> = computed(() => remainingTime.value.hours);
const formattedMinutes: ComputedRef<string> = computed(() => remainingTime.value.minutes);
const formattedSeconds: ComputedRef<string> = computed(() => remainingTime.value.seconds);

const remainingTime: ComputedRef<{
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}> = computed(() => {
  const timeDifference = targetTime.value.getTime() - currentTime.value.getTime();

  if (timeDifference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  const totalSeconds: number = Math.floor(timeDifference / 1000);
  const days: number = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours: number = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes: number = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds: number = Math.floor(totalSeconds % 60);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
});

function getSessionLink (session: number): string {
  if (session === 1) { return 'https://calndr.link/event/CHQwdCGmvf'; }
  return 'https://calndr.link/event/THFLC1VGDL';
}

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});
</script>
