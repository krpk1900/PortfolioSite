<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="title">
        <img class="code-img" src="code5.jpg" alt="">
        <p>Terai Shogo's Portfolio</p>
      </div>

      <div class="profile">
        <h2>Profile</h2>
      </div>

      <div class="works">
        <h2>Works</h2>
      </div>

      <div class="skill">
        <h2>Skill</h2>
      </div>

      <div class="history">
        <h2>History</h2>
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
</style>

<script>
export default {
  components: {
  }
}
</script>
