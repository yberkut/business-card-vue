<template>
  <div :class="styled.greetings">
    <svg
      viewBox="0 0 68 30"
      preserveAspectRatio="xMidYMid">
      <path
        :d="pathData"
        :stroke="borderColor"
        :fill="backgroundColor"
        stroke-width="1"
      />
      <text
        :fill="textColor"
        x="14"
        y="17"
        font-family="AvenirNext-DemiBold, Avenir Next"
        font-size="12"
        font-weight="500"
      >
        {{ text }}
      </text>
    </svg>
  </div>
</template>

<script>
  import { getBreakpoint } from '../shared/UI/Breakpoint';

  const rightSidePathData =
    `M3,0 L64.7419355,-7.99360578e-15 C66.3987897,-8.29796497e-15 67.7419355,1.34314575 67.7419355,3
    L67.7419355,20.4812123 C67.7419355,22.1380665 66.3987897,23.4812123 64.7419355,23.4812123
    L61.797526,23.4812123 L61.797526,28.1464844 L58.0533854,23.4812123 L3,23.4812123
    C1.34314575,23.4812123 1.44645068e-13,22.1380665 1.38555833e-13,20.4812123
    L0,3 C-9.76819035e-15,1.34314575 1.34314575,-8.18562686e-15 3,-1.73194792e-14 Z`;
  const leftSidePathData =
    `M3,0 L64.7419355,-4.4408921e-16 C66.3987897,6.60946255e-15 67.7419355,1.34314575 67.7419355,3
    L67.7419355,20.4812123 C67.7419355,22.1380665 66.3987897,23.4812123 64.7419355,23.4812123
    L11.6323951,23.4812123 L5.76864919,30 L5.76864919,23.4812123 L3,23.4812123
    C1.34314575,23.4812123 1.04354706e-13,22.1380665 6.88338275e-14,20.4812123
    L0,3 C-9.76819035e-15,1.34314575 1.34314575,-8.62971607e-15 3,-1.77635684e-14 Z`;

  export default {
    props: {
      rightSide: {
        type: Boolean,
        default: false
      },
      borderColor: {
        type: String,
        default: 'none'
      },
      backgroundColor: {
        type: String,
        default: '#4a93b4'
      },
      textColor: {
        type: String,
        default: '#fff'
      },
      text: {
        type: String,
        default: 'HELLO'
      }
    },
    computed: {
      pathData() {
        return this.rightSide ? rightSidePathData : leftSidePathData;
      },
      styled() {
        return classes(getBreakpoint(this));
      }
    }
  };

  const classes = bp => ({
    greetings: {
      'greetings': true,
      'greetings-mobile-port': bp.xsOnly,
      'greetings-desk': bp.mdAndUp
    }
  });
</script>

<style lang="stylus" scoped>
  .greetings
    width 90px

    &-mobile-port
      position absolute
      top 16px
      left 16px

    &-desk
      max-width 100px
</style>
