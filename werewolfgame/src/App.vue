<template>
  <div id="app">

    <!-- Stats Bars -->
    <section>
    <div>
        <b-container fluid>
            <div class="row">
                <!-- Stats -->
                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Health <br /> 51/100</p>
                </div>
                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Sanity <br /> 51/100</p>
                </div>

                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Bloodlust <br /> 51/100</p>
                </div>

                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Suspicion <br /> 51/100</p>
                </div>

                <!-- Time -->
                <div class="col-2">
                    Time: Morning
                    <br />
                    Day:
                </div>

                <div class="col-2">
                    Waxing Moon
                    <br />
                    Transform in: 3 days
                </div>
            </div>
        </b-container>
    </div>
    </section>

    <b-container fluid>
      <div class="row">
        <div class="col-3">

          <!-- Action Bar -->
            <section>
            <b-container>
                <!-- Hunt -->
                <div class="row">
                    <div class="col-4">
                          <b-button squared @click="hunt">Icon <br /> Hunt</b-button>
                    </div>
                    <div class="col-8">
                        Information on action
                    </div>
                </div>

                <!-- Church -->
                <div class="row">
                    <div class="col-4">
                          <b-button squared>Icon <br /> Church</b-button>
                    </div>
                    <div class="col-8">
                        Information on action
                    </div>
                </div>

                <!-- Rest -->
                <div class="row">
                    <div class="col-4">
                        <b-button squared>Icon <br /> Rest</b-button>
                    </div>
                    <div class="col-8">
                        Information on action
                    </div>
                </div>

                <!-- Gather -->
                <div class="row">
                    <div class="col-4">
                        <b-button squared>Icon <br /> Gather</b-button>
                    </div>
                    <div class="col-8">
                        Information on action
                    </div>
                </div>

                <!-- Brew -->
                <div class="row">
                    <div class="col-4">
                        <b-button squared>Icon <br /> Brew</b-button>
                    </div>
                    <div class="col-8">
                        Information on action
                    </div>
                </div>
            </b-container>
            </section>

        </div>
        <div class="col-9">

            <!-- Log Box -->
            <section>
                <div class="border border-secondary">
                    <p>Log 1</p>
                    <p>Log 2</p>
                </div>
            </section>

        </div>
      </div>
    </b-container>

    <!-- Footer -->
    <section>
    <div>
        <b-container fluid class="bv-example-row">
            <div class="row bg-secondary text-white">
                <b-col cols="10"></b-col>
                <b-col cols="2">Developer</b-col>
            </div>
        </b-container>
    </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    hunt: function() {
        // Update time in statusBar

        // Calculate a random percent rounded
        let roll = Math.floor(Math.random() * 100)
          if (roll < 11) {
            console.log('epic failure')
          } else if (roll < 50) {
            console.log('Failure')
          } else if (roll < 90) {
            console.log('Success')
          } else if (roll < 101) {
            console.log('Epic Success')
          }
        // Push changes to stats in statusBar
        // Publish result in log box
    },
//    time: function() {
//      // Keep a current log of time as a whole number
//          // Add inputNumber to current log time
//      // Calculate current day
//          // Take currentTime, divide by 4 round up
//      // Calculate current time of day (ToD)
//          // Take currentTime, remainder of 4
//              // 1 => morning
//              // 2 => afternoon
//              // 3 => Evening
//              // 4 => night
//      // Return object of {day: #, ToD: string}
//    },

  },
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
