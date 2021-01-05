<template>
        <v-container class="pa-0 ml-2 mt-0" fluid >
        <v-row class="main" v-for="(blog,i) in blogs"  :key="i">
          <v-img class="img" :src="blog.img" width="100%" height="30vh" alt="">
              <div class="header_main">
                <h2 class="content">The Impact of 10 Computer Hardware upon a Video Game Developer</h2>
                <p class="paragraph">gamefactory-3d game, game design companies, Game Developers, Game Development, game development outsourcing, game outsourcing, game outsourcing companies, Game Programmer, Gaming, Gaming programmer, outsourcing game development, Video Game Companies-2020-09-21</p>
              </div>
          </v-img>
        </v-row>





</v-container>
</template>
<script>
  export default {
    props: ['blogs'],

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
