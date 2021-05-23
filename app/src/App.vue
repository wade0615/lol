<template>
  <v-app>
    <Navbar />

    <v-main class="pl-3 pr-3 pl-sm-6 pr-sm-6">
      <div>
        <h1>
          {{ name }}
        </h1>
        <p>
          {{ areaName }}
        </p>
        <v-select
          v-model="select_season"
          @change="selected_season"
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
        <v-data-table
          dense
          hide-default-footer
          :headers="headers"
          :items="standings"
          item-key="TeamId"
          class="elevation-1"
          sort-by="Order"
        ></v-data-table>
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
    seasons: [],
    select_season: { Season: '', Name: '' },
    standings: [],
    headers: [
      {
        text: '排名',
        align: 'start',
        sortable: false,
        value: 'Order',
      },
      { text: '戰隊', value: 'Name' },
      { text: '勝場數', value: 'Wins' },
      { text: '敗場數', value: 'Losses' },
      { text: '積分', value: 'Points' },
    ],
  }),

  methods: {
    selected_season(value) {
      this.get_standings(value.Rounds[0].RoundId);
    },
    async get_competitions() {
      await this.$sportsData.get_competitions()
        .then((response) => {
          console.log('get_competitions', response);
          const LCK = Object.values(response.data).filter((e) => e.Name === 'LCK')[0];
          console.log('LCK_competitions', LCK);
          this.areaName = LCK.AreaName;
          this.name = LCK.Name;
          let seasons = Array;
          seasons = LCK.Seasons;
          this.seasons = seasons.reverse();
        });
    },
    async get_seasonTeams() {
      await this.$sportsData.get_seasonTeams()
        .then((data) => {
          console.log('get_seasonTeams', data);
        });
    },
    async get_standings(id) {
      await this.$sportsData.get_standings(id)
        .then((response) => {
          this.standings = Object.values(response.data);
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

<style lang="sass" scoped>
</style>
