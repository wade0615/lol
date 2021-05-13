<template>
  <v-app>
    <Navbar />

    <v-main>
      <div>
        <h1>
          {{ name }}
        </h1>
        <p>
          {{ areaName }}
        </p>
        <div v-for="season in seasons" :key="season.SeasonId">
          {{ season.Season }}. {{ season.Name }}
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    areaName: String,
    name: String,
    seasons: Array,
  }),

  methods: {
    async get_competitions() {
      await this.$sportsData.get_competitions()
        .then((response) => {
          console.log('get_competitions', response);
          const LCK = Object.values(response.data).filter((e) => e.Name === 'LCK')[0];
          console.log('LCK_competitions', LCK);
          this.areaName = LCK.AreaName;
          this.name = LCK.Name;
          this.seasons = LCK.Seasons;
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
