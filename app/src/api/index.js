import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const baseURL = 'http://localhost:3000';

const lolapi = {
  async get_competitions() {
    return axios.get(`${baseURL}/competitions`)
      .then((response) => response);
  },
  async get_seasonTeams() {
    return axios.get(`${baseURL}/seasonTeams`)
      .then((response) => response);
  },
  async get_standings() {
    return axios.get(`${baseURL}/standings`)
      .then((response) => response);
  },
  // async get_gamesByDate() {
  //   return axios.get(`${baseURL}/gamesByDate`)
  //     .then((response) => response);
  // },
};
export default { lolapi };
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
