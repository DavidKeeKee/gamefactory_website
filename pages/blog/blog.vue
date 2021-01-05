<template>
        <v-container class="pa-0 ml-2 mt-0" fluid >
        <v-row class="main">
               <div>
                <h2 style="font-size:2rem;margin-left:1.6rem;">BLOGS</h2>
               </div>
              <div class="navigation_bar">
                <ul style="margin-top:1vh;">
                      <li><a href="#">3D Game</a></li>
                      <li><a href="#">Game Design</a></li>
                      <li><a href="#">Company Ranking</a></li>
                      <li><a href="#">Game Programmer</a></li>
                      <li><a href="#">Mobile Game</a></li>
                </ul>
              </div>
        </v-row>



          <v-row>

            <v-col  class="blogs"
               cols="3" style="padding:0;" >



                        <v-hover
                          v-slot:default="{ hover }"
                          close-delay="40"
                         >
                            <div>
                              <v-card
                                :elevation="hover ? 16 : 2"
                                :class="{ 'on-hover': hover }"
                                class="ma-3 cardpanel"


                                >

                                  <!-- <v-img style="padding-bottom:2vh;height:26vh;" :src="blog.img" alt="">
                                    <v-card-text class="font-weight-medium subtitle-1 card_content">
                                    <span style="display:block;">{{ blog.content }} </span>
                                      <v-btn type="link" linkTo="#" :blogs="blogs" :href="blog.src" style="float:right;" text >More {{blog.id}} <v-icon>mdi-chevron-right</v-icon> </v-btn>
                                    </v-card-text>
                                  </v-img> -->

                                <v-img style="padding-bottom:2vh;height:26vh;" src="/3d_characters/blog.jpg" alt="">
                                  <v-card-text class="font-weight-medium subtitle-1 card_content">
                                  <span style="display:block;">The impact of 1 computer hardware upon a video Game Developer</span>
                                    <v-btn type="link" linkTo="#"  href="/blog/detailone" style="float:right;" text >More <v-icon>mdi-chevron-right</v-icon> </v-btn>
                                  </v-card-text>
                                </v-img>

                              </v-card>
                            </div>

                        </v-hover>
            </v-col>

          </v-row>

</v-container>
</template>

<script>
import {mapState} from 'vuex';
  export default {
    computed: {
        ...mapState ({
          blogs: state => state.blogs
        })
    },

    data(){
      return{


      }
    },
   methods:{

  }
  }
</script>

<style scoped>
.cardpanel{
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: cover;
}
.card_content {
  position: absolute;
   bottom: 0%;
  height: 40%;
  background-color: black;
  opacity: .7;
}


.navigation_bar ul li {
  display: inline-block;
  margin-left: 3vw;
}
.navigation_bar ul li a {
  position: relative;
  text-decoration: none;
  padding-left: 2px;
  color: white;

}
.navigation_bar ul li a::after {
  content: '';
  position: absolute;
  display: block;
  border-left: 5px solid yellow;
}
  .navigation_bar ul li a:hover  {
  padding-left: 5px;
  text-decoration: none;
  color: yellow;

}

  .navigation_bar ul li a:active, a:hover {
  border-left: 5px solid yellow;
}

  .navigation_bar ul {
  list-style-type: none;
  margin-left: 5rem;
  font-size: 1.3rem;
}

.main {
  padding-top: 6rem;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Libre Baskerville', serif;
}


</style>
