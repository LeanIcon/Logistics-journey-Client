import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useInView(threshold = 0.2) {
  const inView = ref(false)
  const sectionRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inView.value = entry.isIntersecting
        })
      },
      { threshold }
    )

    if (sectionRef.value) observer.observe(sectionRef.value)
  })

  onBeforeUnmount(() => {
    if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
  })

  return {
    inView,
    sectionRef,
  }
}
