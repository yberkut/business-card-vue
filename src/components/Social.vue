<template>
  <div :class="styled.social">
    <v-btn 
      v-for="btn in social" 
      :key="btn.name" 
      :fab="styled.breakpoint.smAndDown" 
      flat 
      icon 
      color="white">
      <v-icon>{{ btn.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getBreakpoint } from '../shared/UI/Breakpoint'

  export default {
    computed: {
      styled() {
        const breakpoint = getBreakpoint(this)
        return { ...classes(breakpoint), breakpoint }
      },
      ...mapGetters([
        'social'
      ])
    }
  }

  const classes = bp => ({
    social: {
      'social': true,
      'social-mobile': bp.smAndDown
    }
  })
</script>

<style lang="stylus" scoped>
  .social
    background-color #39484f
    &-mobile
      display flex
      justify-content space-evenly
</style>
