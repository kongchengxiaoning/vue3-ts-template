<template>
  <img src="@/assets/images/logo.png" alt="Vue logo">
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>x: {{ x }} - y: {{ y }}</div>
  <div>name: {{ getAppid.name }}</div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import useMousePosition from '@/hooks/useMousePosition'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

store.commit('user/SET_USER_INFO', {
  name: 'XIAOMING',
  age: 18
})

const getAppid = computed(() => store.getters.userInfo || {})

const { x, y } = useMousePosition()
</script>

<style lang="scss" scoped>
</style>
