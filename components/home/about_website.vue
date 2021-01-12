<template>
  <div class="about_website">
  <div class="meet_game_factory">
      <div v-scroll-reveal.reset><h1 class="heading_info">MEET GAME FACTORY</h1></div>
      <p class="meet_game_factory_text">Game Factory is a mobile game development  company that provides the absolute best CP value
        for mobile game outsourcing. We have the top management team in Taiwan (with over 20 years of
        experience in game development) responsible for the full outsourcing of Myanamr's top technical talent.
      </p> <br>
      <p class="meet_game_factory_text">What you get is an international quality product that costs only a fraction of the cost. </p><br>
      <p class="meet_game_factory_text">Our engineers are familar with leading engines, including Unreal and Unity, which enable us to provide a powerful gaming experience and provide full production of mobile versions of these engines.</p><br>
      <p class="meet_game_factory_text">Start today with outsourcing developement for PC/mobile games!</p>
  </div>
  </div>
</template>
<script>
  export default {

    data(){
      return{

      }
    },
   methods:{

  }
  }
</script>
<style scoped>
  .about_website {
    position: relative;
    width: 100%;
    margin-top: 2rem;
    padding-bottom: 2rem;
    clip-path: polygon(50% 7%, 53% 0, 100% 0, 100% 100%, 0 100%, 0 0, 47% 0);
  }

  .about_website::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("/background/GF-Slider-01.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  opacity: 0.2;
  }

  h1.heading_info{
    text-align: center;
    margin-bottom: 2rem;
  }
  .meet_game_factory_text{
    font-size: 1.5rem;
    margin-top: 2vh;
    font-weight: bold;
  }
  .meet_game_factory{
    padding: 4rem 3rem 0 3rem;
    color: white;
    font-family: 'Libre Baskerville', serif;
  }
  @media screen and (max-width: 1000px) {
     .meet_game_factory_text{
      font-size: 1.3rem;
    }

     h1.heading_info{
      text-align: center;
      margin-bottom: 2rem;
    }

    .meet_game_factory{
      padding: 4rem 2rem 0 3rem;
      color: white;
      font-family: 'Libre Baskerville', serif;
    }
  }

  @media screen and (max-width: 800px) {
    .meet_game_factory_text{
      font-size: 1.2rem;
      margin-top: 0;
    }
    h1.heading_info{
      font-size: 1.7rem;
      margin-bottom: 2rem;
    }
    .meet_game_factory{
      padding: 4rem 1rem 0 1.6rem;
    }
    .about_website {
      clip-path: polygon(50% 6%, 53% 0, 100% 0, 100% 100%, 0 100%, 0 0, 47% 0);
    }
  }

   @media screen and (max-width: 600px) {
     .meet_game_factory_text{
      font-size: 1.1rem;
      margin-top: 0;
    }

     h1.heading_info{
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .meet_game_factory{
      padding: 4rem 1rem 0 1.2rem;

    }

    .about_website {
      clip-path: polygon(50% 5%, 53% 0, 100% 0, 100% 100%, 0 100%, 0 0, 47% 0);
    }
  }
</style>
