import { onBeforeUnmount, onMounted, ref } from 'vue'

export default function () {
  const x = ref<number>(-1)
  const y = ref<number>(-1)

  const clickHandler = (event: MouseEvent): void => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    window.addEventListener('click', clickHandler)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', clickHandler)
  })

  return {
    x,
    y
  }
}
