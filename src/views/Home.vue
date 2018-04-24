<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <BusinessCard />
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  // @ is an alias to /src
  import BusinessCard from '@/components/BusinessCard.vue'

  export default {
    components: {
      BusinessCard
    }
  }
</script>
