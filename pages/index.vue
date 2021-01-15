<template>
  <v-container fluid   wrapper ma-0 pa-0 no-gutters>
    <!-- The Modal -->

    <div id="myModal" class="modal" >
      <span class="close" @click="imageclose()">&times;</span>
      <img :src="largeimage" class="modal-content" >



    </div>
    <!-- End The Modal -->

    <div class="header">
      <carousel/>
    </div>
          <!-- Start about website -->
            <aboutwebsite/>
          <!-- End about website -->


          <!-- Start ourexperience -->
              <ourexperience/>
          <!-- End ourexperience -->


          <!-- Start ourexperience -->
            <skillpage/>
          <!-- End ourexperience -->


          <!-- Start ourexperience -->
            <ourstrength/>
          <!-- End ourexperience -->


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
             <v-img src="/team/cto/cto.png" class="team_img"></v-img>
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


          <!-- Start ourexperience -->
           <memberexperience/>
          <!-- End ourexperience -->




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
                                <v-btn
                                v-for="(button,index) in buttons"
                                :key="index"
                                 @click="changestatus(button.active)"
                                :class ="button.active ? 'md-raised':''"
                                color="#333333"
                                text>
                                  <span class="arrow_list_link twoD_link">
                                    {{ button.name }}
                                  </span>
                                </v-btn>
                                <!-- <v-btn color="#333333" text><span class="arrow_list_link threeD_link" @click="show3Dpic = !show3Dpic">3D</span></v-btn> -->
                              </div>
                          </div>


                        </v-col>
                    </v-row>

<!-- start 3D -->
                      <div
                        class="portfolio_img_layer"
                        v-show="activestatus == true"
                      >
                          <v-row class="text-center align-center justify-center">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/3d_characters/cha (95).jpg');" src="/3d_characters/cha (95).jpg"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/3d_characters/cha (69).jpg');" src="/3d_characters/cha (69).jpg"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/3d_characters/cha (23).jpg');" src="/3d_characters/cha (23).jpg"
                             alt="placeholder">
                          </v-row>



                          <v-row class="text-center align-center justify-center">

                             <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/3d_characters/cha (59).jpg');" src="/3d_characters/cha (59).jpg"
                             alt="placeholder">


                            <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/3d_characters/cha (33).jpg');" src="/3d_characters/cha (33).jpg"
                             alt="placeholder">



                            <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/3d_characters/cha (24).jpg');" src="/3d_characters/cha (24).jpg"
                             alt="placeholder">
                          </v-row>

                          <v-row class="text-center align-center justify-center">

                              <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/3d_characters/cha (25).jpg');" src="/3d_characters/cha (25).jpg"
                               alt="placeholder">

                              <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/3d_characters/cha (105).jpg');" src="/3d_characters/cha (105).jpg"
                               alt="placeholder">

                               <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/3d_characters/cha(26).jpg');" src="/3d_characters/cha(26).jpg"
                               alt="placeholder">

                          </v-row>

                      </div>

          <!-- end 3D -->




          <!-- start 2D -->
                      <div  v-show="activestatus == false" class="portfolio_img_layer" v-if="!show2Dpic">

                          <v-row class="text-center align-center justify-center">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-01.jpg');" src="/2DThumbnail/2d-01_1.png"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-02.jpg');" src="/2DThumbnail/2d-02_1.png"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-03.jpg');" src="/2DThumbnail/2d-03_1.png"
                             alt="placeholder">
                          </v-row>


                          <v-row class="text-center align-center justify-center">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-04.jpg');" src="/2DThumbnail/2d-04_1.png"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-05.jpg');" src="/2DThumbnail/2d-05_1.png"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-06.jpg');" src="/2DThumbnail/2d-06_1.png"
                             alt="placeholder">
                          </v-row>

                          <v-row class="text-center align-center justify-center">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-07.jpg');" src="/2DThumbnail/2d-07_1.png"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-08.jpg');" src="/2DThumbnail/2d-08_1.png"
                             alt="placeholder">

                            <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-09.jpg');" src="/2DThumbnail/2d-09_1.png"
                             alt="placeholder">
                          </v-row>


                      </div>

          <!-- end 2D -->








          <!-- start 3D -->
         <div v-if="activestatus == true" class="second_more" v-show="moreshow">
            <v-row  class="text-center align-center justify-center">

              <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/3d_characters/cha (1).jpg');" src="/3d_characters/cha (1).jpg"
               alt="placeholder">

              <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/3d_characters/cha (2).jpg');" src="/3d_characters/cha (2).jpg"
               alt="placeholder">

              <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/3d_characters/cha (3).jpg');" src="/3d_characters/cha (3).jpg"
               alt="placeholder">
            </v-row>

            <v-row class="text-center align-center justify-center">

               <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/3d_characters/cha (4).jpg');" src="/3d_characters/cha (4).jpg"
               alt="placeholder">


              <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/3d_characters/cha (5).jpg');" src="/3d_characters/cha (5).jpg"
               alt="placeholder">



              <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/3d_characters/cha (6).jpg');" src="/3d_characters/cha (6).jpg"
               alt="placeholder">
            </v-row>

            <v-row class="text-center align-center justify-center">

                <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/3d_characters/cha (7).jpg');" src="/3d_characters/cha (7).jpg"
                 alt="placeholder">

                <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/3d_characters/cha (8).jpg');" src="/3d_characters/cha (8).jpg"
                 alt="placeholder">

                 <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/3d_characters/cha (9).jpg');" src="/3d_characters/cha (9).jpg"
                 alt="placeholder">
            </v-row>
        </div>
        <!-- end 3D -->


        <!-- start 2D -->
        <div v-if="activestatus == false" class="second_more" v-show="moreshow">
            <v-row class="text-center align-center justify-center">

              <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-10.jpg');" src="/2DThumbnail/2d-10_1.png"
               alt="placeholder">

              <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-11.jpg');" src="/2DThumbnail/2d-11_1.png"
               alt="placeholder">

              <img id="myImg" class="portfolio_img portfolio_img_left" @click="showImg('/2D/2d-12.jpg');" src="/2DThumbnail/2d-12_1.png"
               alt="placeholder">
            </v-row>

            <v-row class="text-center align-center justify-center">

               <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/2D/2d-13.jpg');" src="/2DThumbnail/2d-13_1.png"
               alt="placeholder">


              <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/2D/2d-14.jpg');" src="/2DThumbnail/2d-14_1.png"
               alt="placeholder">



              <img id="myImg" class="portfolio_img portfolio_img_center" @click="showImg('/2D/2d-15.jpg');" src="/2DThumbnail/2d-15_1.png"
               alt="placeholder">
            </v-row>

            <v-row class="text-center align-center justify-center">

                <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-16.jpg');" src="/2DThumbnail/2d-16_1.png"
                 alt="placeholder">

                <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-17.jpg');" src="/2DThumbnail/2d-17_1.png"
                 alt="placeholder">

                 <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-18.jpg');" src="/2DThumbnail/2d-18_1.png"
                 alt="placeholder">
            </v-row>

          <v-row class="text-center align-center justify-center">

              <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-19.jpg');" src="/2DThumbnail/2d-19_1.png"
               alt="placeholder">

              <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-20.jpg');" src="/2DThumbnail/2d-20_1.png"
               alt="placeholder">

               <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-21.jpg');" src="/2DThumbnail/2d-21_1.png"
               alt="placeholder">
          </v-row>

          <v-row class="text-center align-center justify-center">

              <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-22.jpg');" src="/2DThumbnail/2d-22_1.png"
               alt="placeholder">

              <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-23.jpg');" src="/2DThumbnail/2d-23_1.png"
               alt="placeholder">

               <img id="myImg" class="portfolio_img portfolio_img_right" @click="showImg('/2D/2d-24.jpg');" src="/2DThumbnail/2d-24_1.png"
               alt="placeholder">
          </v-row>
        </div>
        <!-- end 2D -->



        <div class="text-center" style="margin-bottom:5rem;">
          <v-btn
            large
            outlined
            color="#ffffff"
            @click="moreshow = !moreshow"
          >
            MORE
          </v-btn>
        </div>

      </div>


            <!-- Start ourexperience -->
              <ourclient/>
            <!-- End ourexperience -->

            <div class="testimonials">
              <h1 class="heading_info_portfolio testimonial_heading">TESTIMONIALS</h1>

                <v-row>
                  <v-col cols="6">
                    <div class="testimonial_about">
                      Taiwan is a small island, and the mobile game industry is a very close relationship industry. We know and have a strong relationship. And this is the best choice for you to cooperate with us. We are able to provide high quality products, complete on time, and have high integrity and trust. Our success is built on this belief, and we are very proud of our close contacts with industry friends.
                    </div>
                  </v-col>

                  <v-col cols="6">

                          <v-carousel hide-delimiters height="20rem" class="feedback_user">
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
                              background-color="#1E1E1E"
                              height="3.7rem"
                              v-model="select"
                              class="custom-label-color"
                              color="yellow"
                              :items="items"
                              outlined
                            ></v-combobox>
                          </div>
                </v-row>

                  <v-row class="text-center align-center justify-center">

                          <div style="width:23%; border-radius: 158px;">
                            <!-- <input  type="text" id="fname" name="fname" placeholder="NAME*"> -->
                            <v-text-field
                              background-color="#1E1E1E"
                              height="3.7rem"
                              label="NAME*"
                              class="custom-label-color"
                              color="yellow"
                              outlined
                            ></v-text-field>
                          </div>

                          <div style="width:35%; margin-left:2rem;">
                            <v-text-field
                              background-color="#1E1E1E"
                              height="3.7rem"
                              label="EMAIL ADDRESS*"
                              class="custom-label-color"
                              color="yellow"
                              outlined
                            ></v-text-field>
                          </div>

                  </v-row>

                  <v-row class="text-center align-center justify-center">

                          <div style="width:27%;">
                            <v-text-field
                              background-color="#1E1E1E"
                              height="3.7rem"
                              label="CONTACT NUMBER"
                              dark
                              outlined
                              class="custom-label-color"
                              color="yellow"
                            ></v-text-field>
                          </div>

                          <div style="width:31%; margin-left:2rem;">
                            <v-text-field
                              background-color="#1E1E1E"
                              label="COMPANY NAME"
                              class="custom-label-color"
                              color=" #c7b442"
                              outlined
                            ></v-text-field>
                          </div>

                  </v-row>

              <v-row class="text-center align-center justify-center">

                  <div class="combobox">
                    <!-- <v-textarea  @click="removevalue"
                      background-color="#1E1E1E"
                      color="#c7b442"
                      class="textarea"
                      id="textarea"
                      solo
                      name="input-7-4"
                      value="TELL US ABOUT YOUR PROJECT:
    EX.WHAT PLATFORM DO YOU PREFER?
    WHAT IS YOUR BUDGET?
    IS THERE A GAME REFERENCE?
    WHEN DO YOU NEED IT TO BE COMPLETED BY? "
                    ></v-textarea> -->

                        <textarea id="textarea"   class="w3review"  @click="removevalue">
      TELL US ABOUT YOUR PROJECT:
      EX.WHAT PLATFORM DO YOU PREFER?
      WHAT IS YOUR BUDGET?
      IS THERE A GAME REFERENCE?
      WHEN DO YOU NEED IT TO BE COMPLETED BY?
                        </textarea>

                  </div>

              </v-row>
               <v-row class="text-center align-center justify-center">
                <v-checkbox
                  v-model="agreement"
                  :rules="[rules.required]"
                  color="black"

                >
                  <template v-slot:label>
                   By sending my personal data, I acknowledge i have read and accepted our privacy policy.
                  </template>
                </v-checkbox>
               </v-row>

               <v-row class="text-center align-center justify-center send_button">
                <v-btn style="background-color:#c7b442;"
                  color="black"
                  outlined

                >
                  <span style="font-weight:bold;">SEND</span>
                </v-btn>
               </v-row>
            </div>



  </v-container>


</template>




<script>
import carousel from '@/components/header_carousel.vue';
import aboutwebsite from '@/components/home/about_website.vue';
import ourexperience from '@/components/home/our_experience.vue';
import ourclient from '@/components/home/our_client.vue';
import skillpage from '@/components/home/skill_page.vue';
import ourstrength from '@/components/home/our_strength.vue';
import memberexperience from '@/components/home/team_member_experience.vue';


export default {
   components:{
     carousel,
     aboutwebsite,
     ourexperience,
     ourclient,
     skillpage,
     ourstrength,
     memberexperience
  },
  methods:{
          removevalue(){
          document.getElementById('textarea').value = "";
          document.getElementById("textarea").innerHTML = "";
          // document.getElementById("textarea").style.color = "red";

        },
            showImg(link) {
            var modal = document.getElementById('myModal'); // Get modal
            var img = document.getElementById('myImg'); // get image link

            this.largeimage = link
             modal.style.display = "block";

         },

          imageclose() {
            var close = document.getElementById("myModal");
            close.style.display = "none"
          },
          changestatus(value) {
            //console.log(value);
            this.buttons.forEach( item => {
              if(value == false) {
                this.activestatus = false
              } else {
                this.activestatus = true
              }
              //console.log( this.activestatus)
            })
          }
        },



  data () {
    return {
      showDropdown:false,
      show: false,
      moreshow:false,
      agreement: false,
      modal: "",
      img:'',
      modalImg:'',
      captionText:'',
      largeimage:'',
      src:'',
      show2Dpic:false,
      show3Dpic:true,
      activestatus:true,
      buttons:[
          {name:'2D',active:false},
          {name:'3D',active:true}
      ],
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
      model: 0,
      // colors: [
      //   'primary',
      //   'secondary',
      //   'yellow darken-2'
      // ],
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
          src: '/testimonials/gf-logo-02-50x50.png',
          name: 'Depred.co'
        },
        {
          content: '"This is exactly the game we wanted and our proud to call our own. Very satisfied with both the game play plus the in-app monetization features.We counted on Game Factory\'s expertise, and they delivered."',
          src: '/testimonials/photo-1-50x50.jpg',
          name: '7EEGAMES.co'
        },
        {
          content: 'Our game "War Pirates" was made in large part due to Game Factory\'s founders - Eason and Sappy.War Pirates involves an \'immersive imaginative world\' that can only be brought to life by a highly skilled creative director.',
          src: '/testimonials/sega-logo-50x50.jpg',
          name: 'Sega'
        },
      ],

    }
  },


}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media screen and (min-width: 1800px) {
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    ;
  }
}

@media screen and (min-width: 800px) {
  .container {

    ;
  }
}
.v-text-field--outlined >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}

/* h1.heading_info{
  text-align: center;
  margin-bottom: 2rem;
} */
  .header{
    background-color:black;
    clear:both;
  }

  .heading_info_header{
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 3.5rem;
    font-family: 'Libre Baskerville', serif;
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

  .last_text{
    padding-right:2.6rem;
  }
  .second_text{
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .characters{
    padding-bottom: 3rem;
  }


  .full_level_img{
    width: 5vw;
    height: auto;
    margin: 0 auto;
    margin-bottom:1rem;
  }
  /* .full_level_img_animation{
    width: 3.3vw;
    height: 7vh;
    margin: 0 auto;
    margin-bottom:1rem;
  } */


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

  /* skill page */


  .text_rate {
   font-size:1.5rem;
   margin-left:5rem;
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
    width: 100%;
    height: 70vh;
    font-family: 'Libre Baskerville', serif;
    padding-top: 2rem;
    margin-top: -6rem;
    margin-bottom: 1rem;
    clip-path: polygon(51% 9%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);


  }
  /* .our_strength_row{
     padding-top:1.7rem;
     padding-bottom: 4.6rem;
     padding-right: 3rem;
     padding-left: 3rem;
  } */
  .team_img {
    margin: 0 auto;
    width: 11rem;
    height: 11rem;
    clip-path: circle(50% at 50% 50%);
  }

  .team_img:hover{
    opacity: 0.5;
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

  .gray_box{
    padding-left: 10rem;
  }

  /* PORTFOLIO*/

  .portfolio{
    background-color:#333333;
    width: 100%;
    padding-bottom: 3rem;
    font-family: 'Libre Baskerville', serif;
    /* padding-top: 2rem; */
    /* padding-left: 3rem; */
    margin-top: -5.7rem;
    clip-path: polygon(51% 3%, 54% 0, 100% 0, 100% 100%, 0 100%, 0 0, 48% 0);

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
  padding-left: 8rem;
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

  .second_more{
    padding-bottom: 3rem;
  }
  .portfolio_img{
    margin-left: 3rem;
    margin-bottom: 2rem;
    width: 20rem;
    height: 18rem;
    cursor: pointer;
    transition: 0.3s;

  }


  .portfolio_img:hover {
    opacity: 0.6;
    }



  .modal {
    display: none;
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 0%;
    text-align: center;
    top: 0%;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */

  }


  .modal-content {
    margin: auto;
    margin-top: 12rem;

    width: 80%;
    max-width: 700px;
  }


  /* The Close Button */
  .close {
    position: absolute;
    top: 115px;
    right: 30rem;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /*our_client */
.our_client{
  padding-bottom: 8rem;
  margin-top: -4.4rem;
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


/*testimonials */

.testimonials {
  margin-top: -5rem;
  background-color: #575757;
   width: 100%;
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
  width: 80%;
  background-color: white;
  color: black;
  padding: 3rem  3rem;
  border-radius: 1rem;

}

/*contact_us*/
.contact_us{
  font-family: 'Libre Baskerville', serif;
  background-color:#6a6a6a ;
  margin-top: -4rem;
  width: 100%;
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

/* contact */
.textarea{
  resize: none;
  border-radius: 12px;
  border:4px solid #c7b442;
  height:10rem;
  color: #c7b442 ;
}
  textarea:focus ~ label{
          color: #55c57a;
  }
  .custom-label-color .v-label {
    color: #c7b442;
  }
   .custom-label-color .v-label {
    color: #c7b442;
  }
  .custom-label-color{
    border-radius: 12px;
    height: 5rem;
  }

  .custom-label-color .textarea{
    border-radius: 12px;
    border: 4px solid #c7b442;
    height: 8rem;
    padding-bottom: 3rem;
  }
  .custom-label-color:focus{
    border: 1px solid #c7b442;
  }

  .v-text-field--outlined fieldset {
    border: 4px solid #c7b442 !important

  }

  .w3review {
    color:#c7b442;
    background-color:#1E1E1E;
    border:4px solid #c7b442;
    border-radius: 12px;
    width: 100%;
    height: 10rem;
  }

  .send_button{
    padding-bottom: 3rem;
  }
  /* textarea:right-answer { color: blue;} */


</style>




