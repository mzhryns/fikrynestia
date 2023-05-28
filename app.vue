<template>
  <Transition
    name="loading-screen"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <Loading
      v-if="!isPageLoaded"
      :title="data.title"
    />
  </Transition>

  <Transition
    name="cover"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__slideOutUp"
  >
    <div
      v-if="!isCoverOpened"
      class="fixed w-full"
    >
      <Cover
        :title="data.title"
        :invited="data.invited"
        :on-click="onOpenClick"
      />
    </div>
  </Transition>

  <Header
    v-if="isCoverOpened"
    :title="data.title"
  />

  <Content
    v-if="isCoverOpened"
    :groom="data.groom.name"
    :groom-description="data.groom.parents"
    :bride="data.bride.name"
    :bride-description="data.bride.parents"
  />

  <DatePlace
    v-if="isCoverOpened"
    :events="data.events"
    :session="sessionSelected"
    :main-date="mainDate"
  />

  <Quote v-if="isCoverOpened" />

  <Gift
    v-if="isOnlineGift"
  />

  <Footer
    v-if="isCoverOpened"
    :title="data.title"
  />

  <div
    v-if="isCoverOpened"
    class="flex bg-[url('@/assets/images/bg-cover.jpg')] bg-cover justify-center"
  >
    <span class="text-gray-500 py-5">Made with ❤️ PunyaHajat.com</span>
  </div>

  <audio
    ref="audioRef"
    hidden="true"
    loop
  >
    <source
      src="/audio/bg-sound.mp3"
      type="audio/mpeg"
    >
  </audio>

  <button
    v-if="isCoverOpened"
    type="button"
    class="fixed bottom-0 right-0 p-4 text-center z-[1000] cursor-pointer"
    @click="toggleSound"
  >
    <div class="bg-[#5b6759] hover:bg-[#a0a89f] rounded-full p-2 shadow cursor-pointer">
      <svg
        v-if="!isPlayingRef"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white fill-current"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5 4.103v11.794L15.436 10 5 4.103zm1 1.794L13.572 10 6 13.103V5.897z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white fill-current"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M6 4h3v12H6V4zm5 0h3v12h-3V4z"
        />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
const groom: Person = {
  name: 'Muhammad Fikry Hazmi',
  parents: 'Putra Bpk. Afaruq Joesman Hadi & Ibu Masrifah',
};

const bride: Person = {
  name: 'Nestia Risminda',
  parents: 'Putri Bpk. Abdul Malik & Ibu Risna Wirawan',
};

const akad: SingleEvent = {
  name: 'AKAD NIKAH',
  descriptions: [
    'Jum\'at, 23 Juni 2023',
    'Kediaman Mempelai Wanita',
  ],
};

const reception: SingleEvent = {
  name: 'RESEPSI',
  descriptions: [
    'Ahad, 25 Juni 2023',
    'Auditorium Yadika Bangil',
    'Jl. Salem No.3 Kersikan Bangil',
  ],
};

const events: Events = {
  events: [akad, reception],
};

const data: Data = reactive({
  title: 'Fikry & Nestia',
  groom,
  bride,
  events,
});

const setupFirstSection = () => {
  mainDate.value = new Date('2023-06-25 10:00:00');
  events.events[1].descriptions.splice(1, 0, 'Pukul 10.00-12.00 WIB');
};

const setupSecondSession = () => {
  mainDate.value = new Date('2023-06-25 12:00:00');
  events.events[1].descriptions.splice(1, 0, 'Pukul 12.00-14.00 WIB');
};

const { audioRef, playSound, pauseSound } = useSound();

const isPageLoaded = ref<boolean>(false);
const isCoverOpened = ref<boolean>(false);
const sessionSelected = ref<number>(0);
const mainDate = ref<Date>(new Date());
const isPlayingRef = ref<boolean>(false);
const isOnlineGift = ref<number>(0);

const route = useRoute();

const onOpenClick = () => {
  isCoverOpened.value = true;

  playSound();
  isPlayingRef.value = true;
};

function toggleSound (): void {
  if (!isPlayingRef.value) {
    playSound();
    isPlayingRef.value = true;
  } else {
    pauseSound();
    isPlayingRef.value = false;
  }
}

onMounted(() => {
  if (route.query.i) {
    Object.assign(data, { invited: route.query.i });
  }

  if (route.query.s) {
    const parsedInt = parseInt(route.query.s.toString(), 10);
    sessionSelected.value = (parsedInt > 1 || isNaN(parsedInt)) ? 0 : parsedInt;

    if (parsedInt === 0 || parsedInt > 1) {
      setupFirstSection();
    } else {
      setupSecondSession();
    }
  } else {
    sessionSelected.value = 0;
    setupFirstSection();
  }

  if (route.query.g) {
    const parsedInt = parseInt(route.query.g.toString(), 10);
    isOnlineGift.value = (parsedInt > 1 || isNaN(parsedInt)) ? 0 : parsedInt;
  } else {
    isOnlineGift.value = 0;
  }

  isPageLoaded.value = true;
});

useHead({
  title: data.title,
  bodyAttrs: {
    class: 'font-[\'Lato\']',
  },
  link: [
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' },
    { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  ],
});
</script>
