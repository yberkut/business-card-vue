<template>
  <BaseImage :src="imageUrl" alt="avatar" />
</template>

<script>
  import { mapState } from 'vuex'
  import { getBreakpoint } from '../shared/UI/Breakpoint'
  import BaseImage from './BaseImage.vue'

  export default {
    components: {
      BaseImage
    },
    computed: {
      styled() {
        return { breakpoint: getBreakpoint(this) }
      },
      imageUrl() {
        if (!this.user) {
          return ''
        }
        return this.styled.breakpoint.xsOnly
          ? this.user.avatarSmall
          : this.user.avatarBig
      },
      ...mapState([
        'user'
      ])
    }
  }
</script>
