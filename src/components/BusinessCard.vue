<template>
  <div 
    :class="styled.businessCard" 
    class="business-card elevation-2">
    <v-container 
      class="pa-0" 
      fill-height>
      <v-layout wrap>
        <v-flex 
          :class="styled.avatarContainer" 
          xs12 
          sm4>
          <Avatar />
          <Greetings 
            v-if="styled.breakpoint.xsOnly" 
            right-side 
            background-color="#249ee0" />
        </v-flex>
        <v-flex 
          xs12 
          sm8>
          <InfoContainer />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { getBreakpoint } from '../shared/UI/Breakpoint'
  import Avatar from './Avatar.vue'
  import Greetings from './Greetings.vue'
  import InfoContainer from './InfoContainer.vue'

  export default {
    components: {
      InfoContainer,
      Greetings,
      Avatar
    },
    computed: {
      styled() {
        const breakpoint = getBreakpoint(this)
        return { ...classes(breakpoint), breakpoint }
      }
    },
    mounted: function () {
      // fetching data as soon as the component's been mounted
      this.$store.dispatch('fetchData')
    },
  }

  const classes = bp => ({
    businessCard: {
      'business-card-mobile-port': bp.xsOnly,
      'business-card-mobile-land': bp.smOnly,
      'business-card-desk': bp.mdAndUp
    },
    avatarContainer: {
      'avatar-container': true,
      'avatar-container-mobile-port': bp.xsOnly
    }
  })
</script>

<style lang="stylus" scoped>
  card-mobile-land-height = 320px

  .business-card
    background-color white

    &-mobile-port
      width 312px
      max-height 600px

    &-mobile-land
      width 600px
      height card-mobile-land-height

    &-desk
      width 800px
      height 400px

  .avatar-container
    position relative

    &-mobile-port
      height card-mobile-land-height

</style>
