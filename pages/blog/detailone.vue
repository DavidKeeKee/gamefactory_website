<template>
        <v-container class="pa-0 ml-2 mt-0" fluid >
        <v-row class="main">
          <v-img class="img" src="/3d_characters/blog.jpg" width="100%" height="30vh"  alt="">
              <div class="header_main">
                <h2 class="content" >The impact of 1 computer hardware upon a video Game Developer</h2>
                <p class="paragraph" >gamefactory-3d game, game design companies, Game Developers, Game Development, game development outsourcing, game outsourcing, game outsourcing companies, Game Programmer, Gaming, Gaming programmer, outsourcing game development, Video Game Companies-2020-09-21</p>
              </div>

          </v-img>
        </v-row>

        <v-row  >
          <div style=" line-height:4vh; font-size:2.2vh;" class="ma-12">A video game developer has to develop a video game according to the market grend, the popularity and many other facts.
            Among them, the development of computer hardware also have impact upon them, Indeed, the video game development is not an easy job.
            The effort is usually undertaken by a single video game developer, or sometimes, ranging from a single video game developer to an international team of video game Developers
            across the globe. <br> <br>
            <p>You have to control a car through a steering wheel,lever pedal and brake pedal, etc. And the video game developers also have to
              create a video game by handling with those computer hardware. And the computer hardware includes the physical parts of a computer. such as
              the case, central processing unit (CPU). monitor,  mouse, keyboard, computer data storage, praphics card, sound card, speakers and motherboard.
            </p>
          </div>
        </v-row>
</v-container>
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
<style>
   .img {
      position: relative;
      background-size: 100% 100%;
      background-attachment: cover;
      background-position: right top;
      background-attachment: fixed;
      opacity: 0.9;
    }
    .content {
      position: absolute;
      top:40%;
      color: white;
      font-weight: bold;

    }

    .paragraph {
      position: absolute;
      padding-right: 4vh;
      top:60%;
    }
    .header_main {
      margin-left:2vh;
    }

    * {
       font-family: 'Libre Baskerville', serif;
    }
</style>
