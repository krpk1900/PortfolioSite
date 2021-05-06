<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-system-bar color="#fffaf0" app height="50vh">
        <p>scrollY = {{ scrollY }} </p>
        <nuxt-link class="link leftmost-link" v-scroll-to="'#title'" to>Top</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#profile'" to>Profile</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#works'" to>Works</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#skills'" to>Skills</nuxt-link>
        <nuxt-link class="link rightmost-link" v-scroll-to="'#history'" to>History</nuxt-link>
      </v-system-bar>



      <div class="title fixed-background-img" id="title">
        <!--img class="code-img" src="code5.jpg" alt=""-->
        <vue-typer class="typing" text="Terai Shogo's Portfolio" :repeat="0" :pre-type-delay="100" :type-delay="80"></vue-typer>
      </div>

      <div class="profile" id="profile">
        <h2 v-if="isFadeInUp1" class="animate__animated div-title" :class="{animate__fadeInUp: isFadeInUp1}">Profile</h2>
        <div v-else class="else-margin"></div>
        <img src="/zoomup.jpg" class="profile-img" width="300px" height="300px">
        <v-card class="profile-card" elevation="4" width="40%" rounded>
          <v-card-text class="text-body-1" style="padding-left: 13%;">
            1995年生まれ富山県出身。<br>
            大阪大学で情報科学を学んだ後、公立中学校で教諭となる。<br>
            現在はWeb開発を学習中。<br>
            趣味はバドミントン・サッカー・将棋・料理など。
          </v-card-text>
        </v-card>
      </div>

      <div class="works fixed-background-img" id="works">
        <h2 v-show="isFadeInUp2" class="animate__animated div-title" :class="{animate__fadeInUp: isFadeInUp2}">Works</h2>
      </div>

      <div class="skills" id="skills">
        <h2 v-show="isFadeInUp3" class="animate__animated div-title" :class="{animate__fadeInUp: isFadeInUp3}">Skills</h2>
      </div>

      <div class="history" id="history">
        <h2 v-show="isFadeInUp4" class="animate__animated div-title" :class="{animate__fadeInUp: isFadeInUp4}">History</h2>

        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
            <v-card :color="item.color" dark :class="[{right: i%2==0}, {left: i%2==1}, {animate__fadeInUp: isFadeInUp4}]" class="animate__animated">
              <v-card-title class="card-title">Lorem Ipsum Dolor</v-card-title>
              <v-card-text class="white text--primary">
                <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>

    </v-col>
  </v-row>
</template>

<style>
  :root {
    --animate-duration: 2000ms;
  }
  h2 {
    font-size: 4em;
    text-align: center;
  }
  .code-img {
    width: 100%;
    height: 100vh;
  }
  .title {
    position: relative;
  }
  .vue-typer .custom.char {
    color: #6cd0ff;
    font-weight: 700;
    font-size: 1.1em;
  }
  .vue-typer .custom.caret {
    width: 0px;
  }
  .title .typing {
    position: absolute;
    font-size: 4em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  img {
    vertical-align:top;
  }
  .title {
    height: 90vh;
  }
  .profile {
    height: 90vh;
    background-color: #f8f8ff;
  }
  .works {
    height: 100vh;
  }
  .skills {
    height: 100vh;
    background-color: #a1d4c9;
  }
  .history {
    height: 100vh;
    background-color: #75c9b7;
  }
  .div-title {
    padding: 1% 0 0 0 ;
    color: #6cd0ff;
    font-weight: 700;
    font-size: 5em;
  }
  .else-margin {
    margin: 10%;
  }
  .right {
    margin-right: 10em;
  }
  .left {
    margin-left: 10em;
  }
  .link {
    font-size: 1.4em;
    text-decoration: none;
    margin-left: 1em;
  }
  .leftmost-link {
    margin-left: auto;
  }
  .rightmost-link {
    margin-right: 1em;
  }
  .profile-img {
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    border: 9px solid #a9a9a9; /* 枠線を付加 */
    display: block;
    margin: 2% auto;
  }
  .profile-card {
    display: block;
    margin: 2% auto;
  }
  .fixed-background-img {
    background-image: url("/code5.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
</style>

<script>
export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
      isCreated: false,
      isFadeInUp1: false,
      isFadeInUp2: false,
      isFadeInUp3: false,
      isFadeInUp4: false,
      scrollY: 0,
    }),
    created() {
      if (process.browser) {
        window.addEventListener("scroll", this.handleScroll);
      }
      this.isCreated = true;
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    methods: {
      handleScroll() {
        this.innnerHeight = window.innerHeight;
        this.scrollY = window.scrollY;
        this.isFadeInUp1 = window.scrollY > 80;
        this.isFadeInUp2 = window.scrollY > window.innerHeight + 80;
        this.isFadeInUp3 = window.scrollY > window.innerHeight*2 + 80;
        this.isFadeInUp4 = window.scrollY > window.innerHeight*3 + 80;
      },
    },
  }
</script>
