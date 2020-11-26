<template>
  <v-card
    elevation="24"


  >
   <v-carousel width="100%" height="100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
            > <div class="header_text">
                     <h2>{{item.title}}</h2> <br>
                    <span>English Name:</span>{{item.englishName}}/
                    <span>Platform:</span> {{item.platform}}/
                    {{item.chinese_Name}}
                    <span>Engine:</span> {{item.platform}}/
                    <span>Engine:</span> {{item.engine}}/
                    <span>Type:</span> {{item.type}}/
                    <span>Agent:</span> {{item.agent}}/
                    <span>Change Skill:</span> {{item.change_skill}}/
                    <span>Source Code:</span> {{item.source_code}} <br> <br>

                <v-btn :href="item.href" large color="#7160ed">
                  Play Video
                </v-btn>

              </div>


    </v-carousel-item>

  </v-carousel>
  </v-card>

</template>

<script>
  export default {
    data: () => ({
      model: 0,
      items: [
        {
          src: '/background/GF-Slider-01.png',
          title:'Recapture Manhattan',
          englishName:'[VR] RECAPTURE MANHATTAN',
          platform: 'Vive',
          engine:'Unreal',
          type:'VR, STG',
          agent:'No',
          change_skill:'Yes',
          source_code:'No',
          href: 'https://www.youtube.com/watch?v=QYmvuk8JTuU&feature=youtu.be&ab_channel=LinRed'
        },
        {
          src: '/background/GF-Slider-03.png',
          title:'Endless Dungeon',
          englishName:'Endless Dungeon',
          chinese_Name:'Chinese Name:無盡地下城/',
          platform: 'iOS, Android',
          engine:'Unity Game',
          type: 'RPG',
          agent:'Yes',
          change_skill:'No Source',
          source_code:'Available',
          href: 'https://www.youtube.com/watch?v=QYmvuk8JTuU&feature=youtu.be&ab_channel=LinRed'
        },
        {
          src: '/background/GF-Slider-02.png',
          title:'God of Casino',
          englishName:'Chinese Name:God of Casino',
          chinese_Name:'神拉霸',
          platform: 'iOS, Android',
          engine:'CoCOs, 2D Game',
          type: 'Casino',
          agent:'Yes',
          change_skill:'Yes Source',
          source_code:'Not Available',
          href: 'https://www.youtube.com/watch?v=_4T1QCOT6zQ&feature=youtu.be&ab_channel=GodofCasino%E7%A5%9E%E6%8B%89%E9%9C%B8'
        }
      ],
    }),
  }
</script>

<style>
.header_text {
  width: 70%;
  margin: 23% 0 0 6%;
  font-size: 1.2rem;
  font-family: 'Libre Baskerville', serif;
}
</style>
