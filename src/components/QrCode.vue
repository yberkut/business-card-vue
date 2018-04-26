<template>
  <BaseImage 
    :src="qrCode" 
    alt="qr-code" 
    adjust-size 
    align="right" />
</template>

<script>
  import { mapGetters } from 'vuex'
  import BaseImage from './BaseImage.vue'

  export default {
    components: {
      BaseImage
    },
    computed: mapGetters([
      'qrCode'
    ])
  }
</script>
