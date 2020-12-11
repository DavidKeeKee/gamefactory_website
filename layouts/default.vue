<template>
  <v-app  >

    <v-navigation-drawer
      fixed
      app
      permanent
      width="9.5vw"
      class="navigation_width"
      tile
      style="background-color:black;"

    >



            <v-img src="/icon/LOGO.png" class="logo"></v-img>

            <v-list
              flat
              dense
              color="black"
              active-class="black"

            >
              <v-list-item-group
                color="yellow"
              >
              <v-list-item
                class="click_active"
                v-for="item in items"
                :key="item.title"
                :to="item.to"
              >


                <v-list-item-content>
                  <v-list-item-title class="pl-3"><span class="text-size">{{ item.title }}</span></v-list-item-title>
                </v-list-item-content>


              </v-list-item>
              </v-list-item-group>
            </v-list>

    </v-navigation-drawer>






    <v-app-bar
      style="margin-left:7.7vw;"
      height="50"
      color="black"
      fixed

    >
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


      miniVariant: false,
      right: true,
      firstcard: {
        width: 45
      }

    }
  }
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
    width: 3.3vw;
    height: 7vh;
    margin-left: 1.8rem;
  }

</style>
