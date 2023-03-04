<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/global/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },

  data: () => ({
    //
  })
};
</script>

<style>
body {
  background: #F7F7F7;
}
</style>
