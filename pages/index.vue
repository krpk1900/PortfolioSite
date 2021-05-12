<template>
  <v-container fluid style="padding: 0;">
  <!--v-row justify="center" align="center"-->
    <!--v-col cols="12"-->
    <v-row justify="center" align="center">
      <v-system-bar color="#fffaf0" app height="50vh" style="opacity: 0.95;">
        <nuxt-link class="link leftmost-link" v-scroll-to="'#title'" to style="color: #099e9e;">Top</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#profile'" to style="color: #099e9e;">Profile</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#works'" to style="color: #099e9e;">Works</nuxt-link>
        <nuxt-link class="link" v-scroll-to="'#skills'" to style="color: #099e9e;">Skills</nuxt-link>
        <nuxt-link class="link rightmost-link" v-scroll-to="'#history'" to style="color: #099e9e;">History</nuxt-link>
      </v-system-bar>
    </v-row>

      <!-- タイトル -->
      <div class="title fixed-background-img" id="title">
        <!--img class="code-img" src="code5.jpg" alt=""-->
        <vue-typer class="typing" text="Terai Shogo's Portfolio" :repeat="0" :pre-type-delay="100" :type-delay="80"></vue-typer>
        <!--vue-typer class="typing" :text="typingWords" :repeat="0" :pre-type-delay="100" :type-delay="80"></vue-typer-->

        <div class="sns-links">
          <a href="https://twitter.com/krpk1900_dev" target="_blank">
            <img class="sns-img" src="/twitter.png">
          </a>
          <a href="https://qiita.com/krpk1900" target="_blank">
            <img class="sns-img" src="/qiita.png" width="55px">
          </a>
          <a href="https://github.com/krpk1900" target="_blank">
            <img class="sns-img" src="/github.png" width="55px">
          </a>
          <a href="https://note.com/krpk1900" target="_blank">
            <img class="sns-img" src="/note.png" width="55px">
          </a>
          <a href="https://www.wantedly.com/id/krpk1900" target="_blank">
            <img class="sns-img" src="/wantedly.png" width="55px">
          </a>
          <a href="https://www.facebook.com/krpk1900" target="_blank">
            <img class="sns-img" src="/facebook.png" width="55px">
          </a>
          <a href="https://connpass.com/user/krpk1900/" target="_blank">
            <img class="sns-img" src="/connpass.png" width="55px">
          </a>

        </div>

      </div>

      <!-- Profile -->
      <div class="profile" id="profile">
        <h2 class="div-title">Profile</h2>
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="4">
            <img v-if="isFadeInUpProfile1" src="/zoomup.jpg" class="animate__animated profile-img" :class="{animate__fadeInUp: isFadeInUpProfile1}">
            <div v-else style="padding: 10em;"></div>
            <p v-if="isFadeInUpProfile1" class="animate__animated text-center name" :class="{animate__fadeInUp: isFadeInUpProfile1}">Terai Shogo</p>
            <div v-else style="padding: 10em;"></div>
          </v-col>
        </v-row>


        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="7" lg="5" xl="4" style="padding: 0;">
            <v-card v-if="isFadeInUpProfile2" class="animate__animated profile-card" :class="{animate__fadeInUp: isFadeInUpProfile2}" elevation="4" width="85%" rounded>
              <v-card-text class="text-body-1" style="padding-left: 7%;">
                1995年生まれ富山県出身。<br>
                大阪大学で情報科学を学んだ後、公立中学校で教諭となる。<br>
                現在はWeb開発を学習中。<br>
                趣味はバドミントン・サッカー・将棋・料理など。
              </v-card-text>
            </v-card>
            <div v-else style="padding: 5em;"></div>
          </v-col>
        </v-row>
      </div>

      <!-- Works -->
      <div class="works" id="works">
        <h2 class="div-title">Works</h2>
        <div class="works-item">
          <div v-if="isFadeInUpWorks1" class="animate__animated" :class="{animate__fadeInUp: isFadeInUpWorks1}">
            <a href="https://sekigae.jp/" target="_blank">
              <img class="sekigaemaker-img" src="/sekigae2.png">
            </a>
          </div>
          <div v-else style="margin: 300px;"></div>
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

        <v-row justify="center" align="center">
          <v-col cols="12" xs="3" sm="12" md="8" lg="6" xl="6" style="padding: 0;">
            <v-card v-if="isFadeInUpSkills1" class="animate__animated skills-card" :class="{animate__fadeInUp: isFadeInUpSkills1}" elevation="4" width="85%" rounded>
              <v-card-title class="skills-card-title justify-center" style="font-size: 1.7em; font-weight: 550;">今後学習したい</v-card-title>
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
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="8" lg="6" xl="6" style="padding: 0;">
            <v-card v-if="isFadeInUpSkills2" class="animate__animated skills-card" :class="{animate__fadeInUp: isFadeInUpSkills2}" elevation="4" width="85%" rounded>
              <v-card-title class="skills-card-title justify-center" style="font-size: 1.7em; font-weight: 550;">最近よく使う</v-card-title>
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
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="8" lg="6" xl="6" style="padding: 0;">
            <v-card v-if="isFadeInUpSkills3" class="animate__animated skills-card" :class="{animate__fadeInUp: isFadeInUpSkills3}" elevation="4" width="85%" rounded>
              <v-card-title class="skills-card-title justify-center" style="font-size: 1.7em; font-weight: 550;">過去使っていた</v-card-title>
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
          </v-col>
        </v-row>
      </div>

      <!-- History -->
      <div class="history" id="history">
        <h2 class="div-title">History</h2>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item :color="'orange lighten-1'" :icon="' mdi-baby-face'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite orange--text" :class="[{history1lg: $vuetify.breakpoint.lgOnly}, {history1xl: $vuetify.breakpoint.xlOnly}]">
                1995.9
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory1" :color="'orange lighten-1'" dark class="animate__animated"
              :class="[{animate__fadeInRight: isFadeInRightHistory1}, {historyCardXs: $vuetify.breakpoint.xsOnly},
              {historyCardSm: $vuetify.breakpoint.smOnly}, {historyCardRightMd: $vuetify.breakpoint.mdOnly},
              {historyCardRightLg: $vuetify.breakpoint.lgOnly}, {historyCardRightXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">富山県で生まれる</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500; padding-left: 4%;">
                <p style="padding-top: 3%;">自然豊かな場所で生まれました。</p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'blue lighten-2'" :icon="'mdi-school'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite blue--text" :class="[{history2lg: $vuetify.breakpoint.lgOnly}, {history2xl: $vuetify.breakpoint.xlOnly}]">
                2008.4
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory2 || isFadeInLeftHistory2" :color="'blue lighten-2'" dark class="animate__animated"
              :class="[{animate__fadeInLeft: isFadeInLeftHistory2}, {animate__fadeInRight: isFadeInRightHistory2},
              {historyCardXs: $vuetify.breakpoint.xsOnly}, {historyCardSm: $vuetify.breakpoint.smOnly},
              {historyCardLeftMd: $vuetify.breakpoint.mdOnly}, {historyCardLeftLg: $vuetify.breakpoint.lgOnly},
              {historyCardLeftXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">中学校に入学</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">自分の生きる姿勢を通して、心に一生残り続けるような<b>良い影響を人に与えたい</b>と考えて、教師を目指すようになりました。</p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'pink lighten-2'" :icon="'mdi-school'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite pink--text" :class="[{history3lg: $vuetify.breakpoint.lgOnly}, {history3xl: $vuetify.breakpoint.xlOnly}]">
                2011.4
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory3" :color="'pink lighten-2'" dark class="animate__animated"
              :class="[{animate__fadeInRight: isFadeInRightHistory3}, {historyCardXs: $vuetify.breakpoint.xsOnly},
              {historyCardSm: $vuetify.breakpoint.smOnly}, {historyCardRightMd: $vuetify.breakpoint.mdOnly},
              {historyCardRightLg: $vuetify.breakpoint.lgOnly}, {historyCardRightXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">富山東高等学校に入学</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">
                  これまで関心があった教育に加えて、<b>学習</b>に対しても興味を持つようになりました。
                  人が何かを学習するとは一体どのような仕組みなのか、学習の効率を最大化するためにはどのような方法があるのかなどを探求していました。
                </p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'green lighten-1'" :icon="'mdi-lightbulb-on'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite green--text" :class="[{history4lg: $vuetify.breakpoint.lgOnly}, {history4xl: $vuetify.breakpoint.xlOnly}]">
                2015.3
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory4 || isFadeInLeftHistory4" :color="'green lighten-1'" dark class="animate__animated"
              :class="[{animate__fadeInLeft: isFadeInLeftHistory4}, {animate__fadeInRight: isFadeInRightHistory4},
              {historyCardXs: $vuetify.breakpoint.xsOnly}, {historyCardSm: $vuetify.breakpoint.smOnly},
              {historyCardLeftMd: $vuetify.breakpoint.mdOnly}, {historyCardLeftLg: $vuetify.breakpoint.lgOnly},
              {historyCardLeftXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">将棋がきっかけで人工知能に関心を持つ</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">
                  将棋でコンピュータがプロ棋士を超え始めたことを知り、<b>コンピュータが自らで学習</b>していることに衝撃を受けました。
                  そもそもコンピュータが学習するとは一体どういうことなのか、コンピュータはどのような仕組みで学習しているのかなどを詳しく学びたいと思うようになりました。<br><br>
                  また、コンピュータの学習を学ぶことで、将来教師になったときに<b>人の学習に活かせる</b>ことがあるのではないかと考えていました。
                </p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'indigo darken-1'" :icon="'mdi-school'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite indigo--text" :class="[{history5lg: $vuetify.breakpoint.lgOnly}, {history5xl: $vuetify.breakpoint.xlOnly}]">
                2016.4
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory5" :color="'indigo darken-1'" dark class="animate__animated"
              :class="[{animate__fadeInRight: isFadeInRightHistory5}, {historyCardXs: $vuetify.breakpoint.xsOnly},
              {historyCardSm: $vuetify.breakpoint.smOnly}, {historyCardRightMd: $vuetify.breakpoint.mdOnly},
              {historyCardRightLg: $vuetify.breakpoint.lgOnly}, {historyCardRightXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">大阪大学に入学</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">
                  情報科学を学んだ後、教育工学分野における研究を行っていました。
                  機械学習を用いて学習者の状態推定を行い、<b>コンピュータの学習によって人間の学習を支援する</b>手法を研究していました。<br><br>
                  また、情報科学と並行して履修していた教職課程を通して、同年代とは思えないようなビジョンを持った素敵な人たちと出会うことができました。
                </p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'purple darken-1'" :icon="'mdi-city'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite purple--text" :class="[{history6lg: $vuetify.breakpoint.lgOnly}, {history6xl: $vuetify.breakpoint.xlOnly}]">
                2020.4
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory6 || isFadeInLeftHistory6" :color="'purple darken-1'" dark class="animate__animated"
              :class="[{animate__fadeInLeft: isFadeInLeftHistory6}, {animate__fadeInRight: isFadeInRightHistory6},
              {historyCardXs: $vuetify.breakpoint.xsOnly}, {historyCardSm: $vuetify.breakpoint.smOnly},
              {historyCardLeftMd: $vuetify.breakpoint.mdOnly}, {historyCardLeftLg: $vuetify.breakpoint.lgOnly},
              {historyCardLeftXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">公立中学校教諭に赴任</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">
                  心から尊敬できる教師の方々に囲まれながら働くことができました。
                  しかし、そんな素敵な人たちが様々なものを犠牲にしている現実を知り、<b>「この人たちは絶対にこんなに苦しむべき人ではない」</b>と強く感じました。<br><br>
                  既存の仕組みを改善することや、新たな仕組みを作ることによって根本的な課題を解決したいと考えるようになりました。
                </p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'deep-orange lighten-1'" :icon="'mdi-code-tags'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite deep-orange--text" :class="[{history7lg: $vuetify.breakpoint.lgOnly}, {history7xl: $vuetify.breakpoint.xlOnly}]">
                2020.9
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory7" :color="'deep-orange lighten-1'" dark class="animate__animated"
            :class="[{animate__fadeInRight: isFadeInRightHistory7}, {historyCardXs: $vuetify.breakpoint.xsOnly},
              {historyCardSm: $vuetify.breakpoint.smOnly}, {historyCardRightMd: $vuetify.breakpoint.mdOnly},
              {historyCardRightLg: $vuetify.breakpoint.lgOnly}, {historyCardRightXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">Web開発の学習を始める</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">
                  サービスを開発して多くの人に届けることによって、<b>自分が直接出会うことができないような規模の人たちに価値を提供できる点</b>に魅力を感じ、
                  これまで学んだ経験がなかった分野であるWeb開発を学習し始めました。
                </p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

          <v-timeline-item :color="'cyan darken-1'" :icon="'mdi-lightbulb-on'" fill-dot>
            <template v-slot:opposite>
              <div class="opposite cyan--text" :class="[{history8lg: $vuetify.breakpoint.lgOnly}, {history8xl: $vuetify.breakpoint.xlOnly}]">
                2021.3
              </div>
            </template>
            <v-card v-if="isFadeInRightHistory8 || isFadeInLeftHistory8" :color="'cyan darken-1'" dark class="animate__animated"
              :class="[{animate__fadeInLeft: isFadeInLeftHistory8}, {animate__fadeInRight: isFadeInRightHistory8},
              {historyCardXs: $vuetify.breakpoint.xsOnly}, {historyCardSm: $vuetify.breakpoint.smOnly},
              {historyCardLeftMd: $vuetify.breakpoint.mdOnly}, {historyCardLeftLg: $vuetify.breakpoint.lgOnly},
              {historyCardLeftXl: $vuetify.breakpoint.xlOnly}]">
              <v-card-title class="history-card-title" style="font-size: 1.5em; font-weight: 550;">席替えメーカーを個人開発</v-card-title>
              <v-card-text class="white text--primary history-card-text" style="font-size: 1em; font-weight: 500;">
                <p style="padding-top: 3%;">
                  <b>業務を改善することで教師の方の力になりたい</b>と考え、学校現場に特化した席替えアプリを個人開発しました。
                  ユーザー数は8,000人を超え、実際に多くの教員の方に学校で使っていただいています。
                </p>
              </v-card-text>
            </v-card>
            <div v-else style="margin: 500px;"></div>
          </v-timeline-item>

        </v-timeline>
      </div>
      <v-footer color="#fffaf0" height="50vh">
        <div class="mostleft-footer-item">
          <!-- プライバシーポリシー -->
          <v-dialog v-model="privacyPolicy" width="850" scrollable>
            <template v-slot:activator="{ on, attrs }">
              <a v-bind="attrs" v-on="on">プライバシーポリシー</a>
            </template>
            <v-card>
              <v-card-title class="headline cyan lighten-3 font-weight-black" style="display: block;">プライバシーポリシー
                <v-icon style="float: right;" @click="privacyPolicy = false">mdi-close</v-icon>
              </v-card-title>
              <v-card-text style="margin-top: 20px;">
                当ホームページでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。<br>
                Googleアナリティクスはデータの収集のためにCookieを使用しています。<br>
                この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br>
                この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクスサービス利用規約</a>や
                <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Googleポリシーと規約</a>をご覧ください。
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div class="footer-item">
          <a href="https://twitter.com/krpk1900_dev" target="_blank">
            ©2021 TeraiShogo
          </a>
        </div>

      </v-footer>
    <!--/v-col-->
  <!--/v-row-->


  </v-container>
</template>

<style>
  [v-cloak]{
    display:none;
  }
  @media screen and (max-width: 960px) {
    /* xs, sm */
    .div-title {
      padding: 5% 0 2% 0 ;
      color: #23bdbd;
      font-weight: 700;
      font-size: 3em;
    }
    .link {
      font-size: 1.2em;
      text-decoration: none;
      color: #099e9e;
      /*background-color: red; デバッグ用*/
      padding: 1.2vh;/*0.75%;*/
      transition: all  0.3s ease;
    }
    .rightmost-link {
      margin-right: auto;
    }
    .title {
      position: relative;
      height: 50vh;
    }
    .title .typing {
      position: absolute;
      font-size: 9em !important;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
    .vue-typer .custom.char {
      color:  #71e9e9; /*#6cd0ff*/;
      font-weight: 700;
      font-size: 0.18em;/*1.1em;*/
    }
    .sns-img {
      /*position: absolute;*/
      margin: 42vh 2px 0 2px;
      border-radius: 10px;
      transition-duration: 0.2s;
      width: 35px;
    }
    .profile {
      height: 85vh;
      background-color: #eaeaf3fb;
    }
    .profile-img {
      border-radius: 50%;
      border: 9px solid #1d7777;
      display: block;
      margin: 0.5% auto 0.5% auto;
      width: 200px;
      height: 200px;
    }
    .name {
      font-size: 2em;
      font-weight: 600;
      color: #696464;
    }
    .profile-card {
      display: block;
      margin: -5px auto 0 auto;
    }
    .works {
      height: 67vh;
      background-color: #f8f8ff;
    }
    .sekigaemaker-img {
      border-radius: 20px;
      transition-duration: 0.2s;
      width: 300px;
    }
    .sekigaemaker-title {
      font-size: 1.5em;
      font-weight: 600;
      color: #696464;
      margin-top: 1%;
    }
    .skills {
      height: 65vh;
      background-color: #eaeaf3fb;
    }
    .skills-card-title {
      font-size: 1.5em !important;
      font-weight: 550;
      color: #696464;
    }
    .history {
      height: 410vh;
      background-color: #f8f8ff;
    }
    .history-card-title {
      font-size: 1.2em !important;
      font-weight: 550 !important;
      margin-left: 2% !important;
    }
    .history-card-text {
      font-size: 0.8em;
      font-weight: 500;
      padding-left: 4%;
    }
  }
  @media screen and (min-width: 960px) and ( max-width:1904px) {
    /* md, lg */
    .div-title {
      padding: 1% 0 1% 0 ;
      color: #23bdbd;
      font-weight: 700;
      font-size: 5.5em;
    }
    .link {
      font-size: 1.4em;
      text-decoration: none;
      color: #099e9e;
      /*background-color: red; デバッグ用*/
      padding: 1.2vh;/*0.75%;*/
      transition: all  0.3s ease;
    }
    .rightmost-link {
      margin-right: 3%;
    }
    .title {
      position: relative;
      height: 90vh;
    }
    .title .typing {
      position: absolute;
      font-size: 4em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
    .vue-typer .custom.char {
      color:  #71e9e9; /*#6cd0ff*/;
      font-weight: 700;
      font-size: 1.1em;/*1.1em;*/
    }
    .sns-img {
      /*position: absolute;*/
      margin: 78vh 2px 0 2px;
      border-radius: 10px;
      transition-duration: 0.2s;
      width: 55px;
    }
    .profile {
      height: 98vh;
      background-color: #eaeaf3fb;
    }
    .profile-img {
      border-radius: 50%;
      border: 9px solid #1d7777;
      display: block;
      margin: 1% auto 0.5% auto;
      width: 300px;
      height: 300px;
    }
    .name {
      font-size: 3em;
      font-weight: 600;
      color: #696464;
    }
    .profile-card {
      display: block;
      margin: 0 auto;
    }
    .works {
      height: 87vh;
      background-color: #f8f8ff;
    }
    .sekigaemaker-img {
      border-radius: 20px;
      transition-duration: 0.2s;
      width: 400px;
    }
    .sekigaemaker-title {
      font-size: 2em;
      font-weight: 600;
      color: #696464;
      margin-top: 1%;
    }
    .skills {
      height: 88vh;
      background-color: #eaeaf3fb;
    }
    .skills-card-title {
      font-size: 1.8em !important;
      font-weight: 550;
      color: #696464;
    }
    .history {
      height: 280vh;
      background-color: #f8f8ff;
    }
    .history-card-title {
      font-size: 1.5em !important;
      font-weight: 550 !important;
      margin-left: 2% !important;
    }
    .history-card-text {
      font-size: 1em;
      font-weight: 500;
      padding-left: 4%;
    }
  }
  @media screen and (min-width: 1904px) {
    /* xl */
    .div-title {
      padding: 1% 0 1% 0 ;
      color: #23bdbd;
      font-weight: 700;
      font-size: 5.5em;
    }
    .link {
      font-size: 1.4em;
      text-decoration: none;
      color: #099e9e;
      /*background-color: red; デバッグ用*/
      padding: 1.2vh;/*0.75%;*/
      transition: all  0.3s ease;
    }
    .rightmost-link {
      margin-right: 3%;
    }
    .title {
      position: relative;
      height: 90vh;
    }
    .title .typing {
      position: absolute;
      font-size: 4em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
    .vue-typer .custom.char {
      color:  #71e9e9; /*#6cd0ff*/;
      font-weight: 700;
      font-size: 1.1em;/*1.1em;*/
    }
    .sns-img {
      /*position: absolute;*/
      margin: 78vh 2px 0 2px;
      border-radius: 10px;
      transition-duration: 0.2s;
      width: 55px;
    }
    .profile {
      height: 80vh;
      background-color: #eaeaf3fb;
    }
    .profile-img {
      border-radius: 50%;
      border: 9px solid #1d7777;
      display: block;
      margin: 1% auto 0.5% auto;
      width: 300px;
      height: 300px;
    }
    .name {
      font-size: 3em;
      font-weight: 600;
      color: #696464;
    }
    .profile-card {
      display: block;
      margin: 0 auto;
    }
    .works {
      height: 74vh;
      background-color: #f8f8ff;
    }
    .sekigaemaker-img {
      border-radius: 20px;
      transition-duration: 0.2s;
      width: 400px;
    }
    .sekigaemaker-title {
      font-size: 2em;
      font-weight: 600;
      color: #696464;
      margin-top: 1%;
    }
    .skills {
      height: 84vh;
      background-color: #eaeaf3fb;
    }
    .skills-card-title {
      font-size: 1.8em !important;
      font-weight: 550;
      color: #696464;
    }
    .history {
      height: 220vh;
      background-color: #f8f8ff;
    }
    .history-card-title {
      font-size: 1.5em !important;
      font-weight: 550 !important;
      margin-left: 2% !important;
    }
    .history-card-text {
      font-size: 1em;
      font-weight: 500;
      padding-left: 4%;
    }
  }
  :root {
    --animate-duration: 1000ms;
  }
  .container {
    padding: 0;
  }
  h2 {
    font-size: 4em;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .link:hover {
    background-color: #e2d8d8;
  }
  .leftmost-link {
    margin-left: auto;
  }
  .code-img {
    width: 100%;
    height: 100vh;
  }
  .vue-typer {
    white-space: pre;
  }
  .vue-typer .custom.caret {
    width: 0px;
  }
  img {
    vertical-align:top;
  }
  .sns-links {
    text-align: center;
  }
  .sns-img:hover {
    transform: scale(1.1,1.1);
    transition-duration: 0.2s;
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
  .sekigaemaker-img:hover {
    transform: scale(1.03,1.03);
    transition-duration: 0.2s;
  }
  .sekigaemaker-description {
    font-size: 1em;
    font-weight: 550;
    color: #696464;
    margin: 0% auto;
    width: 30%;
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
  .skills-item {
    text-align: center;
    margin-bottom: 5px;
    /*display: inline-block;*/
    /*margin:0 auto;*/
  }
  .opposite {
    /*position: absolute;*/
    /*bottom: 12%;*/
    /*margin-bottom: 15%;*/
    font-size: 1.8vw;
    font-weight: 550;
  }
  .v-timeline-item__opposite {
    align-self: start !important;
  }
  .history-card-title {
    font-size: 1.5vw;
    font-weight: 550;
    margin-left: 2%;
  }
  .historyCardXs {
    margin-right: 3vw;
  }
  .historyCardSm {
    margin-right: 3vw;
  }
  .historyCardRightMd {
    margin-right: 3vw;
  }
  .historyCardLeftMd {
    margin-left: 3vw;
  }
  .historyCardRightLg {
    margin-right: 10vw;
  }
  .historyCardLeftLg {
    margin-left: 10vw;
  }
  .historyCardRightXl {
    margin-right: 10vw;
  }
  .historyCardLeftXl {
    margin-left: 10vw;
  }
  .mostleft-footer-item {
    margin: 0 10px 0 auto;
    color: #099e9e;
  }
  .footer-item {
    margin: 0 5% 0 10px;
    color: #099e9e;
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
      isCreated: false,
      isFadeInUpProfile1: false,
      isFadeInUpProfile2: false,
      isFadeInUpWorks1: false,
      isFadeInUpSkills1 : false,
      isFadeInUpSkills2 : false,
      isFadeInUpSkills3 : false,
      isFadeInRightHistory1: false,
      isFadeInRightHistory2: false,
      isFadeInRightHistory3: false,
      isFadeInRightHistory4: false,
      isFadeInRightHistory5: false,
      isFadeInRightHistory6: false,
      isFadeInRightHistory7: false,
      isFadeInRightHistory8: false,
      isFadeInLeftHistory2: false,
      isFadeInLeftHistory4: false,
      isFadeInLeftHistory6: false,
      isFadeInLeftHistory8: false,

      scrollY: 0,
      innnerHeight: 0,
      typingWords: "Terai Shogo's \nPortfolio",
      privacyPolicy: false,
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
    mounted() {
      console.log(this.$vuetify.breakpoint)
    },
    methods: {
      handleScroll() {
        this.innnerHeight = window.innerHeight;
        this.scrollY = window.scrollY;

        let fadeInUpProfile1Height
        let fadeInUpProfile2Height
        let fadeInUpWorks1Height
        let fadeInUpSkills1Height
        let fadeInUpSkills2Height
        let fadeInUpSkills3Height
        let fadeInUpHistory1Height
        let fadeInUpHistory2Height
        let fadeInUpHistory3Height
        let fadeInUpHistory4Height
        let fadeInUpHistory5Height
        let fadeInUpHistory6Height
        let fadeInUpHistory7Height
        let fadeInUpHistory8Height


        if(this.$vuetify.breakpoint.xsOnly) {
          fadeInUpProfile1Height = 0;
          fadeInUpProfile2Height = 0;
          fadeInUpWorks1Height = 240;
          fadeInUpSkills1Height = 720;
          fadeInUpSkills2Height = 830;
          fadeInUpSkills3Height = 930;
          fadeInUpHistory1Height = 1210;
          fadeInUpHistory2Height = 1370;
          fadeInUpHistory3Height = 1580;
          fadeInUpHistory4Height = 1870;
          fadeInUpHistory5Height = 2310;
          fadeInUpHistory6Height = 2680;
          fadeInUpHistory7Height = 3050;
          fadeInUpHistory8Height = 3310;
        } else if(this.$vuetify.breakpoint.smOnly) {
          fadeInUpProfile1Height = 0;
          fadeInUpProfile2Height = 0;
          fadeInUpWorks1Height = 240;
          fadeInUpSkills1Height = 720;
          fadeInUpSkills2Height = 830;
          fadeInUpSkills3Height = 930;
          fadeInUpHistory1Height = 1210;
          fadeInUpHistory2Height = 1370;
          fadeInUpHistory3Height = 1580;
          fadeInUpHistory4Height = 1870;
          fadeInUpHistory5Height = 2310;
          fadeInUpHistory6Height = 2680;
          fadeInUpHistory7Height = 3050;
          fadeInUpHistory8Height = 3310;
        } else if(this.$vuetify.breakpoint.mdOnly) {
          fadeInUpProfile1Height = 50;
          fadeInUpProfile2Height = 430;
          fadeInUpWorks1Height = 660;
          fadeInUpSkills1Height = 1360;
          fadeInUpSkills2Height = 1500;
          fadeInUpSkills3Height = 1640;
          fadeInUpHistory1Height = 2120;
          fadeInUpHistory2Height = 2270;
          fadeInUpHistory3Height = 2470;
          fadeInUpHistory4Height = 2700;
          fadeInUpHistory5Height = 3100;
          fadeInUpHistory6Height = 3410;
          fadeInUpHistory7Height = 3730;
          fadeInUpHistory8Height = 3970;
        } else if(this.$vuetify.breakpoint.lgOnly) {
          fadeInUpProfile1Height = 90;
          fadeInUpProfile2Height = 470;
          fadeInUpWorks1Height = 860;
          fadeInUpSkills1Height = 1500;
          fadeInUpSkills2Height = 1650;
          fadeInUpSkills3Height = 1800;
          fadeInUpHistory1Height = 2200;
          fadeInUpHistory2Height = 2360;
          fadeInUpHistory3Height = 2540;
          fadeInUpHistory4Height = 2760;
          fadeInUpHistory5Height = 3070;
          fadeInUpHistory6Height = 3360;
          fadeInUpHistory7Height = 3650;
          fadeInUpHistory8Height = 3870;
        } else if(this.$vuetify.breakpoint.xlOnly) {
          fadeInUpProfile1Height = 80;
          fadeInUpProfile2Height = 470;
          fadeInUpWorks1Height = 840;
          fadeInUpSkills1Height = 1540;
          fadeInUpSkills2Height = 1720;
          fadeInUpSkills3Height = 1890;
          fadeInUpHistory1Height = 2350;
          fadeInUpHistory2Height = 2510;
          fadeInUpHistory3Height = 2700;
          fadeInUpHistory4Height = 2910;
          fadeInUpHistory5Height = 3200;
          fadeInUpHistory6Height = 3480;
          fadeInUpHistory7Height = 3750;
          fadeInUpHistory8Height = 3960;
        } else {
          fadeInUpProfile1Height = 140;
          fadeInUpProfile2Height = 520;
          fadeInUpWorks1Height = 840;
          fadeInUpSkills1Height = 1480;
          fadeInUpSkills2Height = 1650;
          fadeInUpSkills3Height = 1800;
          fadeInUpHistory1Height = 2170;
          fadeInUpHistory2Height = 2300;
          fadeInUpHistory3Height = 2520;
          fadeInUpHistory4Height = 2730;
          fadeInUpHistory5Height = 3070;
          fadeInUpHistory6Height = 3350;
          fadeInUpHistory7Height = 3630;
          fadeInUpHistory8Height = 3850;
        }

        if(!this.isFadeInUpProfile1) {
          this.isFadeInUpProfile1 = window.scrollY > fadeInUpProfile1Height;
        }
        if(!this.isFadeInUpProfile2) {
          this.isFadeInUpProfile2 = window.scrollY > fadeInUpProfile2Height;
        }
        if(!this.isFadeInUpWorks1) {
          this.isFadeInUpWorks1 = window.scrollY > fadeInUpWorks1Height;
        }
        if(!this.isFadeInUpSkills1) {
          this.isFadeInUpSkills1 = window.scrollY > fadeInUpSkills1Height;
        }
        if(!this.isFadeInUpSkills2) {
          this.isFadeInUpSkills2 = window.scrollY > fadeInUpSkills2Height;
        }
        if(!this.isFadeInUpSkills3) {
          this.isFadeInUpSkills3 = window.scrollY > fadeInUpSkills3Height;
        }
        if(!this.isFadeInRightHistory1) {
          this.isFadeInRightHistory1 = window.scrollY > fadeInUpHistory1Height;
        }
        if(!this.isFadeInRightHistory3) {
          this.isFadeInRightHistory3 = window.scrollY > fadeInUpHistory3Height;
        }
        if(!this.isFadeInRightHistory5) {
          this.isFadeInRightHistory5 = window.scrollY > fadeInUpHistory5Height;
        }
        if(!this.isFadeInRightHistory7) {
          this.isFadeInRightHistory7 = window.scrollY > fadeInUpHistory7Height;
        }

        if(this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly) {
          // md, lg, xlのとき
          if(!this.isFadeInLeftHistory2) {
            this.isFadeInLeftHistory2 = window.scrollY > fadeInUpHistory2Height;
          }
          if(!this.isFadeInLeftHistory4) {
            this.isFadeInLeftHistory4 = window.scrollY > fadeInUpHistory4Height;
          }
          if(!this.isFadeInLeftHistory6) {
            this.isFadeInLeftHistory6 = window.scrollY > fadeInUpHistory6Height;
          }
          if(!this.isFadeInLeftHistory8) {
            this.isFadeInLeftHistory8 = window.scrollY > fadeInUpHistory8Height;
          }
        } else {
          // xs, smのとき
          if(!this.isFadeInRightHistory2) {
            this.isFadeInRightHistory2 = window.scrollY > fadeInUpHistory2Height;
          }
          if(!this.isFadeInRightHistory4) {
            this.isFadeInRightHistory4 = window.scrollY > fadeInUpHistory4Height;
          }
          if(!this.isFadeInRightHistory6) {
            this.isFadeInRightHistory6 = window.scrollY > fadeInUpHistory6Height;
          }
          if(!this.isFadeInRightHistory8) {
            this.isFadeInRightHistory8 = window.scrollY > fadeInUpHistory8Height;
          }
        }
      },
    },
  }
</script>
