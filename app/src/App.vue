<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),

  methods: {
    async get_competitions() {
      await this.$sportsData.get_competitions()
        .then((data) => {
          console.log('get_competitions', data);
        });
    },
    async get_seasonTeams() {
      await this.$sportsData.get_seasonTeams()
        .then((data) => {
          console.log('get_seasonTeams', data);
        });
    },
    // async get_gamesByDate() {
    //   await this.$sportsData.get_gamesByDate()
    //     .then((data) => {
    //       console.log('get_gamesByDate', data);
    //     });
    // },
  },

  mounted() {
    this.get_competitions();
    this.get_seasonTeams();
    // this.get_gamesByDate();
  },
};
</script>
