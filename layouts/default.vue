<template>
  <v-app>
    <v-navigation-drawer
      fixed
      app

      v-model="drawer"
      absolute


      width="170"
      height="100%"

      class="navigation_width"
      tile
      style="background-color:black;"
    >
      <v-list
        flat
        dense
        color="black"
        active-class="black"

      >
        <v-list-item-group
           v-model="group"
          color="yellow"

        >
        <v-img src="/icon/LOGO.png" class="logo mt-12"></v-img>
        <v-list-item
          class="click_active mt-1"
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >


          <v-list-item-content>
            <v-list-item-title class="pl-3"><span class="text-size navigation_group" >{{ item.title }}</span></v-list-item-title>
          </v-list-item-content>


        </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-menu
        open-on-hover
        :offset-x="offset"
      >
        <template v-slot:activator="{ on, attrs }">

          <span dark
            v-bind="attrs"
            v-on="on"
            class="text-size navigation_group pl-7"
          >BLOGS</span>
        </template>

        <v-list class="pl-16" style="background-color:black; opacity:0.8;">
          <v-list-item
            v-for="(blog, index) in blogs"
            :key="index"
          >
            <v-list-item-title class="">
              <span class="pl-4 pr-3 blog_title right_arrow">{{ blog.titleone }} {{ blog.titletwo }} <span>{{ blog.titlethree }}</span>
              </span>
              </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-navigation-drawer>




    <v-app-bar
      height="50"
      color="black"
      fixed

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" x-large></v-app-bar-nav-icon>
      <v-spacer />
      <v-menu offset-y

        >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
                  v-bind="attrs"
            v-on="on">
        <span>ENG</span> <v-icon class="pa-2">arrow_drop_down</v-icon>
      </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(language, index) in languages"
            :key="index"

          >
            <v-list-item-title >{{ language.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-icon class="pa-2" color="yellow">message</v-icon>
    </v-app-bar>
    <v-main>

        <nuxt />

    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>


</template>

<script>

export default {
   components:{

  },
  data () {
    return {
      drawer: false,
      group: null,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {

          title: 'HOME',
          to: '/'
        },
        {

          title: 'ABOUT',
          to: '/inspire'
        },
        {

          title: 'BLOGS',
          to: '/blog/blog'
        },
        {

          title: 'PORDFOLIO',
          to: '/pordfolio'
        },

         {

          title: 'CONTACT',
          to: '/contact'
        },
      ],
       languages: [
        { title: 'ENGLISH' },
        { title: 'CHINESE (TRADITIONAL)' },

      ],

       blogs: [
        { titleone: 'GAME DESIGN',active:false },
        { titletwo: 'GAME DEVELOPMENT',active:false },
        { titlethree: 'APT PRODUCTION',active:true},
      ],
      offset: true,


      miniVariant: false,
      right: true,
      firstcard: {
        width: 45
      }

    }
  },
  // computed: {
  //   mini() {
  //     switch (this.$vuetify.breakpoint.name) {
  //       case 'xs': return true
  //       case 'sm': return true
  //       case 'md': return true
  //       case 'lg': return false
  //       case 'xl': return false
  //   }
  // }
  // },
  watch: {
    group () {
      this.drawer = false
    },
  },

}
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .text-size{
    font-size: 1rem;
    font-family: 'Libre Baskerville', serif;
  }

  .logo{
    width: 38%;
    height: auto;
    margin-left: 1.8rem;
  }

  .navigation_group:hover {
    color: yellow;
  }

  .blog_title {
   font-family: 'Libre Baskerville', serif;
  }
  .blog_title:hover {
    color: yellow;
  }

  .right_arrow::after {
    content: url("/icon/right_arrow.png");
  }


</style>
