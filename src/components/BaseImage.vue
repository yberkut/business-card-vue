<template>
  <div
    :style="styled.image"
    :alt="alt"
    class="image"
  />
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: 'Image'
      },
      adjustSize: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: 'center'
      }
    },
    computed: {
      styled() {
        return {
          image: {
            'background-image': `url('${this.src}')`,
            'background-size': `${this.adjustSize ? 'contain' : 'cover'}`,
            'background-position-x': `${this.align}`
          }
        }
      }
    }
  }
</script>

<style scoped>
  .image {
    width: 100%;
    height: 100%;
    background-position-x: center;
    background-repeat: no-repeat;
  }
</style>
