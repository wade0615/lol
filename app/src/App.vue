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
        <v-select
          v-model="select_season"
          :hint="`${select_season.Season}, ${select_season.Name}`"
          :items="seasons"
          item-text="Name"
          item-value="SeasonId"
          label="Select Season"
          persistent-hint
          return-object
          single-line
          solo
        ></v-select>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    areaName: String,
    name: String,
    seasons: Array,
    select_season: { Season: '', Name: '' },
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
          this.seasons = LCK.Seasons.reverse();
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
