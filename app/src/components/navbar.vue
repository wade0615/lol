<template>
  <nav id="navbar">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="LoL Logo"
          class="shrink mr-2"
          contain
          :src="lol_logo"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="League of Legends 2019"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="lol_fullName"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://wade0615.github.io/"
        target="_blank"
        text
      >
        <span class="mr-2">To my blog.</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import lolLogo from '@/assets/LoL_icon.svg';
import lolFullName from '@/assets/League_of_Legends_2019_vector.svg';

export default {
  props: [''],
  watch: {
  },
  data() {
    return {
      lol_logo: lolLogo,
      lol_fullName: lolFullName,
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  beforeMount() {
  },
  updated() {},
};
</script>

<style rel="stylesheet/sass" lang="sass" scoped>
#navbar
  position: sticky
  top: 0
</style>

// 使用方式
// <Navbar />
