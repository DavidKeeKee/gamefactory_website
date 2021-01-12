<template>
        <div class="our_strength">
          <h1 class="heading_info strangth_heading">OUR STRENGTHS</h1>
            <v-row class="our_strength_row">
                <v-col>
                  <div class="strength_text_align">
                      <v-img src="/icon/Full_Level_Production.png" class="full_level_img"></v-img>
                      <h2 style="text-align:center;">Game Design</h2> <br>
                      <p class="meet_game_factory_text">We focus on the production of high quality games at low rates and offer a wide array of services. We can assist you with various degrees of your game project, whether it's design, art, programming, or even the whole development process.</p>
                  </div>
                </v-col>

              <v-col>
                <div class="second_text">
                  <v-img src="/icon/Game_Design.png" class="Game_Design"></v-img>
                  <h2 style="text-align:center;">Game Development</h2> <br>
                  <p class="meet_game_factory_text">We focus on the production of high quality games at low rates and offer a wide array of services. We can assist you with various degrees of your game project, whether it's design, art, programming, or even the whole development process.</p>
                </div>
              </v-col>

              <v-col>
                <div class="">
                  <v-img src="/icon/Game_Development.png" class="Game_Development"></v-img>
                  <h2 style="text-align:center;">Art Production</h2> <br>
                  <p class="meet_game_factory_text">Our teams have completed full level art productions for more than 30 game titles. This includes:</p>
                  <p class="meet_game_factory_text">UI and layout analysis planning and design of modular sets concept arts in early production 3D assets and VFX creation engine integration for post production.</p>
                </div>
                <v-card-actions>

                  <v-spacer></v-spacer>

                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            <v-expand-transition>
              <div v-show="show">


                <v-card-text>
                  <v-row style="line-height: 1.5;">
                    <v-col>
                      <div class="strength_text_align">
                        <v-img src="/icon/3D_Animation.png" class="full_level_img_animation"></v-img>
                        <h2 style="text-align:center;">3D Animation</h2> <br>
                        <p class="meet_game_factory_text">Our animation team is experienced in comprehensive animation techniques and cross platform
                        production, and is capable to satisfy the most needs on the market. We believe that only with
                        passionate should a product reach its full potential -- to achieve this mission our team members are all
                        gamers and artists themselves.</p>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="second_text">
                        <v-img src="/icon/3D_Assets.png" class="full_level_img_assets"></v-img>
                        <h2 style="text-align:center;">3D Assets</h2> <br>
                        <p class="meet_game_factory_text">Our teams are committed to create various kinds of 3D assets through the most advanced techniques
                        and tools up to date. Our past experience allows us to handle a wide array of stylized assets on most
                        of the popular game platforms. Our work on vehicles, weapons, and interior assets have been
                        especially praised in the past.</p>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="characters">
                        <v-img src="/icon/3D_Characters.png" class="Game_Development"></v-img>
                        <h2 style="text-align:center;">3D Characters</h2> <br>
                        <p class="meet_game_factory_text">Game Factory's character production team, who are good at creating high-end realistic characters on
                        next generation platform, have been working with many AAA developers in high-end character
                        production projects; meanwhile, we have the extensive project experience in creating the stylized
                        hand-painting characters.</p>

                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-row>
        </div>
</template>

<script>
  export default {

    data(){
      return{
        show: false,
      }
    },
   methods:{

  }
  }
</script>

<style scoped>
  .our_strength{
    position: relative;
    font-family: 'Libre Baskerville', serif;
    width: 100%;
    padding-bottom: 1rem;
  }

  .our_strength::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/background/GF-Slider-03.png");
    background-size: cover;
    background-position: top;
    opacity: 0.2;

  }

  h1.heading_info{
    text-align: center;
    margin-bottom: 2rem;
  }

   .strangth_heading{
    padding-top: 3.8rem;
  }

  .our_strength_row{
     padding-top:1.7rem;
     padding-bottom: 4.6rem;
     padding-right: 3rem;
     padding-left: 3rem;
  }

  .meet_game_factory_text{
    font-size: 1.5rem;
    margin-top: 2vh;
    font-weight: bold;

  }
   .second_text{
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .full_level_img_assets{
    width: 3.3vw;
    height: 7.2vh;
    margin: 0 auto;
    margin-bottom:1rem;
  }
   .full_level_img_animation{
    width: 3.3vw;
    height: 7vh;
    margin: 0 auto;
    margin-bottom:1rem;
  }

   .full_level_img{
    width: 5vw;
    height: auto;
    margin: 0 auto;
    margin-bottom:1rem;
  }
   .Game_Design{
    width: 3.4vw;
    height: auto;
    margin: 0 auto;
    margin-bottom:1rem;
  }

   .Game_Development{
    width: 2.2vw;
    height: auto;
    margin: 0 auto;
    margin-bottom:1rem;
  }
</style>
