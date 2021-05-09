<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-system-bar color="#fffaf0" app height="50vh" style="opacity: 0.95;">
        <p>scrollY = {{ scrollY }} </p>
        <nuxt-link class="link leftmost-link" v-scroll-to="'#title'" to style="color: #099e9e;">Top</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#profile'" to style="color: #099e9e;">Profile</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#works'" to style="color: #099e9e;">Works</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#skills'" to style="color: #099e9e;">Skills</nuxt-link>
        <nuxt-link class="link rightmost-link" v-scroll-to="'#history'" to style="color: #099e9e;">History</nuxt-link>
      </v-system-bar>


      <!-- タイトル -->
      <div class="title fixed-background-img" id="title">
        <!--img class="code-img" src="code5.jpg" alt=""-->
        <vue-typer class="typing" text="Terai Shogo's Portfolio" :repeat="0" :pre-type-delay="100" :type-delay="80"></vue-typer>

        <div class="sns-links">
          <a href="https://twitter.com/krpk1900_dev" target="_blank">
            <img class="sns-img" src="/twitter.png" width="4%">
          </a>
          <a href="https://qiita.com/krpk1900" target="_blank">
            <img class="sns-img" src="/qiita.png" width="4%">
          </a>
          <a href="https://github.com/krpk1900" target="_blank">
            <img class="sns-img" src="/github.png" width="4%">
          </a>
          <a href="https://note.com/krpk1900" target="_blank">
            <img class="sns-img" src="/note.png" width="4%">
          </a>
          <a href="https://www.wantedly.com/id/krpk1900" target="_blank">
            <img class="sns-img" src="/wantedly.png" width="4%">
          </a>
          <a href="https://www.facebook.com/krpk1900" target="_blank">
            <img class="sns-img" src="/facebook.png" width="4%">
          </a>
          <a href="https://connpass.com/user/krpk1900/" target="_blank">
            <img class="sns-img" src="/connpass.png" width="4%">
          </a>

        </div>

      </div>

      <!-- Profile -->
      <div class="profile" id="profile">
        <h2 class="div-title">Profile</h2>
        <img v-if="isFadeInUpProfile1" src="/zoomup.jpg" class="animate__animated profile-img" :class="{animate__fadeInUp: isFadeInUpProfile1}" width="300px" height="300px">
        <div v-else style="padding: 10em;"></div>
        <p v-if="isFadeInUpProfile1" class="animate__animated text-center name" :class="{animate__fadeInUp: isFadeInUpProfile1}">Terai Shogo</p>
        <div v-else style="padding: 10em;"></div>

        <v-card v-if="isFadeInUpProfile2" class="animate__animated profile-card" :class="{animate__fadeInUp: isFadeInUpProfile2}" elevation="4" width="35%" rounded>
          <v-card-text class="text-body-1" style="padding-left: 7%;">
            1995年生まれ富山県出身。<br>
            大阪大学で情報科学を学んだ後、公立中学校で教諭となる。<br>
            現在はWeb開発を学習中。<br>
            趣味はバドミントン・サッカー・将棋・料理など。
          </v-card-text>
        </v-card>
        <div v-else style="padding: 5em;"></div>
      </div>

      <!-- Works -->
      <div class="works" id="works">
        <h2 class="div-title">Works</h2>
        <div class="works-item">
          <a href="https://sekigae.jp/" target="_blank">
            <img class="sekigaemaker-img" src="/sekigae2.png" width="30%">
          </a>
          <a href="https://sekigae.jp/" target="_blank">
            <div class="text-center sekigaemaker-title">席替えメーカー</div>
          </a>
          <!--div class="text-center sekigaemaker-description">
            生徒名と条件を入力するだけで座席の配置案を瞬時に出してくれるサービス。
            ユーザー数は7,000人を突破。
          </div-->

          <!--v-card class="works-card" width="31%">
            <v-card-title>席替えメーカー</v-card-title>
            <v-card-text>生徒名と条件を入力するだけで、座席の配置案を瞬時に出してくれるサービス。ユーザー数は7,000人超。</v-card-text>
          </v-card-->
        </div>
      </div>

      <!-- Skills -->
      <div class="skills" id="skills">
        <h2 class="div-title">Skills</h2>
        <v-card v-if="isFadeInUpSkills1" class="animate__animated skills-card" :class="{animate__fadeInUp: isFadeInUpSkills1}" width="50%" elevation="4" rounded>
          <v-card-title class="skills-card-title justify-center">今後学習したい</v-card-title>
          <div class="skills-item">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/TypeScript.png" alt="TypeScript" width="9%" style="margin: 0 1%;">
              </template>
              <span>TypeScript</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/React.png" alt="React" width="9%" style="margin: 0 1%;">
              </template>
              <span>React</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/nextjs.png" alt="Next.js" width="11%" style="margin: 0.5%; 1% 0 1%">
              </template>
              <span>Next.js</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/sql.png" alt="SQL" width="9%" style="margin: 0 1%;">
              </template>
              <span>SQL</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/aws.png" alt="AWS" width="12%" style="margin: 1% 1% 0 1%;">
              </template>
              <span>AWS</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/webpack.png" alt="webpack" width="9%" style="margin: 0 1%;">
              </template>
              <span>webpack</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/nodejs.png" alt="Node.js" width="11%" style="margin: 1% 1% 0 1%;">
              </template>
              <span>Node.js</span>
            </v-tooltip>
            <!--v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/docker.png" alt="docker" width="9%">
              </template>
              <span>docker</span>
            </v-tooltip-->
          </div>
        </v-card>
        <div v-else style="padding: 5em;"></div>

        <v-card v-if="isFadeInUpSkills2" class="animate__animated skills-card" :class="{animate__fadeInUp: isFadeInUpSkills2}" width="50%" elevation="4" rounded>
          <v-card-title class="skills-card-title justify-center">最近よく使う</v-card-title>
          <div class="skills-item">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/ruby.png" alt="Ruby" width="9%" style="margin: 0 1%;">
              </template>
              <span>Ruby</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/rails.png" alt="Ruby on Rails" width="9%" style="margin: 0 2%;">
              </template>
              <span>Ruby on Rails</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/javascript.svg" alt="JavaScript" width="8%" style="margin: 0 2%;">
              </template>
              <span>JavaScript</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/vue.png" alt="Vue.js" width="9%" style="margin: 0 1%;">
              </template>
              <span>Vue.js</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/nuxtjs.svg" alt="Nuxt.js" width="11%" style="margin: 0 1% 0 1%;">
              </template>
              <span>Nuxt.js</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/html.png" alt="HTML" width="9%" style="margin: 0 2%;">
              </template>
              <span>HTML</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="recent-skill-img" src="/css.png" alt="CSS" width="8%" style="margin: 0 5% 0 1%;">
              </template>
              <span>CSS</span>
            </v-tooltip>
          </div>
        </v-card>
        <div v-else style="padding: 5em;"></div>

        <v-card v-if="isFadeInUpSkills3" class="animate__animated skills-card" :class="{animate__fadeInUp: isFadeInUpSkills3}" width="50%" elevation="4" rounded>
          <v-card-title class="skills-card-title justify-center">過去使っていた</v-card-title>
          <div class="skills-item">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/python.png" alt="Python" width="9.5%" style="margin: 0 1%;">
              </template>
              <span>Python</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/java.png" alt="Java" width="9%" style="margin: 0 1%;">
              </template>
              <span>Java</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <img v-bind="attrs" v-on="on" class="skill-img" src="/c.png" alt="C言語" width="10%" style="margin: 0 2% 0 1%">
              </template>
              <span>C言語</span>
            </v-tooltip>
          </div>
        </v-card>
        <div v-else style="padding: 5em;"></div>
      </div>

      <!-- History -->
      <div class="history" id="history">
        <h2 class="div-title">History</h2>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">

          <v-timeline-item :color="'red lighten-2'" :icon="'mdi-school'" fill-dot>
            <v-card :color="'red lighten-2'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUp4}">
              <v-card-title class="card-title">RUNTEQでWeb開発を学習</v-card-title>
              <v-card-text class="white text--primary">
                <p>Web開発を学習する。</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'purple darken-1'" :icon="'mdi-city'" fill-dot>
            <v-card :color="'purple darken-1'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUp4}">
              <v-card-title class="card-title">席替えメーカーを個人開発</v-card-title>
              <v-card-text class="white text--primary">
                <p>あああ</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'red lighten-2'" :icon="'mdi-school'" fill-dot>
            <v-card :color="'red lighten-2'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUp4}">
              <v-card-title class="card-title">RUNTEQでWeb開発を学習</v-card-title>
              <v-card-text class="white text--primary">
                <p>Web開発を学習する。</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'purple darken-1'" :icon="'mdi-city'" fill-dot>
            <v-card :color="'purple darken-1'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUp4}">
              <v-card-title class="card-title">公立中学校教諭に赴任</v-card-title>
              <v-card-text class="white text--primary">
                <p>あああ</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'green lighten-1'" :icon="'mdi-account'" fill-dot>
            <template v-slot:opposite>
              <div>aaa</div>
            </template>
            <v-card :color="'green lighten-1'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUp4}">
              <v-card-title class="card-title">富山県で生まれる</v-card-title>
              <v-card-text class="white text--primary">
                <p>Web開発を学習する。</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'purple darken-1'" :icon="'mdi-city'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite">aaa</div>
            </template>
            <v-card :color="'purple darken-1'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUp4}">
              <v-card-title class="card-title">席替えメーカーを個人開発</v-card-title>
              <v-card-text class="white text--primary">
                <p>あああ</p>
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
    --animate-duration: 1000ms;
  }
  h2 {
    font-size: 4em;
    text-align: center;
  }
  a {
    text-decoration: none;
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
    color: #099e9e;
    /*background-color: red; デバッグ用*/
    padding: 0.75%;
    transition: all  0.3s ease;
  }
  .link:hover {
    background-color: #e2d8d8;
  }
  .leftmost-link {
    margin-left: auto;
  }
  .rightmost-link {
    margin-right: 1em;
  }
  .code-img {
    width: 100%;
    height: 100vh;
  }
  .title {
    position: relative;
    height: 90vh;
  }
  .vue-typer .custom.char {
    color:  #71e9e9; /*#6cd0ff*/;
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
  .sns-links {
    text-align: center;
  }
  .sns-img {
    /*position: absolute;*/
    margin: 41% 2px 0 2px;
    border-radius: 10px;
    transition-duration: 0.2s;
  }
  .sns-img:hover {
    transform: scale(1.1,1.1);
    transition-duration: 0.2s;
  }
  .profile {
    height: 95vh;
    background-color: #eaeaf3fb;
  }
  .name {
    font-size: 3em;
    font-weight: 600;
    color: #696464;
  }
  .profile-img {
    border-radius: 50%;
    border: 9px solid #1d7777;
    display: block;
    margin: 1% auto 0.5% auto;
  }
  .profile-card {
    display: block;
    margin: 1% auto;
  }
  .works {
    height: 85vh;
    background-color: #f8f8ff;
  }
  .works-item {
    /*display: inline-block;*/
    /*margin:0 auto;*/
    text-align: center;
  }
  .works-card {
    display: block;
    margin: 1% auto;
  }
  .sekigaemaker-img {
    border-radius: 20px;
    transition-duration: 0.2s;
  }
  .sekigaemaker-img:hover {
    transform: scale(1.03,1.03);
    transition-duration: 0.2s;
  }
  .sekigaemaker-title {
    font-size: 1.7em;
    font-weight: 600;
    color: #696464;
    margin-top: 1%;
  }
  .sekigaemaker-description {
    font-size: 1em;
    font-weight: 550;
    color: #696464;
    margin: 0% auto;
    width: 30%;

  }
  .skills {
    height: 90vh;
    background-color: #eaeaf3fb;
  }
  /*.skill-img {
    margin: 0 1%;
  }
  .recent-skill-img {
    margin: 0 1.5%;
  }*/
  .skills-card {
    display: block;
    margin: 1% auto;
    padding-bottom: 1%;
  }
  .skills-card-title {
    font-size: 1.7em;
    font-weight: 550;
    color: #696464;
  }
  .skills-item {
    text-align: center;
    /*display: inline-block;*/
    /*margin:0 auto;*/
  }
  .history {
    height: 100vh;
    background-color: #f8f8ff;
  }
  .opposite {
    position: absolute;
    bottom: 12%;
  }
  .div-title {
    padding: 1% 0 0 0 ;
    color: #23bdbd;
    font-weight: 700;
    font-size: 5em;
  }
  .else-padding {
    padding: 4.1em;
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
      isFadeInUpProfile1: false,
      isFadeInUpProfile2: false,
      isFadeInUpSkills1 : false,
      isFadeInUpSkills2 : false,
      isFadeInUpSkills3 : false,

      isFadeInUp1: false,
      isFadeInUp2: false,
      isFadeInUp3: false,
      isFadeInUp4: false,
      scrollY: 0,
      innnerHeight: 0,
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
        this.isFadeInUpProfile1 = window.scrollY > 140;
        this.isFadeInUpProfile2 = window.scrollY > 520;
        this.isFadeInUpWorks1 = window.scrollY > 840;
        this.isFadeInUpSkills1 = window.scrollY > 1480;
        this.isFadeInUpSkills2 = window.scrollY > 1650;
        this.isFadeInUpSkills3 = window.scrollY > 1800;

        this.isFadeInUp1 = window.scrollY > 80;
        this.isFadeInUp2 = window.scrollY > window.innerHeight + 80;
        this.isFadeInUp3 = window.scrollY > window.innerHeight*2 + 80;
        this.isFadeInUp4 = window.scrollY > 3200;
      },
    },
  }
</script>
