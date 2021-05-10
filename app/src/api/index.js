import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const baseURL = 'http://192.168.50.200:3000';

const lolapi = {
  async get_areas() {
    return axios.get(`${baseURL}/areas`)
      .then((response) => response);
  },
  async get_teams() {
    return axios.get(`${baseURL}/teams`)
      .then((response) => response);
  },
  async get_gamesByDate() {
    return axios.get(`${baseURL}/gamesByDate`)
      .then((response) => response);
  },
};
export default { lolapi };
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
