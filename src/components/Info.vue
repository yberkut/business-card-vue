<template>
  <v-layout wrap>
    <v-flex 
      v-for="record in records" 
      :key="record.title" 
      xs12>
      <v-layout 
        :class="styled.infoRecord" 
        wrap>
        <v-flex 
          :class="styled.title" 
          xs4>
          {{ record.title }}
        </v-flex>
        <v-flex 
          :class="styled.value" 
          xs8>
          {{ record.value }}
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import { getBreakpoint } from '../shared/UI/Breakpoint'

  export default {
    computed: {
      styled() {
        const breakpoint = getBreakpoint(this)
        return { ...classes(breakpoint), breakpoint }
      },
      records() {
        return this.styled.breakpoint.xs ? this.shortInfo : this.fullInfo
      },
      imageUrl() {
        if (!this.user) {
          return ''
        }
        return this.styled.breakpoint.xsOnly
          ? this.user.avatarSmall
          : this.user.avatarBig
      },
      ...mapGetters([
        'fullInfo',
        'shortInfo'
      ]),
      ...mapState([
        'user'
      ])
    }
  }

  const classes = bp => ({
    infoRecord: {
      'ml-1': true,
      'my-1': bp.mdAndUp
    },
    title: {
      'body-2': bp.smAndDown,
      'title': bp.mdAndUp
    },
    value: {
      'body-1': bp.smAndDown,
      'subheading': bp.mdAndUp
    }
  })
</script>
