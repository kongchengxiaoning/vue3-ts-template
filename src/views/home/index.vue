<template>
  <img src="@/assets/images/logo.png" alt="Vue logo">
  <hello-world msg="Hello Vue 3 + TypeScript + Vite" />
  <div>x: {{ x }} - y: {{ y }}</div>
  <div>name: {{ getUserInfo.name }}</div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld/index.vue'

import useMousePosition from '@/hooks/event/useMousePosition'
import { useUserStoreWithOut } from '@/store/modules/user'
import { computed } from 'vue'

const userStore = useUserStoreWithOut()
const getUserInfo = computed(() => userStore.getUserInfo)

const getLogin = async() => {
  await userStore.login({ username: 'admin', password: '123456' })
}
getLogin()

const { x, y } = useMousePosition()
</script>

<style lang="scss" scoped>
</style>
