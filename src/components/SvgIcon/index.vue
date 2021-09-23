<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#333',
      }
    },
    setup(props) {
      return {
        isExternal: computed(() => /^(https?:|mailto:|tel:)/.test(props.iconClass)),
        iconName: computed(() => `#icon-${ props.iconClass }`),
        svgClass: computed(() => {
          if (props.className) {
            return `svg-icon ${props.className}`
          } else {
            return `svg-icon`
          }
        }),
        styleExternalIcon: computed(() => {
          return {
            mask: `url(${props.iconClass}) no-repeat 50% 50%`,
            '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`
          }
        })
      }
    }
  })
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
