<template>
  <v-container  fluid >

    <div class="header">
      <carousel/>
    </div>

    <div class="about_website">
    <div class="meet_game_factory">
        <h1 class="heading_info">MEET GAME FACTORY</h1>
        <p class="meet_game_factory_text">Game Factory is a mobile game development  company that provides the absolute best CP value
          for mobile game outsourcing. We have the top management team in Taiwan (with over 20 years of
          experience in game development) responsible for the full outsourcing of Myanamr's top technical talent.
        </p> <br>
        <p class="meet_game_factory_text">What you get is an international quality product that costs only a fraction of the cost. </p><br>
        <p class="meet_game_factory_text">Our engineers are familar with leading engines, including Unreal and Unity, which enable us to provide a powerful gaming experience and provide full production of mobile versions of these engines.</p><br>
        <p class="meet_game_factory_text">Start today with outsourcing developement for PC/mobile games!</p>
    </div>
    </div>

    <div class="our_experience">
      <h1 class="heading_info second">WHAT THE NUMBERS SAY?</h1>
        <v-row class="our_experience_row">
          <v-col>
            <div class="experience_text_align">
              <h2>20+ years Experiences</h2> <br>
              <p class="meet_game_factory_text">in RGD, game design, and development for both PC/Console and mobile gaming.</p>
            </div>
          </v-col>

          <v-col>
            <div class="second_text">
              <h2>60+ Employees</h2> <br>
              <p class="meet_game_factory_text">Around the world including: Taiwan, China, United States, Myanmar, Japan, etc.</p>
            </div>
          </v-col>

          <v-col>
            <div class="last_text">
              <h2>40+ Projects</h2> <br>
              <p class="meet_game_factory_text">of games across different Platforms:PC, IDS, Android. Adept in game engines such as Unity.</p>
            </div>
          </v-col>
        </v-row>
    </div>

    <div class="our_strength">
      <h1 class="heading_info strangth_heading">OUR STRENGTHS</h1>
      <v-row class="our_experience_row">
        <v-col>
          <div class="experience_text_align">
            <v-img src="/icon/Full_Level_Production.png" class="full_level_img"></v-img>
            <h2 style="padding-left:8rem;">Game Design</h2> <br>
            <p class="meet_game_factory_text">We focus on the production of high quality games at low rates and offer a wide array of services. We can assist you with various degrees of your game project, whether it's design, art, programming, or even the whole development process.</p>
          </div>
        </v-col>

        <v-col>
          <div class="second_text">
            <v-img src="/icon/Game_Design.png" class="Game_Design"></v-img>
            <h2 style="padding-left:5.2rem;">Game Development</h2> <br>
            <p class="meet_game_factory_text">We focus on the production of high quality games at low rates and offer a wide array of services. We can assist you with various degrees of your game project, whether it's design, art, programming, or even the whole development process.</p>
          </div>
        </v-col>

        <v-col>
          <div class="last_text">
            <v-img src="/icon/Game_Development.png" class="Game_Development"></v-img>
            <h2 style="padding-left:7rem;">Art Production</h2> <br>
            <p class="meet_game_factory_text">Our teams have completed full level art productions for more than 30 game titles. This includes:</p>
            <p class="meet_game_factory_text">UI and layout analysis planning and design of modular sets concept arts in early production 3D assets and VFX creation engine integration for post production.</p>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="our_team">
      <h1 class="heading_info_header">OUR TEAM</h1>
      <v-row>
        <v-col class="gray_box">
          <v-img src="/team/COO.png" class="team_img"></v-img>
          <h3 class="team_name">Gary Huang</h3>
          <span class="team_position">COO</span>
        </v-col>

        <v-col class="peter_box">
          <v-img src="/team/CEO.jpg" class="team_img"></v-img>
          <h3 class="team_name team_name_peter">Peter</h3>
          <span class="team_position">CEO</span>
        </v-col>

        <v-col class="chu_box">
          <v-img src="/team/CTO.png" class="team_img"></v-img>
          <h3 class="team_name team_name_nic">Nic Chu</h3>
          <span class="team_position">CTO</span>
        </v-col>

        <v-col class="roy_box">
          <v-img src="/team/Art_Director.jpg" class="team_img"></v-img>
          <h3 class="team_name team_name_roy">Roy Huang</h3>
          <span>Artistic Director</span>
        </v-col>
      </v-row>
    </div>

    <div class="portfolio">
          <h1 class="heading_info_portfolio">PORTFOLIO</h1>
          <v-row>
              <v-col cols="5">
                <div class="game_frame">
                  <a href="#" class="games_button">GAMES</a>


                </div>


              </v-col>
              <v-col cols="7">
                <div class="portfolio_frame">
                    <v-btn
                      text
                      color="#333333"

                      @click="showDropdown = !showDropdown"
                    >
                      <span class=" games_button_arts">ARTS</span>
                      <v-icon color="yellow">arrow_drop_down</v-icon>
                    </v-btn>

                    <div class="arrow_list" v-if="showDropdown" >
                      <a class="arrow_list_link" href="">CHARACTERS</a>
                      <a class="arrow_list_link" href="">ENVRONMENT</a>
                      <a class="arrow_list_link" href="">CONCEPT ART</a>
                    </div>
                </div>


              </v-col>
          </v-row>

          <v-row class="portfolio_img_layer">
              <v-col>
                <div class="portfolio_img portfolio_img_left left_img_one">

                </div>

                <div class="portfolio_img portfolio_img_left left_img_two">

                </div>

                <div class="portfolio_img portfolio_img_left left_img_three">

                </div>
              </v-col>

              <v-col>
                <div class="portfolio_img portfolio_img_center center_img_one">

                </div>


                <div class="portfolio_img portfolio_img_center center_img_two">

                </div>


                <div class="portfolio_img portfolio_img_center center_img_three">

                </div>
              </v-col>

              <v-col>
                <div  class="portfolio_img portfolio_img_right right_img_one">

                </div>

                <div class="portfolio_img portfolio_img_right right_img_two">

                </div>

                <div class="portfolio_img portfolio_img_right right_img_three">

                </div>
              </v-col>

          </v-row>

      <div class="text-center">
      <v-btn
        large
        outlined
        color="#ffffff"
      >
        MORE
      </v-btn>
      </div>

    </div>

    <div class="our_client">

    </div>

    <div class="testimonials">

    </div>

    <div class="contact_us">

    </div>

  </v-container>


</template>




<script>
import carousel from '@/components/header_carousel.vue';
export default {
   components:{
     carousel
  },
  data () {
    return {
      showDropdown:false

    }
  }
}
</script>

<style>
h1.heading_info{
  text-align: center;
  margin-bottom: 2rem;
}
  .header{
    margin-top:-32.6rem;
    margin-left:4.2rem;

    background-color:black;
    clear:both;
  }

  .heading_info_header{
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 3.5rem;
  }

  .about_website {
    position: relative;
    width: 110%;
    margin-top: 2rem;
    margin-left: -5rem;
    height: 70vh;
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
  .meet_game_factory{
    padding: 4rem 3rem 0 3rem;
    color: white;
    font-family: 'Libre Baskerville', serif;
  }
  .meet_game_factory_text{
    font-size: 1.5rem;
    margin-top: 2vh;
    font-weight: bold;

  }


  /* our strenghts */
  .our_experience{
    position: relative;
    font-family: 'Libre Baskerville', serif;
    width: 110%;
    margin-left: -5rem;
    height: 70vh;

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
   .our_experience_row{
    margin:3rem;
  }
  .second{
    padding-top: 9rem;
  }
  .experience_text_align {
    padding-right:7rem;
  }
  .last_text{
    padding-left:8rem;
  }
  .second_text{
    padding-left: 3rem;
    padding-right: 4rem;
  }

  .full_level_img{
    width: 4.5vw;
    height: 6.9vh;
    margin-left:11rem;
    margin-bottom:1rem;
  }
  .Game_Design{
    width: 3.4vw;
    height: 7vh;
    margin-left:11rem;
    margin-bottom:1rem;
  }
  .Game_Development{
    width: 2.2vw;
    height: 6.9vh;
    margin-left:11.3rem;
    margin-bottom:1rem;
  }

  /*our_experience */

  .our_strength{
    position: relative;
    font-family: 'Libre Baskerville', serif;
    width: 110%;
    margin-left: -5rem;
    height: 80vh;


  }
  .strangth_heading{
    padding-top: 3.8rem;
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
   .our_experience_row{
    margin:3rem;
  }
  .second{
    padding-top: 9rem;
  }
  .experience_text_align {
    padding-right:7rem;
  }

  /* our_team */
  .our_team{
    background-color:#2a2a2a;
    margin-left: -5rem;
    width: 110%;
    height: 65vh;
    font-family: 'Libre Baskerville', serif;
    padding-top: 2rem;
    padding-left: 3rem;
    margin-top: -4rem;
    clip-path: polygon(51% 9%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);


  }
  .team_img {
    width: 8rem;
    height: 8rem;
    clip-path: circle(50% at 50% 50%);
  }

  .team_name{
    margin-top:1.6rem;
  }
  .team_name_peter{
    padding-left: 1.7rem;
  }
  .team_name_nic{
    padding-left: 1rem;
  }
  .team_name_roy{
    padding-left: .5rem;
  }
  .team_position{
    padding-left:2rem;
  }

  .roy_box{

    margin-right: 20rem;
  }
  .chu_box{


  }
  .peter_box{




  }
  .gray_box{
    margin-left: 20rem;

  }

  /* PORTFOLIO*/

  .portfolio{
    background-color:#333333;
    margin-left: -5rem;
    width: 110%;
    height: 147vh;
    font-family: 'Libre Baskerville', serif;
    padding-top: 2rem;
    padding-left: 3rem;
    margin-top: -5rem;
    clip-path: polygon(51% 4%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);

  }

  .portfolio_frame{
    padding-left:22rem;
  }
  .game_frame{
    padding-left:39rem;
  }

  h1.heading_info_portfolio{
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 3rem;
  }
.games_button{
  font-size: 2rem;

}
.games_button:link {
  color: #ffffff;
}
.games_button:visited{
  color: #ffffff;
}
  .games_button:hover{
    color: yellow;
    text-decoration: none;
  }
  .games_button:link{
    text-decoration: none;
  }


  .games_button_arts {
    font-size: 2rem;
    color: #ffffff;
    text-decoration: none;
  }
  .games_button_arts:link{
    color: #ffffff;
  }
  .games_button_arts:hover{
    color: yellow;

  }
  .games_button_arts:visited{
    color: #ffffff;
  }


  .arrow_list {
    padding-top:3rem;
  }
.arrow_list_link {
  font-size: 1.2rem;
}
  .arrow_list_link:link{
    color: #ffffff;
    text-decoration: none;
    padding-right: 3rem;
  }
  .arrow_list_link:hover{
    color: yellow;
  }

  .arrow_list_link:visited{
    color: #ffffff;
  }

  .portfolio_img_layer{
    margin-top: 2rem;
  }
  .portfolio_img{
    margin-bottom: 2rem;
    width: 23rem;
    height: 18rem;
  }
  .portfolio_img_left{
    margin-left: 22rem;
  }
  .portfolio_img_center{
    margin-left: 1rem;
  }

  .portfolio_img_right{
    margin-right: 20.3rem;
  }
  .left_img_one{
    background-image: url('/3d_characters/cha (95).jpg');
    background-size: cover;
    background-position: left top;
  }
  .left_img_two{
    background-image: url('/3d_characters/cha (69).jpg');
    background-size: cover;
    background-position: left top;
  }
  .left_img_three{
    background-image: url('/3d_characters/cha (23).jpg');
    background-size: cover;
    background-position: left top;
  }

  .center_img_one{
    background-image: url('/3d_characters/cha (59).jpg');
    background-size: cover;
    background-position: left top;
  }

  .center_img_two{
    background-image: url('/3d_characters/cha (33).jpg');
    background-size: cover;
  }
  .center_img_three{
    background-image: url('/3d_characters/cha (24).jpg');
    background-size: cover;
    background-position: left top;
  }


  .right_img_one{
    background-image: url('/3d_characters/cha (25).jpg');
    background-size: cover;
    background-position: right top;
  }
  .right_img_two{
    background-image: url('/3d_characters/cha (105).jpg');
    background-size: cover;
    background-position: left top;
  }
  .right_img_three{
    background-image: url('/3d_characters/cha (26).jpg');
    background-size: cover;
    background-position: right top;
  }

</style>




