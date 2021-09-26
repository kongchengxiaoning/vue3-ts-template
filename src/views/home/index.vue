<template>
  <img src="@/assets/images/logo.png" alt="Vue logo">
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>x: {{ x }} - y: {{ y }}</div>
  <div>name: {{ getUserInfo.name }}</div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import useMousePosition from '@/hooks/useMousePosition'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const getUserInfo = computed(() => store.getters.userInfo || {})

const getLogin = async() => {
  await store.dispatch('user/login', { userName: 'admin', password: '123456' })
}
getLogin()

const { x, y } = useMousePosition()
</script>

<style lang="scss" scoped>
</style>
