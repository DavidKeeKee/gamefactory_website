
import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal,{
  duration:800,
  scale:1,
  distance:'50px'
});

export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
