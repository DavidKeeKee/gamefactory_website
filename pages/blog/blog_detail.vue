<template>
        <v-container class="pa-0 ml-2 mt-0" fluid >
        <v-row class="main" v-for="blog in blogs"  :key="blog.id">
          <v-img class="img" :src="blog.img" width="100%" height="30vh"  alt="">
              <div class="header_main">
                <h2 class="content" v-if="blog.id">{{blog.content}}</h2>
                <p class="paragraph" v-if="blog.id">gamefactory-3d game, game design companies, Game Developers, Game Development, game development outsourcing, game outsourcing, game outsourcing companies, Game Programmer, Gaming, Gaming programmer, outsourcing game development, Video Game Companies-2020-09-21</p>
              </div>
          </v-img>
        </v-row>
</v-container>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
     computed: {
        ...mapState ({
          blogs: state => state.blogs,

        }),

    },

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
