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
          <div v-if="isFadeInUpWorks1" class="animate__animated" :class="{animate__fadeInUp: isFadeInUpWorks1}">
            <a href="https://sekigae.jp/" target="_blank">
              <img class="sekigaemaker-img" src="/sekigae2.png" width="30%">
            </a>
          </div>
          <div v-else style="margin: 30%;"></div>
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
          <v-timeline-item :color="'orange lighten-1'" :icon="' mdi-baby-face'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite orange--text" style="margin-bottom: 14%;">1995.9</div>
            </template>
            <v-card v-if="isFadeInUpHistory1" :color="'orange lighten-1'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUpHistory1}">
              <v-card-title class="history-card-title">富山県で生まれる</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">自然豊かな場所で生まれました。</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'blue lighten-2'" :icon="'mdi-school'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite blue--text" style="margin-bottom: 17%;">2008.4</div>
            </template>
            <v-card v-if="isFadeInUpHistory2" :color="'blue lighten-2'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUpHistory2}">
              <v-card-title class="history-card-title">中学校に入学</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">自分の生きる姿勢を通して、心に一生残り続けるような<b>良い影響を人に与えたい</b>と考えて、教師を目指すようになりました。</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'pink lighten-2'" :icon="'mdi-school'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite pink--text" style="margin-bottom: 23%;">2011.4</div>
            </template>
            <v-card v-if="isFadeInUpHistory3" :color="'pink lighten-2'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUpHistory3}">
              <v-card-title class="history-card-title">富山東高等学校に入学</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">
                  これまで関心があった教育に加えて、<b>学習</b>に対しても興味を持つようになりました。
                  人が何かを学習するとは一体どのような仕組みなのか、学習の効率を最大化するためにはどのような方法があるのかなどを探求していました。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'green lighten-1'" :icon="'mdi-lightbulb-on'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite green--text" style="margin-bottom: 39%;">2015.3</div>
            </template>
            <v-card v-if="isFadeInUpHistory4" :color="'green lighten-1'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUpHistory4}">
              <v-card-title class="history-card-title">将棋がきっかけで人工知能に関心を持つ</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">
                  将棋でコンピュータがプロ棋士を超え始めたことを知り、<b>コンピュータが自らで学習</b>していることに衝撃を受けました。
                  そもそもコンピュータが学習するとは一体どういうことなのか、コンピュータはどのような仕組みで学習しているのかなどを詳しく学びたいと思うようになりました。<br><br>
                  また、コンピュータの学習を学ぶことで、将来教師になったときに<b>人の学習に活かせる</b>ことがあるのではないかと考えていました。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'indigo darken-1'" :icon="'mdi-school'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite indigo--text" style="margin-bottom: 33%;">2016.4</div>
            </template>
            <v-card v-if="isFadeInUpHistory5" :color="'indigo darken-1'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUpHistory5}">
              <v-card-title class="history-card-title">大阪大学に入学</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">
                  情報科学を学んだ後、教育工学分野における研究を行いました。
                  機械学習を用いて学習者の状態推定を行い、<b>コンピュータの学習によって人間の学習を支援する</b>手法を研究していました。<br><br>
                  また、夜間に履修していた教職課程を通して、同年代とは考えられないようなビジョンを持つ多くの人たちと出会うことができました。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'purple darken-1'" :icon="'mdi-city'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite purple--text" style="margin-bottom: 33%;">2020.4</div>
            </template>
            <v-card v-if="isFadeInUpHistory6" :color="'purple darken-1'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUpHistory6}">
              <v-card-title class="history-card-title">公立中学校教諭に赴任</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">
                  心から尊敬できる教師の方々に囲まれながら働くことができました。
                  しかし、そんな素敵な人たちが様々なものを犠牲にしている現実を知り、<b>「この人たちは絶対にこんなに苦しむべき人ではない」</b>と強く感じました。<br><br>
                  既存の仕組みを改善することや、新たな仕組みを作ることによって課題を解決したいと考えるようになりました。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'deep-orange lighten-1'" :icon="'mdi-code-tags'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite deep-orange--text" style="margin-bottom: 23%;">2020.9</div>
            </template>
            <v-card v-if="isFadeInUpHistory7" :color="'deep-orange lighten-1'" dark class="animate__animated right" :class="{animate__fadeInRight: isFadeInUpHistory7}">
              <v-card-title class="history-card-title">Web開発の学習を始める</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">
                  サービスを開発して多くの人に届けることによって、<b>自分が直接出会うことができないような規模の人たちにも価値を提供できる点</b>に魅力を感じ、
                  これまで学んだ経験がなかった分野であるWeb開発を学習し始めました。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item :color="'cyan darken-1'" :icon="'mdi-lightbulb-on'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite cyan--text" style="margin-bottom: 23%;">2021.3</div>
            </template>
            <v-card v-if="isFadeInUpHistory8" :color="'cyan darken-1'" dark class="animate__animated left" :class="{animate__fadeInLeft: isFadeInUpHistory8}">
              <v-card-title class="history-card-title">席替えメーカーを個人開発</v-card-title>
              <v-card-text class="white text--primary history-card-text">
                <p style="padding-top: 3%;">
                  <b>業務を改善することで教師の方の力になりたい</b>と考え、席替えサービスを個人開発しました。
                  ユーザー数は8,000人を超え、実際に現場で働いておられる数多くの教員の方にも使っていただいています。
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

        </v-timeline>
      </div>
      <v-footer color="#fffaf0" height="50vh">
        <div class="footer-item">© 2021 Terai Shogo</div>
      </v-footer>
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
    padding: 1.2vh;/*0.75%;*/
    transition: all  0.3s ease;
  }
  .link:hover {
    background-color: #e2d8d8;
  }
  .leftmost-link {
    margin-left: auto;
  }
  .rightmost-link {
    margin-right: 3%;
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
    margin: 78vh 2px 0 2px;
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
    height: 275vh;
    background-color: #f8f8ff;
  }
  .opposite {
    /*position: absolute;*/
    /*bottom: 12%;*/
    /*margin-bottom: 15%;*/
    font-size: 1.5em;
    font-weight: 550;
  }
  .history-card-title {
    font-size: 1.5em;
    font-weight: 550;
    margin-left: 2%;
  }
  .history-card-text {
    font-size: 1em;
    font-weight: 500;
    padding-left: 4%;
  }
  .footer-item {
    margin: 0 5% 0 auto;
    color: #099e9e;
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
  .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4,
  .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7,
  .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10,
  .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto,
  .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2,
  .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {
    padding: 0; /* footerの下の余白を消すため */
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
      isFadeInUpWorks1: false,
      isFadeInUpSkills1 : false,
      isFadeInUpSkills2 : false,
      isFadeInUpSkills3 : false,
      isFadeInUpHistory1: false,
      isFadeInUpHistory2: false,
      isFadeInUpHistory3: false,
      isFadeInUpHistory4: false,
      isFadeInUpHistory5: false,
      isFadeInUpHistory6: false,
      isFadeInUpHistory7: false,
      isFadeInUpHistory8: false,

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
        if(!this.isFadeInUpProfile1) {
          this.isFadeInUpProfile1 = window.scrollY > 140;
        }
        if(!this.isFadeInUpProfile2) {
          this.isFadeInUpProfile2 = window.scrollY > 520;
        }
        if(!this.isFadeInUpWorks1) {
          this.isFadeInUpWorks1 = window.scrollY > 840;
        }
        if(!this.isFadeInUpSkills1) {
          this.isFadeInUpSkills1 = window.scrollY > 1480;
        }
        if(!this.isFadeInUpSkills2) {
          this.isFadeInUpSkills2 = window.scrollY > 1650;
        }
        if(!this.isFadeInUpSkills3) {
          this.isFadeInUpSkills3 = window.scrollY > 1800;
        }
        if(!this.isFadeInUpHistory1) {
          this.isFadeInUpHistory1 = window.scrollY > 2170;
        }
        if(!this.isFadeInUpHistory2) {
          this.isFadeInUpHistory2 = window.scrollY > 2300;
        }
        if(!this.isFadeInUpHistory3) {
          this.isFadeInUpHistory3 = window.scrollY > 2520;
        }
        if(!this.isFadeInUpHistory4) {
          this.isFadeInUpHistory4 = window.scrollY > 2730;
        }
        if(!this.isFadeInUpHistory5) {
          this.isFadeInUpHistory5 = window.scrollY > 3070;
        }
        if(!this.isFadeInUpHistory6) {
          this.isFadeInUpHistory6 = window.scrollY > 3350;
        }
        if(!this.isFadeInUpHistory7) {
          this.isFadeInUpHistory7 = window.scrollY > 3630;
        }
        if(!this.isFadeInUpHistory8) {
          this.isFadeInUpHistory8 = window.scrollY > 3850;
        }


      },
    },
  }
</script>
