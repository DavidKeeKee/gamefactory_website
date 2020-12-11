<template>
        <v-container class="pa-0 ml-2 mt-0" fluid >
        <v-row class="main">
               <div>
                <h2 style="font-size:2rem;margin-left:2rem;">BLOGS</h2>
               </div>
              <div class="navigation_bar">
                <ul style="margin-top:5px;">
                      <li><a href="#">3D Game</a></li>
                      <li><a href="#">Game Design</a></li>
                      <li><a href="#">Company Ranking</a></li>
                      <li><a href="#">Game Programmer</a></li>
                      <li><a href="#">Mobile Game</a></li>
                </ul>
              </div>
        </v-row>



          <v-row>

            <v-col v-for="(blog,i) in blogs" :src="blogs.src"
              :key="i" cols="3" style="padding:0;" >



                        <v-hover
                          v-slot:default="{ hover }"
                          close-delay="40"
                         >
                            <v-card
                              :elevation="hover ? 16 : 2"
                              :class="{ 'on-hover': hover }"
                              class="ma-3 cardpanel"


                              >

                                <v-img :src="blog.img" alt="">
                                  <v-card-text class="font-weight-medium subtitle-1 card_content">
                                  <span>{{ blog.content }} </span> <br>
                                    <v-btn :href="blog.src" style="float:right;" text >More <v-icon>mdi-chevron-right</v-icon> </v-btn>
                                  </v-card-text>


                                </v-img>

                            </v-card>

                        </v-hover>
            </v-col>

          </v-row>

</v-container>
</template>

<script>
  export default {

    data(){
      return{
        blogs: [
          {
            content: 'The impact of 10 computer hardware upon a video Game Developer ',
            img: '/3d_characters/blog.jpg',
            src: '/blog/blog_detail'
          },
          {
            content: 'The impact of 10 computer hardware upon a video Game Developer',
            img: '/3d_characters/blog.jpg',
            src: '/blog/blog_detail'
          },
          {
            content: 'The impact of 10 computer hardware upon a video Game Developer',
            img: '/3d_characters/blog.jpg',
            src: '/blog/blog_detail'
          },
          {
            content: 'The impact of 10 computer hardware upon a video Game Developer',
            img: '/3d_characters/blog.jpg',
            src: '/blog/blog_detail'
          },
          {
            content: 'The impact of 10 computer hardware upon a video Game Developer',
            img: '/3d_characters/blog.jpg',
            src: '/blog/blog_detail'
          },
          {
            content: 'The impact of 10 computer hardware upon a video Game Developer',
            img: '/3d_characters/blog.jpg',
            src: '/blog/blog_detail'
          },
          // {
          //   content: 'The impact of 10 computer hardware upon a video Game Developer',
          //   img: '/3d_characters/blog.jpg',
          //   src: 'Sega'
          // },
          // {
          //   content: 'The impact of 10 computer hardware upon a video Game Developer',
          //   img: '/3d_characters/blog.jpg',
          //   src: 'Sega'
          // },
          // {
          //   content: 'The impact of 10 computer hardware upon a video Game Developer',
          //   img: '/3d_characters/blog.jpg',
          //   src: 'Sega'
          // },
          // {
          //   content: 'The impact of 10 computer hardware upon a video Game Developer',
          //   img: '/3d_characters/blog.jpg',
          //   src: 'Sega'
          // },
        ],
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
  height: 44%;
  background-color: black;
  opacity: .7;
}
.gameinfo {
  padding-top:12vh;
}

.navigation_bar ul li {
  display: inline-block;
  margin-left: 4rem;
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
