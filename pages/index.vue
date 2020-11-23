<template>
  <v-container fluid  wrapper>

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
      <h1 class="heading_info" style="padding-top:3.4rem;">WHAT THE NUMBERS SAY?</h1>
        <v-row class="our_experience_row">
          <v-col>
            <div class="experience_text_align">
              <h2>20+ years Experiences</h2> <br>
              <p class="meet_game_factory_text">in RGD, game design, and development for both PC/Console and mobile gaming.</p>
            </div>
          </v-col>

          <v-col>
            <div class="second_text_experience">
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
        </v-col>
      </v-row>
    </div>



    <div class="our_team">
      <h1 class="heading_info_header">OUR TEAM</h1>
      <v-row>
        <v-col class="gray_box">
          <div>
            <v-img src="/team/COO.png" class="team_img"></v-img>
            <h3 class="team_name">Gary Huang</h3>
            <div class="team_position text-center">COO</div>
          </div>
        </v-col>

        <v-col class="peter_box">
          <div>
            <v-img src="/team/CEO.jpg" class="team_img"></v-img>
            <h3 class="team_name">Peter</h3>
            <div class="team_position">CEO</div>
          </div>
        </v-col>

        <v-col class="chu_box">
         <div>
           <v-img src="/team/CTO.png" class="team_img"></v-img>
          <h3 class="team_name team_name_nic">Nic Chu</h3>
          <div class="team_position">CTO</div>
         </div>
        </v-col>

        <v-col class="roy_box">
          <div>
            <v-img src="/team/Art_Director.jpg" class="team_img"></v-img>
            <h3 class="team_name team_name_roy">Roy Huang</h3>
            <div class="team_position">Artistic Director</div>
          </div>
        </v-col>
      </v-row>
    </div>



    <div class="portfolio"><br><br><br><br><br>
       <h1 class="heading_info_portfolio">PORTFOLIO</h1>
                  <v-row>
                      <v-col cols="5">
                        <div class="game_frame">
                          <div style="text-align:right;"><a href="#" class="games_button">GAMES</a></div>
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
                              <v-btn color="#333333" text><span class="arrow_list_link twoD_link" href="">2D</span></v-btn>
                              <v-btn color="#333333" text><span class="arrow_list_link threeD_link" href="">3D</span></v-btn>
                            </div>
                        </div>


                      </v-col>
                  </v-row>

                    <div class="portfolio_img_layer">
                        <v-row class="text-center align-center justify-center">
                          <div class="portfolio_img portfolio_img_left left_img_one">

                          </div>

                          <div class="portfolio_img portfolio_img_left left_img_two">

                          </div>

                          <div class="portfolio_img portfolio_img_left left_img_three">

                          </div>
                        </v-row>

                        <v-row class="text-center align-center justify-center">
                          <div class="portfolio_img portfolio_img_center center_img_one">

                          </div>


                          <div class="portfolio_img portfolio_img_center center_img_two">

                          </div>


                          <div class="portfolio_img portfolio_img_center center_img_three">

                          </div>
                        </v-row>

                        <v-row class="text-center align-center justify-center">
                          <div  class="portfolio_img portfolio_img_right right_img_one">

                          </div>

                          <div class="portfolio_img portfolio_img_right right_img_two">

                          </div>

                          <div class="portfolio_img portfolio_img_right right_img_three">

                          </div>
                        </v-row>

                    </div>

                      <div class="text-center" style="margin-bottom:5rem;">
                        <v-btn
                          large
                          outlined
                          color="#ffffff"
                        >
                          MORE
                        </v-btn>
                      </div>

    </div>

    <div class="our_client" style="background-color:#494949;">
      <h1 class="heading_info_header_client">OUR CLIENT</h1>
      <v-carousel v-model="model">
        <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"

        >
          <v-sheet
          class="img_sheet"
            color="#494949"
            height="30%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                <v-row>
                  <v-col>
                    <div class="smart_game client_img">

                    </div>
                  </v-col>

                  <v-col >
                    <div class="client_img_frame client_img yahoo">
                    </div>
                  </v-col>

                  <v-col>
                   <div class="client_img_frame client_img soft_world">

                   </div>
                  </v-col>

                  <v-col>
                    <div class="client_img_frame">
                      <v-img src="/clients_page/chinese_gamer.jpg" class="client_img"></v-img>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

          <div class="testimonials">
            <h1 class="heading_info_portfolio testimonial_heading">TESTIMONIALS</h1>

              <v-row>
                <v-col cols="6">
                  <div class="testimonial_about">
                    Taiwan is a small island, and the mobile game industry is a very close relationship industry. We know and have a strong relationship. And this is the best choice for you to cooperate with us. We are able to provide high quality products, complete on time, and have high integrity and trust. Our success is built on this belief, and we are very proud of our close contacts with industry friends.
                  </div>
                </v-col>

                <v-col cols="6">

                        <v-carousel hide-delimiters class="feedback_user">
                          <v-carousel-item
                            v-for="(feedback,i) in feedbacks"
                            :key="i"
                          >
                            <p style="color:black;"> {{ feedback.content }}</p>   <br>
                            <v-img :src="feedback.src" class=" testimonial_user"></v-img><span style="color:black;"> {{feedback.name }} </span>
                          </v-carousel-item>
                        </v-carousel>
                </v-col>
              </v-row>

          </div>

          <div class="contact_us">
            <h1 class="heading_info_portfolio contact_us_heading">LET US REALIZE YOUR DREAM GAME TOGETHER!</h1>
              <v-row>
                        <div class="combobox">
                          <v-combobox
                            v-model="select"
                            :items="items"
                            outlined
                          ></v-combobox>
                        </div>
              </v-row>

                <v-row class="text-center align-center justify-center">

                        <div style="width:23%;">
                          <v-text-field
                            label="NAME*"
                            outlined
                          ></v-text-field>
                        </div>

                        <div style="width:35%; margin-left:2rem;">
                          <v-text-field
                            label="EMAIL ADDRESS*"
                            outlined
                          ></v-text-field>
                        </div>

                </v-row>

                <v-row class="text-center align-center justify-center">

                        <div style="width:27%;">
                          <v-text-field
                            label="CONTACT NUMBER"
                            dark
                            outlined
                            color="dark"
                          ></v-text-field>
                        </div>

                        <div style="width:31%; margin-left:2rem;">
                          <v-text-field
                            label="COMPANY NAME"
                            outlined
                          ></v-text-field>
                        </div>

                </v-row>

            <v-row class="text-center align-center justify-center">

                <div class="combobox">
                  <v-textarea
                    solo
                    name="input-7-4"
                    value="TELL US ABOUT YOUR PROJECT: Ex. What Platform do you prefer? What is your budget? Is there a game reference? When do you need it to be completed by? "
                  ></v-textarea>
                </div>
            </v-row>
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
      showDropdown:false,
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2'
      ],
       select: ['SERVICES'],
      items: [
        'SERVICES',
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      feedbacks: [
        {
          content: 'Really wonderful work with the graphics and action on "Endless Dungeon." An international quality game for a local budget. Consider us satisfied.',
          src: '/clients_page/chinese_gamer.jpg',
          name: 'Depred.co'
        },
        {
          content: 'Really wonderful work with the graphics and action on "Endless Dungeon." An international quality game for a local budget. Consider us satisfied.',
          src: '/clients_page/chinese_gamer.jpg',
          name: 'Depred.co'
        },
        {
          content: 'Really wonderful work with the graphics and action on "Endless Dungeon." An international quality game for a local budget. Consider us satisfied.',
          src: '/clients_page/chinese_gamer.jpg',
          name: 'Depred.co'
        },
      ],

    }
  }
}
</script>

<style>

.v-text-field--outlined >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}

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
    font-family: 'Libre Baskerville', serif;
  }

  .about_website {
    position: relative;
    width: 110%;
    margin-top: 2rem;
    margin-left: -5rem;
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
    height: 31.5rem;

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

  .experience_text_align {
    padding-right:5rem;
  }

  .last_text{
    padding-right:2.6rem;
  }
  .second_text{
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .second_text_experience {
    padding-right: 6rem ;

  }

  .full_level_img{
    width: 5vw;
    height: 7.8vh;
    margin: 0 auto;
    margin-bottom:1rem;
  }
  .Game_Design{
    width: 3.4vw;
    height: 7vh;
    margin: 0 auto;
    margin-bottom:1rem;
  }
  .Game_Development{
    width: 2.2vw;
    height: 6.9vh;
    margin: 0 auto;
    margin-bottom:1rem;
  }

  /*our_experience */

  .our_strength{
    position: relative;
    font-family: 'Libre Baskerville', serif;
    width: 110%;
    margin-left: -5rem;
    padding-bottom: 1rem;


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
     padding:3rem;
  }
  .second{
    padding-top: 9rem;
  }


  /* our_team */
  .our_team{
    background-color:#2a2a2a;
    margin-left: -5rem;
    width: 110%;
    height: 70vh;
    font-family: 'Libre Baskerville', serif;
    padding-top: 2rem;

    padding-left: 3rem;
    margin-top: -4rem;
    margin-bottom: 1rem;
    clip-path: polygon(51% 9%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);


  }
  .our_strength_row{
     padding-top:1.7rem;
     padding-bottom: 4.6rem;
     padding-right: 3rem;
     padding-left: 3rem;
  }
  .team_img {
    margin: 0 auto;
    width: 11rem;
    height: 11rem;
    clip-path: circle(50% at 50% 50%);
  }

  .team_name{
    margin-top:1.6rem;
    text-align: center;
  }

  .team_position{
    text-align: center;
  }

  .roy_box{
     margin-right: 12rem;
  }
  .chu_box{


  }
  .peter_box{


  }
  .gray_box{
    padding-left: 10rem;
  }

  /* PORTFOLIO*/

  .portfolio{
    background-color:#333333;
    margin-left: -5rem;
    width: 110%;
    padding-bottom: 3rem;
    font-family: 'Libre Baskerville', serif;
    /* padding-top: 2rem; */
    /* padding-left: 3rem; */
    margin-top: -5.7rem;
    clip-path: polygon(51% 5%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);

  }

  .portfolio_frame{
    padding-left:5rem;
  }
  .game_frame{

    padding-left:14rem;
  }

  h1.heading_info_portfolio{
    text-align: center;
    margin-bottom: 2rem;
    /* margin-top: 3rem; */
  }
.games_button{
  font-size: 1.7rem;
  margin-right: -4rem;
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
    margin-left: -10px;
    padding-left: 13rem;
    font-size: 1.7rem;
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
  font-size: 1.5rem;
  color: #ffffff;

}
.twoD_link{
  padding-left: 12rem;
}
.threeD_link{
    padding-left: 2rem;
  }
  .arrow_list_link:link{
    color: #ffffff;
    text-decoration: none;
    padding-left: 10rem;
  }
  .arrow_list_link:hover{
    color: yellow;
  }

  .arrow_list_link:visited{
    color: #ffffff;
  }

  .portfolio_img_layer{

    padding-top: 1.4rem;
  }
  .portfolio_img{
    margin-left: 3rem;
    margin-bottom: 2rem;
    width: 20rem;
    height: 18rem;

  }
  .portfolio_img_left{
    /* margin-left: 22rem; */

  }
  .portfolio_img_center{
    /* margin-left: 1rem; */
  }

  .portfolio_img_right{
    /* margin-right: 20.3rem; */
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

  /*our_client */
.our_client{
  padding-bottom: 8rem;
  margin-left: -5rem;
  margin-top: -4.4rem;
  width: 110%;
  clip-path: polygon(51% 9%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);
}
.img_sheet{
  padding-top: 9.5rem;
}
.heading_info_header_client{
  text-align: center;
  padding-top: 6.6rem;
  font-size: 2.4rem ;
  font-family: 'Libre Baskerville', serif;
}

.client_img {
    margin: 0 auto;
    width: 7.8rem;
    height: 7.8rem;
    clip-path: circle(50% at 50% 50%);
  }

  .client_img_frame{
    margin-left: 4rem;
  }

.smart_game{
  background-image: url('/clients_page/smart_games.jpg');
  background-size: cover;
  width: 7.8rem;
  height: 7.8rem;
}

.yahoo {
  background-image: url('/clients_page/yahoo.jpg');
  background-size: cover;
  background-position: right top;
  width: 7.8rem;
  height: 7.8rem;
}

.soft_world{
  background-image: url('/clients_page/soft_world.jpg');
  background-size: cover;
  background-position: right top;
  width: 7.8rem;
  height: 7.8rem;
}



/*testimonials */

.testimonials {
  margin-top: -5rem;
  background-color: #575757;
   margin-left: -5rem;
   width: 110%;
   padding-bottom: 10rem;
  font-family: 'Libre Baskerville', serif;
  clip-path: polygon(51% 9%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);
}

.testimonial_heading{
  padding-top: 6rem;
}

.testimonial_user {
  width: 3rem;
  height: 3rem;
  clip-path: circle(50% at 50% 50%);
}

.testimonial_about{
  padding: 0 7rem 0 7rem;
}
.feedback_user{
  background-color: white;
  color: black;
  width: 80%;
  padding: 6rem 5rem 3rem 5rem;
  margin-right: 6rem;
}

/*contact_us*/
.contact_us{
  font-family: 'Libre Baskerville', serif;
  background-color:#6a6a6a ;
  margin-top: -4rem;
  margin-left: -5rem;
  width: 110%;
  clip-path: polygon(51% 9%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);
}

.contact_us_heading{
  padding-top: 5rem;
}

.combobox{
  width:60%;
  margin:0 auto;
}

.name_email{
  border: 1px solid red;
  width: 80%;
  margin: 0 auto;
}



</style>




