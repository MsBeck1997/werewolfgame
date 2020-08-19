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
                    Time: {{ data.time.timeOfDay }}
                    <br />
                    Day: {{ data.time.day }}
                </div>

                <div class="col-2">
                    {{ data.time.moonStatus }}
                    <br />
                    Transform in: {{ data.time.tranformCountdown }}
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
                    {{ diceOutput }}
                    <br /> <br />
                    <ul>
                        <li v-for="(message,index) in data.logBox.reverse()" :key="index">
                            {{ message  }}
                        </li>
                    </ul>
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

  data: function() {
    return {
        data: {
            diceOutput: '',
            logBox: [],
            currentTime: 1,
            time: { day: '1', timeOfDay: 'Morning', moonStatus: 'Waning Moon', tranformCountdown: '3 days'},
        }
     }
  },

  methods: {
    handleTime: function() {
        // HandleTime is a function that takes the currentTime (which is a simple counter modified by actions), and calculates
        // the day, time of day, and moon cycle from it. It then pushes the change to the time object for usage in the DOM.

        let currentTime = this.data.currentTime

        // Calculate day
        this.data.time.day = Math.ceiling(currentTime / 4)

        // Calculate time of day
        if (currentTime % 4 == 0) {
            this.data.time.timeOfDay = 'Night'
        } else if (currentTime % 4 == 1) {
            this.data.time.timeOfDay = 'Morning'
        } else if (currentTime % 4 == 2) {
            this.data.time.timeOfDay = 'Afternoon'
        } else if (currentTime % 4 == 0) {
            this.data.time.timeOfDay = 'Evening'
        }

        // Calculate moon and transform
        if (currentTime % 4 == 0) {
            this.data.time.moonStatus = 'Full Moon'
            this.data.time.tranformCountdown = 'Tonight'
        } else if (currentTime % 4 == 1) {
            this.data.time.moonStatus = 'Waning Moon'
            this.data.time.tranformCountdown = '3 days'
        } else if (currentTime % 4 == 2) {
            this.data.time.moonStatus = 'New Moon'
            this.data.time.tranformCountdown = '2 days'
        } else if (currentTime % 4 == 0) {
            this.data.time.moonStatus = 'Waxing Moon'
            this.data.time.tranformCountdown = 'Tomorrow'
        }

        vm.$forceUpdate();
    },

    hunt: function() {
        // Hunt is an action that rolls a dice, publishes the result to the logBox, and modifies the currentTime and stats in data.

        // Update time in statusBar
        this.data.currentTime++
        this.handleTime
        console.log(this.data.currentTime)

        // Calculate a random percent rounded
        let roll = Math.floor(Math.random() * 100)
          if (roll < 11) {
            console.log('Epic failure')
            this.diceOutput = 'Epic failure'
            this.data.logBox.push("Epic failure")
            return this.diceOutput;
          } else if (roll < 50) {
            console.log('Failure')
            this.diceOutput = 'Failure'
            this.data.logBox.push("Failure")
            return this.diceOutput;
          } else if (roll < 90) {
            console.log('Success')
            this.diceOutput = 'Success'
            this.data.logBox.push("Success")
            return this.diceOutput;
          } else if (roll < 101) {
            console.log('Epic success')
            this.diceOutput = 'Epic success'
            this.data.logBox.push("Epic success")
            return this.diceOutput;
          }
        // Push changes to stats in statusBar
        // Publish result in log box
    },

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
