<template>
  <v-app>
    <Header />
    <v-main>
      <router-view/>
    </v-main>
    <CookiesPopUp />
  </v-app>
</template>

<script>
import Header from './components/global/Header.vue';
import CookiesPopUp from './components/global/CookiesPopUp.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Welcome to Stellar Routes',
    titleTemplate: '%s | Stellar Routes',
    meta: [
      {
        name: 'description',
        content: 'Stellar Routes is a leading tech company specializing in creating customized websites, mobile apps, and cutting-edge technology solutions. Our team of experts works tirelessly to deliver exceptional products tailored to your unique needs, ensuring your success in the digital world.'
      }
    ]
  },
  components: {
    Header,
    CookiesPopUp,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background: #F7F7F7;
}
</style>
