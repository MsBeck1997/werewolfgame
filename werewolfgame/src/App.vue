<template>
  <div id="app">
    <StatusBar />

    <b-container fluid>
      <div class="row">
        <div class="col-3">
          <ActionsBox />
        </div>
        <div class="col-9">
          <LogBox />
        </div>
      </div>
    </b-container>

    <Footer />
  </div>
</template>

<script>

import StatusBar from './components/statusBar.vue'
import LogBox from './components/logBox.vue'
import ActionsBox from './components/actionsBox.vue'
import Footer from './components/footer.vue'



export default {
  name: 'App',
  components: {
    StatusBar,
    LogBox,
    ActionsBox,
    Footer,
  },
  methods: {
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
