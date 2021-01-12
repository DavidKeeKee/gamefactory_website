<template>
  <div class="our_experience">
    <h1 class="heading_info">WHAT THE NUMBERS SAY?</h1>
      <v-row class="our_experience_row">
       <v-flex xs12 xl4 lg4 md4>
         <v-col>
          <div class="experience_text_align">
            <h2>20+ years Experiences</h2> <br>
            <p class="meet_game_factory_text">in RGD, game design, and development for both PC/Console and mobile gaming.</p>
          </div>
        </v-col>
       </v-flex>

      <v-flex xs12 xl4 lg4 md4>
        <v-col>
          <div class="second_text_experience">
            <h2>60+ Employees</h2> <br>
            <p class="meet_game_factory_text employees_text">Around the world including: Taiwan, China, United States, Myanmar, Japan, etc.</p>
          </div>
        </v-col>
      </v-flex>

      <v-flex xs12 xl4 lg4 md4>
        <v-col>
          <div class="last_text">
            <h2>40+ Projects</h2> <br>
            <p class="meet_game_factory_text project_text">of games across different Platforms:PC, IDS, Android. Adept in game engines such as Unity.</p>
          </div>
        </v-col>
      </v-flex>
    </v-row>
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
  .our_experience{
    position: relative;
    font-family: 'Libre Baskerville', serif;
    width: 100%;
    padding-bottom: 2rem;

  }

  .our_experience::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/background/GF-Slider-02.png");
    background-size: cover;
    background-position: top;
    opacity: 0.2;
  }

  h1.heading_info{
    text-align: center;
    margin-bottom: 2rem;
    padding-top:3.4rem;
  }

   .our_experience_row{
     padding:3rem;
  }
   .experience_text_align {
    padding-right:5rem;
  }

   .meet_game_factory_text{
    font-size: 1.5rem;
    margin-top: 2vh;
    font-weight: bold;

  }
  .second_text_experience {
    padding-right: 6rem ;

  }
  .last_text{
    padding-right:2.6rem;
  }

   @media screen and (max-width: 1000px) {
   .meet_game_factory_text{
      font-size: 1.3rem;
      margin-top: -0.3vh !important;
    }


    h1.heading_info{
      text-align: center;
      padding-top:2rem;
    }

    .experience_text_align {
      padding-right:0rem;
    }

    .second_text_experience {
      padding-right: 0rem ;

    }

    .last_text{
      padding-right:0rem;
    }
    .our_experience_row{
       padding-left:3rem;
    }
    .meet_game_factory_text{
      font-size: 1.3rem;
      margin-top: 1vh;
      font-weight: bold;

    }

  }

  @media screen and (max-width: 800px) {
    .meet_game_factory_text{
      margin-top: -0.3vh !important;
      font-size: 1.2rem !important;
    }
     .our_experience_row{
       padding:3rem;
    }
    h2 {
      font-size: 1.5rem
    }


    h1.heading_info{
      text-align: center;
      padding-top:2rem;
    }

    .experience_text_align {
      padding-right:0rem;
    }

    .second_text_experience {
      padding-right: 0rem ;

    }

    .last_text{
      padding-right:0rem;
    }
    .our_experience_row{
       padding-left:3rem;
    }
    .meet_game_factory_text{
      font-size: 1.3rem;
      margin-top: 1vh;
      font-weight: bold;

    }
  }

   @media screen and (max-width: 600px) {
     .meet_game_factory_text{
      font-size: 1.1rem !important;
      margin-top: -2vh !important;
    }

    h2 {
      font-size: 1.2rem
    }

    .our_experience_row{
       padding:0rem 1rem 0rem 1.2rem;

    }

  }
</style>
