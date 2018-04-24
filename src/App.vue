<template>
  <v-app class="bcv-app">
    <!--<div id="nav">-->
    <!--<router-link to="/">Home</router-link>-->
    <!--|-->
    <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
  </v-app>
</template>

<style lang="stylus">
  .bcv-app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale

  #nav
    padding 30px
    a
      font-weight bold
      color #2c3e50
      &.router-link-exact-active
        color #42b983
</style>
