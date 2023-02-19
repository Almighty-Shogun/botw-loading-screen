<template>
  <div class="botw-loader">

    <div class="wipe-top"></div>
    <div class="wipe-bottom"></div>

    <div class="load-section-top">
      <div class="content-top">

        <div class="loading-title">
          <h3>{{currentTip.title}}</h3>
        </div>

        <div class="statistics">

          <div class="hearts">
            <Hearts v-for="i in hearts" :key="i"/>
          </div>

          <div class="stamina">
            <StaminaWheel v-for="i in staminaWheels" :key="i"/>
          </div>

          <div class="statistic spirit-orbs">
            <SpiritOrbs :orbs="spiritOrbs"/>
          </div>

          <div class="statistic shrines">
            <Shrines :shrines="shrines"/>
          </div>

          <div class="statistic koroks">
            <Koroks :koroks="koroks"/>
          </div>

          <div class="statistic rupees">
            <Rupees :rupees="rupees"/>
          </div>

          <div class="divine-beasts">
            <DivineBeast beast="Medoh" v-if="divineBeasts.vahMedoh"/>
            <DivineBeast beast="Naboris" v-if="divineBeasts.vahNaboris"/>
            <DivineBeast beast="Rudania" v-if="divineBeasts.vahRudania"/>
            <DivineBeast beast="Ruta" v-if="divineBeasts.vahRuta"/>
          </div>

        </div>
      </div>
    </div>

    <div class="load-section-bottom">
      <div class="content-bottom">

        <div class="description-loading">
          <p>{{currentTip.tip}}</p>
        </div>

        <div class="next-tip" @click="buttonIsPressed">
          <span>Next tip <img src="./assets/images/buttons/a_btn.png" alt="" class="a-button"></span>
        </div>

        <div class="triforce-loader">
          <TriforceLoader/>
        </div>

        <div class="logo-loading">
          <div class="logo-loading-block">
            <div class="logo-split"></div>
          </div>
          <img src="./assets/images/logos/logo_overlay.png" alt="Breath of the Wild overlay logo" class="overlay-loading">
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Hearts from './components/Hearts'
import DivineBeast from './components/DivineBeast'
import Koroks from './components/Statistics/Koroks'
import Rupees from './components/Statistics/Rupees'
import StaminaWheel from './components/StaminaWheel'
import Shrines from './components/Statistics/Shrines'
import TriforceLoader from './components/TriforceLoader'
import SpiritOrbs from './components/Statistics/SpiritOrbs'

export default {

  name: 'App',

  components: {
    DivineBeast, TriforceLoader, Rupees, Koroks,
    Shrines, SpiritOrbs, StaminaWheel, Hearts
  },

  data() {
    return {
      hearts: 27,
      staminaWheels: 3,
      spiritOrbs: 0,
      shrines: 120,
      koroks: 900,
      rupees: '100.000',
      divineBeasts: {
        vahMedoh: true,
        vahNaboris: true,
        vahRudania: true,
        vahRuta: true,
      },
      currentTip: {
        title: '',
        tip: ''
      },
      tips: require('./assets/json/tips.json'),
      tipInterval: ''
    }
  },

  mounted() {
    this.changeTip();
    this.introAnimations();
    let vm = this;

    this.tipInterval = setInterval(() => { this.buttonIsPressed(); }, 10000);

    $(document).keypress(function (e) {
      switch (e.which) {
        case 65:
        case 13:
        case 97:
          vm.buttonIsPressed();
          break;
      }
    });
  },

  methods: {
    introAnimations() {
      $('.load-section-top').animate({ width: '105%' }, { duration: 550, easing: 'linear' }).queue(function (next) {
        $(this).css('width', '100%');
        next();
      });
      $('.wipe-top').animate({ left: '-150px' }, { duration: 500, easing: 'linear' });
      $('.description-loading').delay(500).animate({ opacity: 1, left: '48px' }, { duration: 500, easing: 'linear' });
      $('.loading-title').delay(600).animate({ opacity: 1, left: '48px' }, { duration: 500, easing: 'linear' });
      $('.logo-loading').delay(750).animate({ opacity: 1 }, { duration: 500, easing: 'linear' });
      $('.statistics').delay(1500).animate({ opacity: 1 }, { duration: 500, easing: 'linear' });
      $('.divine-beasts').delay(1500).animate({ opacity: 1 }, { duration: 500, easing: 'linear' });
      $('.next-tip').delay(4000).animate({ opacity: 1 }, { duration: 500, easing: 'linear' });
      $('.logo-split').delay(5000).animate({ width: '100%' }, { duration: 10000, easing: 'linear' });
    },
    changeTip() {
      let tipIndex = Math.floor(Math.random() * this.tips.length);
      this.currentTip.title = this.tips[tipIndex].title;
      this.currentTip.tip = this.tips[tipIndex].tip;
    },
    buttonIsPressed() {
      if($('.next-tip').css('opacity') === '1') {

        $('.next-tip').animate({ opacity: 0 }, { duration: 500, easing: 'linear' });
        $('.description-loading').animate({ opacity: 0, left: '56px' }, { duration: 500, easing: 'linear' })
            .queue(function (next) {
              $(this).css('left', '40px');
              next();
        });
        $('.loading-title').animate({ opacity: 0, left: '56px' }, { duration: 500, easing: 'linear' })
            .queue(function (next) {
              $(this).css('left', '40px');
              next();
        });

        setTimeout(() => {
          this.changeTip();
        }, 500);

        $('.description-loading').animate({ opacity: 1, left: '48px' }, { duration: 500, easing: 'linear' });
        $('.loading-title').animate({ opacity: 1, left: '48px' }, { duration: 500, easing: 'linear' });
        $('.next-tip').delay(2000).animate({ opacity: 1 }, { duration: 500, easing: 'linear' });
      }
    }
  }
}
</script>
