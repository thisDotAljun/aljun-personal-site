import type { Directive } from 'vue'

export const vAnimateOnScroll: Directive = {
  mounted(el: HTMLElement & { _observer: IntersectionObserver }) {
    el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-800')

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-5')
            el.classList.add('opacity-100', 'translate-y-0')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    el._observer = observer
  },
  unmounted(el: HTMLElement & { _observer: IntersectionObserver }) {
    el._observer.disconnect()
  },
}
