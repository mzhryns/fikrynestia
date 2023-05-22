export default function useSound () {
  const audioRef: Ref<HTMLAudioElement | null> = ref(null);
  // const isPlayingRef: Ref<Boolean> = ref(false);

  function playSound (): void {
    if (audioRef.value) {
      // if (!isPlayingRef.value) {
      audioRef.value.play();
    }
    // isPlayingRef.value = true;
    // }
  }

  function pauseSound (): void {
    if (audioRef.value) {
      // if (isPlayingRef.value) {
      audioRef.value.pause();
      // }
      // isPlayingRef.value = false;
    }
  }

  return {
    audioRef,
    // isPlayingRef,
    playSound,
    pauseSound,
  };
}
