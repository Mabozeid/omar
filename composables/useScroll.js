// composables/useScroll.js

import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll() {
  const isScrolled = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { isScrolled };
}
