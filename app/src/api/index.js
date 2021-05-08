import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const lolapi = {
  get_teams: async () => axios.get('http://192.168.50.200:3000/air')
    .then((response) => response),
  async get_test() {
    return 'test success';
  },
};
export default { lolapi };
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
