<template>
  <v-layout>
    <v-flex 
      xs12 
      sm8>
      <Info />
    </v-flex>
    <v-flex 
      v-if="styled.breakpoint.smAndUp" 
      sm4>
      <QrCode />
    </v-flex>
  </v-layout>
</template>

<script>
  import { getBreakpoint } from '../shared/UI/Breakpoint'
  import Info from './Info.vue'
  import QrCode from './QrCode.vue'

  export default {
    components: {
      Info,
      QrCode
    },
    computed: {
      styled() {
        return { breakpoint: getBreakpoint(this) }
      }
    }
  }
</script>
