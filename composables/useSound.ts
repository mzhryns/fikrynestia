export default function useSound () {
  const audioRef: Ref<HTMLAudioElement | null> = ref(null);

  function playSound (): void {
    if (audioRef.value) {
      audioRef.value.play();
    }
  }

  function pauseSound (): void {
    if (audioRef.value) {
      audioRef.value.pause();
    }
  }

  return {
    audioRef,
    playSound,
    pauseSound,
  };
}
