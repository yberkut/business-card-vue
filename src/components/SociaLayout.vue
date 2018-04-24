<template>
  <v-layout id="social-layout" wrap>
    <v-flex xs9 sm12 class="social">
      <Social />
    </v-flex>
    <v-flex xs3 v-if="styled.breakpoint.xsOnly">
      <QrCode />
    </v-flex>
  </v-layout>
</template>

<script>
  import { getBreakpoint } from '../shared/UI/Breakpoint'
  import QrCode from './QrCode.vue'
  import Social from './Social.vue'

  export default {
    components: {
      Social,
      QrCode
    },
    computed: {
      styled() {
        return { breakpoint: getBreakpoint(this) }
      }
    }
  }
</script>

<style scoped>
  .social {
    align-self: flex-end;
  }
</style>
