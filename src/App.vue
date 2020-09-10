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
                          <b-button squared :disabled="info.endGame" @click="hunt(info.time, info.stats)">Icon <br /> Hunt</b-button>
                    </div>
                    <div class="col-8">
                        Take to the nearby forest and attempt to find something to eat.
                    </div>
                </div>

                <!-- Church -->
                <div class="row">
                    <div class="col-4">
                          <b-button squared :disabled="info.endGame" @click="church(info.time, info.stats)">Icon <br /> Church</b-button>
                    </div>
                    <div class="col-8">
                        In the morning or afternoon, attend a church service to appear normal.
                    </div>
                </div>

                <!-- Rest -->
                <div class="row">
                    <div class="col-4">
                        <b-button squared :disabled="info.endGame" @click="rest(info.time, info.stats)">Icon <br /> Rest</b-button>
                    </div>
                    <div class="col-8">
                        Take some time to rest and recover.
                    </div>
                </div>

                <!-- Gather -->
                <div class="row">
                    <div class="col-4">
                        <b-button squared :disabled="info.endGame" @click="gather(info.time, info.brew, info.stats)">Icon <br /> Gather</b-button>
                    </div>
                    <div class="col-8">
                        Head into the nearby forest to search for herbs. Takes two hours. <br />
                        Current Herbs: {{ info.brew.herbs }}
                    </div>
                </div>

                <!-- Brew -->
                <div class="row">
                    <div class="col-4">
                        <b-button squared :disabled="info.endGame" @click="brew(info.time, info.brew, info.stats)">Icon <br /> Brew</b-button>
                    </div>
                    <div class="col-8">
                        Use three gathered herbs to brew potions. Potions have many effects, including curing your curse.
                    </div>
                </div>
            </b-container>
            </section>

        </div>
        <div class="col-9">

            <!-- Log Box -->
            <section>
                <div class="border border-secondary">
                    <ul>
                        <li class="logBoxList" v-for="(message,index) in info.logBox" :key="index">
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
            time: { currentTime: 1, day: 1, timeOfDay: 'Morning', moonStatus: 'Waning Moon', transformCountdown: '3 days'},
            stats: { health: 75, sanity: 75, bloodlust: 15, suspicion: 0 },
            brew: { brewLevel: 0, herbs: 20},
            endGame: false,
        },
        logOutput: {
            transformation: { moonChange: "transform on moon",
                              healthChange: "transform on health",
                              sanityChange: "",
                              bloodlustChange: "",
                              suspicionChange: "" },
            hunt: { EpicSuccess: "",
                    Success: "",
                    Failure: "",
                    EpicFailure: "" },
            church: { EpicSuccess: "You feel inspired by the sermon given today. You can feel the strength that hope gives you flowing though your veins. --Suspicion -Bloodlust ++Sanity",
                    Success: "You grow weary of the standing, singing, and prayer some days. But fitting in is never entertaining. -Suspicion +Bloodlust -Sanity",
                    Failure: "The whole point of attending church is to prevent the villagers from suspecting something is wrong. Sitting in the back doesn't exactly make you noticeable. +Bloodlust -Sanity",
                    EpicFailure: "The preacher drones on and on, doing little more than reading out loud from his book. You doze off in the pew, and awaken to dirty looks from the other churchgoers. You leave hurriedly, trying to avoid causing more damage to your reputation. ++Suspicion +Bloodlust -Sanity",
                    Unavailable: "You think about attending church, but no services are taking place right now. You should come back when one is happening." },
            rest: { Success: "test",
                    Failure: "You try to rest your eyes, but nightmares plague you. Sounds of death, images of fear, scents of blood seep into your dreams. You don't feel rested. You don't feel sane. +Bloodlust  +Suspicion", },
            gather: { EpicSuccess: "",
                    Success: "",
                    Failure: "",
                    EpicFailure: "" },
            brew: { level0: { EpicSuccess: "testing brew",
                              Success: "",
                              Failure: "",
                              EpicFailure: "" },
                    level1: { EpicSuccess: "",
                              Success: "",
                              Failure: "",
                              EpicFailure: "" },
                    level2: { EpicSuccess: "",
                              Success: "",
                              Failure: "",
                              EpicFailure: "" },
                    level3: { EpicSuccess: "",
                              Success: "",
                              Failure: "",
                              EpicFailure: "" },
                    level4: { EpicSuccess: "",
                              Success: "",
                              Failure: "",
                              EpicFailure: "" },
                    level5: { EpicSuccess: "",
                              Success: "",
                              Failure: "",
                              EpicFailure: "" } },
        }
    }
  },

  methods: {
    handleTime: function(timeObject) {
        // HandleTime is a function that takes the currentTime (which is a simple counter modified by actions), and calculates
        // the day, time of day, and moon cycle from it. It also checks if a transformation should happen, and applies it if it does.

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

        // Calculate moon and transformCountdown
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

        // Transformation
        if ((timeObject.day % 4 === 0) && (timeObject.currentTime % 4 === 0)) {
            timeObject.currentTime++
            timeObject.moonStatus = 'Waning Moon'
            timeObject.transformCountdown = '3 days'
            timeObject.timeOfDay = 'Morning'

            this.info.logBox.unshift("Even as you know it's coming, the transformation to a werewolf startles you. Everything goes black.")
            this.info.logBox.unshift("You awake, uncomfortable. Hopefully you didn't kill someone...")
        }

        this.info.time = timeObject
    },

    handleStats: function(timeObject, statsObject) {
        // handleStats is a function that handles stat changes from actions and modifies them in data to ensure >100 and <0.
        // It also handles failure conditions and random events due to stats not being maintained.

        // Health Handler
        if (statsObject.health > 100) {
            statsObject.health = 100
        } else if (statsObject.health <= 0) {
            statsObject.health = 0
            this.info.endGame = true
            this.info.logBox.unshift("You feel the last remaining bit of life drain from your body. At least no one will be terrorized by a monster anymore... As you die, you can't help but wonder if there was a better way than death.")
        }

        // Sanity Handler
        if (statsObject.sanity > 100) {
            statsObject.sanity = 100
        } else if (statsObject.sanity <= 0) {
            statsObject.sanity = 33
            this.info.logBox.unshift("You feel strange, moments before everything goes dark. On the brink of insanity, the curse was released, allowing destruction to commence. You feel terrible. You have to control yourself better.")
            timeObject.currentTime += 3
        }

        // Bloodlust Handler
        if (statsObject.bloodlust < 0) {
            statsObject.bloodlust = 0
        } else if (statsObject.bloodlust >= 100) {
            statsObject.bloodlust = 0
            statsObject.sanity -= 20
            this.info.logBox.unshift("You feel strange, moments before everything goes dark. As the hunger consumes you, the curse is released, allowing destruction to commence. You feel terrible. You have to control yourself better.")
            timeObject.currentTime += 3
        }

        // Suspicion Handler
        if (statsObject.suspicion < 0) {
            statsObject.suspicion = 0
        } else if (statsObject.suspicion >= 100) {
            statsObject.suspicion = 90
            statsObject.bloodlust -= 20
            statsObject.sanity -= 20
            this.info.logBox.unshift("Moments before it happens, you catch sight of the stalker following you. You manage to fight them off, killing them in the process. You know that if you don't reduce suspicion in the townsfolk, that was just the first of many.")
            timeObject.currentTime += 2
        }

        this.info.stats = statsObject
        this.info.time = timeObject
    },

    hunt: function(timeObject, statsObject) {
        // Hunt is an action that rolls a dice, publishes the result to the logBox, and modifies the currentTime and stats in data.

        // Update time in statusBar
        timeObject.currentTime++

        let roll = Math.floor(Math.random() * 100)
          if (roll < 11) {
            timeObject.currentTime++

            statsObject.sanity -= 10
            statsObject.bloodlust += 20
            statsObject.suspicion += 20
            this.diceOutput = 'Epic failure'

            this.info.logBox.unshift("You take down a deer, but before you can dig in, you hear a scream from the bushes. You take off after whoever saw you, but you lost both them and the deer. Frustrated and still hungry, you head back to town. ++Suspicion ++Bloodlust -Sanity")
           } else if (roll < 40) {
            statsObject.sanity -= 10
            statsObject.bloodlust += 5
            statsObject.suspicion += 5
            this.diceOutput = 'Failure'

            this.info.logBox.unshift("Irritated, you return home empty handed. What a waste of time. On the way, you notice another hunter glancing at you with fear in his eyes. Did he see something he shouldn't have...?  +Bloodlust -Sanity +Suspicion")
          } else if (roll < 50) {
            statsObject.health -= 10
            statsObject.bloodlust += 5
            this.diceOutput = 'Minor failure'

            this.info.logBox.unshift("The stag you were following almost got away. Luckily, you were faster. Unluckily, it managed to gore you when it fought back. -Health -Bloodlust")
          } else if (roll < 80) {
            statsObject.health += 10
            statsObject.bloodlust -= 10
            this.diceOutput = 'Success'

            this.info.logBox.unshift("You took down a beautiful stag. It was delicious. --Bloodlust +Health")
          } else if (roll < 90) {
            timeObject.currentTime++

            statsObject.health += 10
            statsObject.sanity -= 5
            statsObject.bloodlust -= 15
            this.diceOutput = 'Major Success'

            this.info.logBox.unshift("While hunting, you come across something that smells amazing. You follow it with a single-mindedness that borders obsession. Who knew mountain lions were so delectable? +Health --Bloodlust -Sanity")
          } else if (roll < 101) {
            statsObject.health += 10
            statsObject.sanity += 5
            statsObject.bloodlust -= 20
            statsObject.suspicion -= 5
            this.diceOutput = 'Epic success'

            this.info.logBox.unshift("Not only does the hunt go amazing, but you end up having extra. You share your excess with the townsfolk, who are extremely grateful. +Health --Bloodlust +Sanity -Suspicion")
          }

          this.handleTime(timeObject)
          this.handleStats(timeObject, statsObject)
          return this.diceOutput;
    },

    church: function(timeObject, statsObject) {
        // Church is an action that checks the timeOfDay to verify morning or afternoon, then rolls a dice & publishes
        // the result to logBox. Then it modifies currentTime and statChanges, storing the data.

        if (timeObject.timeOfDay === 'Morning' || timeObject.timeOfDay === 'Afternoon') {
          let roll = Math.floor(Math.random() * 100)
          timeObject.currentTime++
          if (roll < 11) {
            statsObject.sanity -= 10
            statsObject.bloodlust += 10
            statsObject.suspicion += 25

            this.diceOutput = 'Epic failure'
            this.info.logBox.unshift(this.logOutput.church.EpicFailure)
          } else if (roll < 50) {
            statsObject.sanity -= 5
            statsObject.bloodlust += 5

            this.diceOutput = 'Failure'
            this.info.logBox.unshift(this.logOutput.church.Failure)
          } else if (roll < 90) {
            statsObject.sanity -= 5
            statsObject.bloodlust += 5
            statsObject.suspicion -= 10

            this.diceOutput = 'Success'
            this.info.logBox.unshift()
          } else if (roll < 101) {
            statsObject.sanity += 20
            statsObject.bloodlust -= 10
            statsObject.suspicion -= 20

            this.diceOutput = 'Epic success'
            this.info.logBox.unshift(this.logOutput.church.Success)
          }
        } else {
            this.info.logBox.unshift(this.logOutput.church.Unavailable)
        }

        this.handleTime(timeObject)
        this.handleStats(timeObject, statsObject)
        return this.diceOutput;
    },

    rest: function(timeObject, statsObject) {
        // Rest is an action that slightly improves your stats for the tradeoff of time. Can't be preformed if your
        // sanity is too low (<25).

        timeObject.currentTime++

        if (statsObject.sanity < 25) {
            statsObject.bloodlust += 5
            statsObject.suspicion += 5

            this.info.logBox.unshift(this.logOutput.rest.Failure)
        } else {
            statsObject.health += 5
            statsObject.sanity += 10
            statsObject.bloodlust += 5
            statsObject.suspicion -= 5

            // this.info.logBox.unshift("Dreams consume you and you frolic in a better time. You awake feeling slightly better, if not slightly hungry. +Health  +Sanity  +Bloodlust  -Suspicion")
            this.info.logBox.unshift(this.logOutput.rest.Success)
        }

        this.handleTime(timeObject)
        this.handleStats(timeObject, statsObject)
    },

    gather: function(timeObject, brewObject, statsObject) {
      // Gather is an action that rolls a dice, publishes the result to the logBox, and modifies the currentTime and stats in data.
      // If successful, it adds herbs to brewObject.

      timeObject.currentTime += 2

      let roll = Math.floor(Math.random() * 100)
        if (roll < 11) {
          this.diceOutput = 'Epic failure'
          this.info.logBox.unshift("On your way back from collecting, you notice one of the herbs has a funny look. You recognize it as poisonous. You paw through the rest of the herbs, but have trouble differentiating between safe and non-safe. You toss them all to be safe.")
        } else if (roll < 50) {
          this.diceOutput = 'Failure'
          this.info.logBox.unshift("Bad luck. Irritated, you head back empty handed.")
        } else if (roll < 90) {
          brewObject.herbs++
          this.diceOutput = 'Success'
          this.info.logBox.unshift("You found some herbs along a bank, and brought them back. +1 herb")
        } else if (roll < 101) {
          brewObject.herbs += 2
          this.diceOutput = 'Epic success'
          this.info.logBox.unshift("The gods must be smiling upon you today, as you had great luck collecting. +2 herbs")
        }

        this.handleTime(timeObject)
        this.handleStats(timeObject, statsObject)

        this.info.stats = statsObject
        this.info.time = timeObject
        this.info.brew = brewObject

        return this.diceOutput;
    },

    brew: function(timeObject, brewObject, statsObject) {
        // Brew is an action that checks if your inventory has enough herbs to brew (>=3), then uses your brewing level
        // to roll a dice & publish the result to the logBox. Finally, it modifies the currentTime and stats in data.
        // Brewing is a level based system, that has a chance to move up a level to unlock better potions. The top level
        // is the cure. This prevents random win in 1st try, and still allows for randomness

        if (this.info.brew.herbs >= 3) {
            timeObject.currentTime++

            if (this.info.brew.brewLevel === 0) {
                brewObject.herbs -= 3
              let roll = Math.floor(Math.random() * 100)
              if (roll < 11) {
                timeObject.currentTime++

                statsObject.health -= 20
                statsObject.sanity -= 10
                statsObject.bloodlust += 10
                statsObject.suspicion += 10

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("That potion wasn't right. Wasn't right at all. --Health -Sanity +Bloodlust +Suspicion")
              } else if (roll < 50) {
                statsObject.sanity -= 5

                this.diceOutput = 'Failure'
                this.info.logBox.unshift("You're not quite sure which herbs do what. You tried mixing a few together into a potion. Nothing seemed to happen. -Sanity")
              } else if (roll < 90) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust -= 5

                this.diceOutput = 'Success'
                this.info.logBox.unshift("Combining a few herbs together usually doesn't have much to show for it, but that one worked! +Health +Sanity -Bloodlust")
              } else if (roll < 101) {
                timeObject.currentTime++

                statsObject.health += 10
                statsObject.sanity += 15
                statsObject.bloodlust -= 10

                this.diceOutput = 'Epic success'
                this.brewObject.brewLevel++
                this.info.logBox.unshift("You tried something new today - and it worked! You think you understand how to actually brew them now. +Health +Sanity -Bloodlust")
              }

            } else if (this.info.brew.brewLevel === 1) {
              let roll = Math.floor(Math.random() * 100)
              brewObject.herbs -= 3
              if (roll < 11) {
                timeObject.currentTime++

                statsObject.health -= 20
                statsObject.sanity -= 10
                statsObject.bloodlust += 10
                statsObject.suspicion += 10

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("That potion wasn't right. Wasn't right at all. --Health -Sanity +Bloodlust +Suspicion")
              } else if (roll < 50) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.brewObject.brewLevel++
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("You tried something new today - and it worked! You think you understand how to actually brew them better.")
              }

            } else if (this.info.brew.brewLevel === 2) {
              let roll = Math.floor(Math.random() * 100)
              brewObject.herbs -= 3
              if (roll < 11) {
                timeObject.currentTime++

                statsObject.health -= 20
                statsObject.sanity -= 10
                statsObject.bloodlust += 10
                statsObject.suspicion += 10

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("That potion wasn't right. Wasn't right at all. --Health -Sanity +Bloodlust +Suspicion")
              } else if (roll < 50) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.brewObject.brewLevel++
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("You tried something new today - and it worked! You think you understand how to actually brew them better.")
              }

            } else if (this.info.brew.brewLevel === 3) {
              let roll = Math.floor(Math.random() * 100)
              brewObject.herbs -= 3
              if (roll < 11) {
                timeObject.currentTime++

                statsObject.health -= 20
                statsObject.sanity -= 10
                statsObject.bloodlust += 10
                statsObject.suspicion += 10

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("That potion wasn't right. Wasn't right at all. --Health -Sanity +Bloodlust +Suspicion")
              } else if (roll < 50) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.brewObject.brewLevel++
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("You tried something new today - and it worked! You think you understand how to actually brew them better.")
              }

            } else if (this.info.brew.brewLevel === 4) {
              let roll = Math.floor(Math.random() * 100)
              brewObject.herbs -= 3
              if (roll < 11) {
                timeObject.currentTime++

                statsObject.health -= 20
                statsObject.sanity -= 10
                statsObject.bloodlust += 10
                statsObject.suspicion += 10

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("That potion wasn't right. Wasn't right at all. --Health -Sanity +Bloodlust +Suspicion")
              } else if (roll < 50) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.brewObject.brewLevel++
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("You tried something new today - and it worked! You think you understand how to actually brew them better.")
              }

            } else if (this.info.brew.brewLevel === 5) {
              let roll = Math.floor(Math.random() * 100)
              brewObject.herbs -= 3
              if (roll < 11) {
                timeObject.currentTime++

                statsObject.health -= 20
                statsObject.sanity -= 10
                statsObject.bloodlust += 10
                statsObject.suspicion += 10

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("That potion wasn't right. Wasn't right at all. --Health -Sanity +Bloodlust +Suspicion")
              } else if (roll < 50) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Failure'
                this.info.logBox.unshift("Failure")
              } else if (roll < 90) {
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Success'
                this.info.logBox.unshift("Success")
              } else if (roll < 101) {
                this.info.endGame = true
                this.diceOutput = 'Epic success'
                this.info.logBox.unshift("Hope rushing through you, you drink the potion. A rush of power flows through you, and you know you did it. No more will you be plauged by the curse of the wolf.")
              }

            }
        } else {
            this.info.logBox.unshift("You consider brewing something, but realize you don't have enough supplies to do so. Maybe you should try your luck gathering some herbs.")
        }

        this.handleTime(timeObject)
        this.handleStats(timeObject, statsObject)

        this.info.stats = statsObject
        this.info.time = timeObject
        this.info.brew = brewObject

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
