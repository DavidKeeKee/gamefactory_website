<template>
            <div class="our_client" style="background-color:#494949;">
              <h1 class="heading_info_header_client">OUR CLIENT</h1>
              <v-carousel>
                <v-carousel-item>
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
                            <div class="client_img_frame client_img aimhigh_global">
                            </div>
                          </v-col>

                          <v-col>
                          <div class="client_img_frame client_img compal">

                          </div>
                          </v-col>

                          <v-col>
                            <div class="client_img_frame">
                              <v-img src="/clients_page/chinese_gamer.png" class="client_img"></v-img>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>


                <v-carousel-item>
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
                            <div class="hidden_boss client_img">

                            </div>
                          </v-col>

                          <v-col >
                            <div class="client_img_frame client_img jumbo">
                            </div>
                          </v-col>

                          <v-col>
                          <div class="client_img_frame client_img metwo">

                          </div>
                          </v-col>

                          <v-col>
                            <div class="client_img_frame">
                              <v-img src="/clients_page/nanshanlife.png" class="client_img"></v-img>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>


                <v-carousel-item>
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
                            <div class="noxy_games client_img">

                            </div>
                          </v-col>

                          <v-col >
                            <div class="client_img_frame client_img oath">
                            </div>
                          </v-col>

                          <v-col>
                          <div class="client_img_frame client_img softstar">

                          </div>
                          </v-col>

                          <v-col>
                            <div class="client_img_frame">
                              <v-img src="/clients_page/onemt.png" class="client_img"></v-img>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>

                <v-carousel-item>
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
                            <div class="softworld client_img">

                            </div>
                          </v-col>

                          <v-col >
                            <div class="client_img_frame client_img yahoo">
                            </div>
                          </v-col>

                        </v-row>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
</template>

<script>
  export default {

    data(){
      return{
        //modal: "",
      }
    },
   methods:{

  }
  }
</script>

<style scoped>

  .heading_info_header_client{
    text-align: center;
    padding-top: 6.6rem;
    font-size: 2.4rem ;
    font-family: 'Libre Baskerville', serif;
  }
  .img_sheet{
    padding-top: 9.5rem;
  }
  .smart_game{
    background-image: url('/clients_page/smart_games.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .client_img_frame{
    margin-left: 4rem;
  }
  .aimhigh_global {
    background-image: url('/clients_page/aimhigh_global.png');
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: right top;

  }
  .compal{
    background-image: url('/clients_page/compal.png');
    background-size: cover;
    background-position: right top;
    width: 7.8rem;
    height: 7.8rem;
  }
  .hidden_boss{
    background-image: url('/clients_page/hidden_boss.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .jumbo{
    background-image: url('/clients_page/jumbo.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .metwo{
    background-image: url('/clients_page/me2.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .noxy_games {
    background-image: url('/clients_page/noxy_games.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }

  .oath {
    background-image: url('/clients_page/oath.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }
  .softstar {
    background-image: url('/clients_page/softstar.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }

  .yahoo {
    background-image: url('/clients_page/yahoo.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }

  .softworld {
    background-image: url('/clients_page/soft_world.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }

  .jumbo{
    background-image: url('/clients_page/jumbo.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .metwo{
    background-image: url('/clients_page/me2.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }

  .aimhigh_global {
    background-image: url('/clients_page/aimhigh_global.png');
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: right top;

  }

  .compal{
    background-image: url('/clients_page/compal.png');
    background-size: cover;
    background-position: right top;
    width: 7.8rem;
    height: 7.8rem;
  }
</style>
