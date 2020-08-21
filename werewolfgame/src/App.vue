<template>
  <div id="app">

    <!-- Stats Bars -->
    <section>
    <div>
        <b-container fluid>
            <div class="row">
                <!-- Stats -->
                <div class="col-2">
                    <b-progress :value="info.stats.health" :max="100" class="mb-3"></b-progress>
                    <p>Health <br /> {{ info.stats.health }}/100</p>
                </div>
                <div class="col-2">
                    <b-progress :value="info.stats.sanity" :max="100" class="mb-3"></b-progress>
                    <p>Sanity <br /> {{ info.stats.sanity }}/100</p>
                </div>

                <div class="col-2">
                    <b-progress :value="info.stats.bloodlust" :max="100" class="mb-3"></b-progress>
                    <p>Bloodlust <br /> {{ info.stats.bloodlust }}/100</p>
                </div>

                <div class="col-2">
                    <b-progress :value="info.stats.suspicion" :max="100" class="mb-3"></b-progress>
                    <p>Suspicion <br /> {{ info.stats.suspicion }}/100</p>
                </div>

                <!-- Time -->
                <div class="col-2">
                    Time: {{ info.time.timeOfDay }}
                    <br />
                    Day: {{ info.time.day }}
                </div>

                <div class="col-2">
                    {{ info.time.moonStatus }}
                    <br />
                    Transform in: {{ info.time.transformCountdown }}
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
                          <b-button squared @click="hunt(info.time)">Icon <br /> Hunt</b-button>
                    </div>
                    <div class="col-8">
                        Information on action
                    </div>
                </div>

                <!-- Church -->
                <div class="row">
                    <div class="col-4">
                          <b-button squared @click="church(info.time)">Icon <br /> Church</b-button>
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
                        <b-button squared @click="brew(info.brew, info.time)">Icon <br /> Brew</b-button>
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
                {{ info.currentTime }}
                <div class="border border-secondary">
                    {{ info.diceOutput }}
                    <br /> <br />
                    <ul>
                        <li v-for="(message,index) in info.logBox" :key="index">
                            {{ message }}
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
        info: {
            diceOutput: '',
            logBox: ['First Log', ],
            time: { currentTime: '1', day: '1', timeOfDay: 'Morning', moonStatus: 'Waning Moon', transformCountdown: '3 days'},
            stats: { health: '75', sanity: '75', bloodlust: '15', suspicion: '0' },
            brew: { brewLevel: '0', herbs: '0'},
        }
    }
  },

  methods: {
    handleTime: function(timeObject) {
        // HandleTime is a function that takes the currentTime (which is a simple counter modified by actions), and calculates
        // the day, time of day, and moon cycle from it. It then pushes the change to the time object for usage in the DOM.

        // Calculate day
        timeObject.day = Math.ceil(timeObject.currentTime / 4)

        // Calculate time of day
        if (timeObject.currentTime % 4 === 0) {
            timeObject.timeOfDay = 'Night'
        } else if (timeObject.currentTime % 4 === 1) {
            timeObject.timeOfDay = 'Morning'
        } else if (timeObject.currentTime % 4 === 2) {
            timeObject.timeOfDay = 'Afternoon'
        } else if (timeObject.currentTime % 4 === 3) {
            timeObject.timeOfDay = 'Evening'
        }

        // Calculate moon and transform
        if (timeObject.day % 4 === 0) {
            timeObject.moonStatus = 'Full Moon'
            timeObject.transformCountdown = 'Tonight'
        } else if (timeObject.day % 4 === 1) {
            timeObject.moonStatus = 'Waning Moon'
            timeObject.transformCountdown = '3 days'
        } else if (timeObject.day% 4 === 2) {
            timeObject.moonStatus = 'New Moon'
            timeObject.transformCountdown = '2 days'
        } else if (timeObject.day% 4 === 3) {
            timeObject.moonStatus = 'Waxing Moon'
            timeObject.transformCountdown = 'Tomorrow'
        }

        this.info.time = timeObject
    },

    statTracker: function(statsObject, timeObject) {
        // StatTracker is a function that handles stat changes from actions and modifies them in data to ensure >100 and <0.
        // It also handles failure conditions and random events due to stats not being maintained.

        // Health Handler
        if (statsObject.health > 100) {
            statsObject.health === 100
        } else if (statsObject.health <= 0) {
            statsObject.health === 0
            this.info.logBox.unshift("You feel the last remaining bit of life drain from your body. At least no one will be terrorized by a monster anymore... As you die, you can't help but wonder if there was a better way than death.")
        }

        // Sanity Handler
        if (statsObject.sanity > 100) {
            statsObject.sanity === 100
        } else if (statsObject.sanity <= 0) {
            statsObject.sanity === 33
            this.info.logBox.unshift("You feel strange, moments before everything goes dark. On the brink of insanity, the curse was released, allowing destruction to commence. You feel terrible. You have to control yourself better.")
            statsObject.health -= 15
            statsObject.bloodlust -= 60
            statsObject.suspicion += 20
            timeObject.currentTime += 3
        }

        // Bloodlust Handler
        if (statsObject.bloodlust < 0) {
            statsObject.bloodlust === 0
        } else if (statsObject.bloodlust <= 100) {
            statsObject.bloodlust === 0
            this.info.logBox.unshift("You feel strange, moments before everything goes dark. On the brink of insanity, the curse was released, allowing destruction to commence. You feel terrible. You have to control yourself better.")
            statsObject.health -= 15
            statsObject.sanity -= 20
            statsObject.suspicion += 20
            timeObject.currentTime += 3
        }

        // Suspicion Handler
        if (statsObject.suspicion < 0) {
            statsObject.suspicion === 0
        } else if (statsObject.suspicion <= 100) {
            statsObject.suspicion === 90
            this.info.logBox.unshift("Moments before it happens, you catch sight of the stalker following you. You manage to fight them off, killing them in the process. You know that if you don't reduce suspicion in the townsfolk, that was just the first of many.")
            statsObject.health -= 15
            statsObject.sanity -= 20
            statsObject.bloodlust -= 25
            timeObject.currentTime += 2
        }

        this.info.stats = statsObject
        this.info.time = timeObject
    },

    hunt: function(timeObject) {
        // Hunt is an action that rolls a dice, publishes the result to the logBox, and modifies the currentTime and stats in data.

        // Update time in statusBar
        timeObject.currentTime++

        let roll = Math.floor(Math.random() * 100)
          if (roll < 11) {
            console.log('Epic failure')
            this.diceOutput = 'Epic failure'
            this.info.logBox.unshift("Epic failure")
          } else if (roll < 50) {
            console.log('Failure')
            this.diceOutput = 'Failure'
            this.info.logBox.unshift("Failure")
          } else if (roll < 90) {
            console.log('Success')
            this.diceOutput = 'Success'
            this.info.logBox.unshift("Success")
          } else if (roll < 101) {
            console.log('Epic success')
            this.diceOutput = 'Epic success'
            this.info.logBox.unshift("Epic success")
          }

          this.handleTime(timeObject)
          return this.diceOutput;
    },

    church: function(timeObject) {
        // Church is an action that checks the timeOfDay to verify morning or afternoon, then rolls a dice & publishes
        // the result to logBox. Then it modifies currentTime and statChanges, storing the data.

        if (timeObject.timeOfDay === 'Morning' || timeObject.timeOfDay === 'Afternoon') {
          let roll = Math.floor(Math.random() * 100)
          if (roll < 11) {
            console.log('Epic failure')
            this.diceOutput = 'Epic failure'
            this.info.logBox.unshift("Epic failure")
          } else if (roll < 50) {
            console.log('Failure')
            this.diceOutput = 'Failure'
            this.info.logBox.unshift("Failure")
          } else if (roll < 90) {
            console.log('Success')
            this.diceOutput = 'Success'
            this.info.logBox.unshift("Success")
          } else if (roll < 101) {
            console.log('Epic success')
            this.diceOutput = 'Epic success'
            this.info.logBox.unshift("Epic success")
          }
        } else {
            this.info.logBox.unshift("You think about attending church, but no services are taking place right now. You should come back when one is happening.")
        }

        this.handleTime(timeObject)
        return this.diceOutput;
    },

    brew: function(timeObject, brewObject) {
        // Brew is an action that checks if your inventory has enough herbs to brew (>=3), then uses your brewing level
        // to roll a dice & publish the result to the logBox. Finally, it modifies the currentTime and stats in data.

        if (this.info.brew.herbs >= 3) {
            if (this.info.brew.brewLevel === 0) {
              let roll = Math.floor(Math.random() * 100)
              if (roll < 11) {
                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
              } else if (roll < 50) {
                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("Epic success")
              }
            } else if (this.info.brew.brewLevel === 1) {
              let roll = Math.floor(Math.random() * 100)
              if (roll < 11) {
                console.log('Epic failure')
                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
              } else if (roll < 50) {
                console.log('Failure')
                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                console.log('Success')
                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                console.log('Epic success')
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("Epic success")
              }
            }

        } else {
            this.info.logBox.unshift("You consider brewing something, but realize you don't have enough supplies to do so. Maybe you should try your luck gathering some herbs.")
        }

          this.handleBrew(brewObject)
          this.handleTime(timeObject)
          return this.diceOutput;
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
