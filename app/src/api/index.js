import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const lolapi = {
  get_teams: async () => (
    Vue.axios({
      method: 'get',
      baseURL: 'https://fly.sportsdata.io/v3/lol/scores/json',
      url: '/Teams',
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'e1ed7a271abe4b569d408758dec7dafb',
    }).then((response) => response)
  ),
  async get_test() {
    return 'test success';
  },
};
export default { lolapi };
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
