<template>
  <div :class="styled.titleContainer">
    <h1 :class="styled.titleText">
      I'm <span class="ib-title-bold">{{fullName}}</span>
    </h1>
    <span :class="styled.subtitle">
      {{description}}
    </span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getBreakpoint } from '../shared/UI/Breakpoint'

  export default {
    computed: {
      styled() {
        return classes(getBreakpoint(this))
      },
      ...mapGetters([
        'fullName',
        'description'
      ])
    }
  }

  const classes = bp => ({
    titleContainer: {
      'ib-title': true,
      'ib-title-mobile-port': bp.xsOnly
    },
    titleText: {
      'display-1': bp.smAndDown,
      'display-3': bp.mdAndUp
    },
    subtitle: {
      'caption': bp.smAndDown,
      'subheading': bp.mdAndUp
    }
  })
</script>

<style lang="stylus" scoped>
  .ib-title
    color rgba(0, 0, 0, 0.7)

    &-mobile-port
      text-align center

    &-bold
      font-weight 500
</style>
