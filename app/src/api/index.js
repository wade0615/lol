import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

const lolapi = {
  get_teams: async () => {
    // axios({
    //   method: 'get',
    //   baseURL: 'https://fly.sportsdata.io/v3/lol/scores/json',
    //   url: '/Teams',
    //   'Content-Type': 'application/json',
    //   'Ocp-Apim-Subscription-Key': 'e1ed7a271abe4b569d408758dec7dafb',
    // }).then((response) => {
    //   console.log(response);
    //   return response;
    // { headers: { 'Ocp-Apim-Subscription-Key': 'e1ed7a271abe4b569d408758dec7dafb',
    // 'Content-Type': 'application/json' } })
    // })
    axios.get('https://cors-anywhere.herokuapp.com/https://sportsdata.io/developers/api-documentation/lol#/base/areas-countries?key=e1ed7a271abe4b569d408758dec7dafb')
      .then((response) => {
        console.log(response);
      });
  },
  async get_test() {
    return 'test success';
  },
};
export default { lolapi };
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
