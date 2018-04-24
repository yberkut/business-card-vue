<template>
  <v-container :class="styled.infoContainer" fill-height>
    <v-layout wrap>
      <v-flex xs12 v-if="styled.breakpoint.smAndUp">
        <Greetings background-color="#249ee0" />
      </v-flex>
      <v-flex xs12 class="mt-2">
        <Title />
        <v-divider :class="styled.divider" />
      </v-flex>
      <v-flex xs12>
        <InfoLayout />
      </v-flex>
      <v-flex xs12 class="mt-2">
        <SocialLayout />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { getBreakpoint } from '../shared/UI/Breakpoint'
  import Greetings from './Greetings'
  import InfoLayout from './InfoLayout'
  import SocialLayout from './SociaLayout'
  import Title from './Title'


  export default {
    components: {
      SocialLayout,
      InfoLayout,
      Title,
      Greetings
    },
    computed: {
      styled() {
        const breakpoint = getBreakpoint(this)
        return { ...classes(breakpoint), breakpoint }
      }
    }
  }

  const classes = bp => ({
    infoContainer: {
      'pa-2': true,
      'pa-3': bp.mdAndUp
    },
    divider: {
      'divider my-3': true,
      'mt-4': bp.smAndUp
    }
  })
</script>
