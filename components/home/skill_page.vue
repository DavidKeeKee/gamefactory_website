<template>
        <div class="skill_page">
          <v-row class="our_experience_row">

              <div class="pb-8">
                <h2 style="text-align: center;">SKILLS</h2> <br>
                <p class="meet_game_factory_text">We are familiar with the language of mobile game development. This means we can meet all your needs in Unity, C#, C,
                Delphi, Java, SQL and other development languages. Also familiar with the Unity game engine, if you are interested in
                us, you are welcome to contact us.</p>
              </div>



              <v-row>

                  <v-col cols="2" style="text-align:center; font-size:1.5rem; color:#f7d40e;">
                      <div>Unity</div>
                      <div class="mt-10">Unreal</div>
                      <div class="mt-10">C++</div>
                      <div class="mt-10">Delphi</div>
                  </v-col>

                  <v-col cols="1" style="text-align:center; font-size:1.5rem; color:#f7d40e;">
                      <div>95%</div>
                      <div class="mt-10">95%</div>
                      <div class="mt-10">93%</div>
                      <div class="mt-10">90%</div>
                  </v-col>

                  <v-col cols="9">
                      <div class="mt-3">
                        <v-progress-linear
                          v-model="unity"
                          color="#e5c006"
                          rounded
                          height="13"
                        ></v-progress-linear>
                    </div>

                    <div class="mt-16">
                        <v-progress-linear
                          v-model="unreal"
                          color="#e5c006"
                          rounded
                          height="13"
                        ></v-progress-linear>
                    </div>

                    <div class="mt-16">
                        <v-progress-linear
                          v-model="cplus"
                          color="#e5c006"
                          rounded
                          height="13"
                        ></v-progress-linear>
                    </div>

                    <div class="mt-16">
                        <v-progress-linear
                          v-model="delphi"
                          color="#e5c006"
                          rounded
                          height="13"
                        ></v-progress-linear>
                    </div>
                  </v-col>
                  </v-row>

                  </v-row>

        </div>
</template>
<script>
  export default {

    data(){
      return{
        unity: 95,
        unreal: 95,
        cplus: 93,
        delphi:90,
      }
    },
   methods:{

  }
  }
</script>
<style scoped>
   .skill_page{
    position: relative;
    font-family: 'Libre Baskerville', serif;
    width: 100%;
  }

  .skill_page::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/background/skill_page.png");
    background-size: cover;
    background-position: top;
    opacity: 0.5;
  }

   .our_experience_row{
     padding:3rem;
  }

   .meet_game_factory_text{
    font-size: 1.5rem;
    margin-top: 2vh;
    font-weight: bold;

  }
</style>
