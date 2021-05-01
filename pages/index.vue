<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <nuxt-link v-scroll-to="'#title'" to>Top</nuxt-link>
      <nuxt-link v-scroll-to="'#profile'" to>Profile</nuxt-link>
      <nuxt-link v-scroll-to="'#works'" to>Works</nuxt-link>
      <nuxt-link v-scroll-to="'#skill'" to>Skill</nuxt-link>
      <nuxt-link v-scroll-to="'#history'" to>History</nuxt-link>

      <div class="title" id="title">
        <img class="code-img" src="code5.jpg" alt="">
        <p>Terai Shogo's Portfolio</p>
      </div>

      <div class="profile" id="profile">
        <h2>Profile</h2>
      </div>

      <div class="works" id="works">
        <h2>Works</h2>
      </div>

      <div class="skill" id="skill">
        <h2>Skill</h2>
      </div>

      <div class="history" id="history">
        <h2>History</h2>

        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" :icon="item.icon" fill-dot>
            <v-card :color="item.color" dark :class="[{right: i%2==0}, {left: i%2==1}]">
              <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
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
  h2 {
    font-size: 4em;
    text-align: center;
  }
  .code-img {
    width: 100%;
    height: 100%;
  }
  .title {
    position: relative;
  }
  .title p {
    position: absolute;
    font-size: 4em;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  img {
    vertical-align:top;
  }
  .profile {
    height: 100vh;
    background-color: #a1d4c9;
  }
  .works {
    height: 100vh;
    background-color: #75c9b7;
  }
  .skill {
    height: 100vh;
    background-color: #a1d4c9;
  }
  .history {
    height: 100vh;
    background-color: #75c9b7;
  }
  .right {
    margin-right: 10em;
  }
  .left {
    margin-left: 10em;
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
    }),
  }
</script>
