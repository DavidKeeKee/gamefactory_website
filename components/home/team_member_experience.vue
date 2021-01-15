<template>
            <div class="our_client" style="background-color:#494949;">
              <h1 class="heading_info_header_client">TEAM MEMBER EXPERIENCE</h1>
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
                            <div class="six_one client_img">

                            </div>
                            <div class="text_align">61 COMP</div>
                          </v-col>

                          <v-col >
                            <div class="client_img_frame client_img appwork">
                            </div>
                            <div class="text_align justify_center">APP WORK</div>
                          </v-col>

                          <v-col>
                          <div class="client_img_frame client_img chinese_gamer">

                          </div>
                            <div class="text_align" style="margin-left:2.7vw;">CHINESE GAME</div>
                          </v-col>

                          <v-col>
                            <div class="client_img_frame">
                              <v-img src="/team_member_experience/delight.png" class="client_img"></v-img>
                            </div>
                            <div class="text_align justify_center">DELIGHT</div>
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
                            <div class="foxconn client_img">

                            </div>
                            <div class="text_align">FOXCONN</div>
                          </v-col>

                          <v-col >
                            <div class="client_img_frame client_img gamania">
                            </div>
                            <div class="text_align justify_center">GAMANIA</div>
                          </v-col>

                          <v-col>
                          <div class="client_img_frame client_img icg">

                          </div>
                            <div class="text_align justify_center">ICG</div>
                          </v-col>

                          <v-col>
                            <div class="client_img_frame">
                              <v-img src="/team_member_experience/igs.png" class="client_img"></v-img>
                            </div>
                            <div class="text_align justify_center">IGS</div>
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
                            <div class="interserv client_img">

                            </div>
                            <div class="text_align">INTERSERV</div>
                          </v-col>

                          <v-col >
                            <div class="client_img_frame client_img more_fun">
                            </div>
                            <div class="text_align justify_center">MORE FUN</div>
                          </v-col>

                          <v-col>
                          <div class="client_img_frame client_img USERJOY">

                          </div>
                            <div class="text_align justify_center">USERJOY</div>
                          </v-col>

                          <v-col>
                            <div class="client_img_frame">
                              <v-img src="/team_member_experience/wanin.png" class="client_img"></v-img>
                            </div>
                            <div class="text_align justify_center">WANIN</div>
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
                            <div class="x_legend client_img">

                            </div>
                            <div class="text_align">X-LEGEND</div>
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
       // modal: "",
      }
    },
   methods:{

  }
  }
</script>

<style scoped>
  .our_client{
    margin-top: -5.4rem !important;
  }

  .heading_info_header_client{
    text-align: center;
    padding-top: 6.6rem;
    font-size: 2.4rem ;
    font-family: 'Libre Baskerville', serif;
  }
  .img_sheet{
    padding-top: 9.5rem;
  }
  .six_one{
    background-image: url('/team_member_experience/61_com.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .client_img_frame{
    margin-left: 4rem;
  }
  .appwork {
    background-image: url('/team_member_experience/appwork.png');
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: right top;

  }
  .chinese_gamer{
    background-image: url('/team_member_experience/chinese_gamer.png');
    background-size: cover;
    background-position: right top;
    width: 7.8rem;
    height: 7.8rem;
  }
  .foxconn{
    background-image: url('/team_member_experience/foxconn.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .gamania{
    background-image: url('/team_member_experience/gamania.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .icg{
    background-image: url('/team_member_experience/icg.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }
  .interserv {
    background-image: url('/team_member_experience/interserv.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
  }

  .more_fun {
    background-image: url('/team_member_experience/more_fun.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }
  .USERJOY {
    background-image: url('/team_member_experience/USERJOY.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }


  .x_legend {
    background-image: url('/team_member_experience/x_legend.png');
    background-size: cover;
    width: 7.8rem;
    height: 7.8rem;
     background-position:top;
  }

  .text_align {
    font-family: 'Libre Baskerville', serif;
    font-size: 1rem;
    text-align: center;
  }

  .justify_center {
    margin-left: 4rem;
  }
</style>
