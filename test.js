brew: function(timeObject, brewObject, statsObject) {
        // Brew is an action that checks if your inventory has enough herbs to brew (>=3), then uses your brewing level
        // to roll a dice & publish the result to the logBox. Finally, it modifies the currentTime and stats in data.
        // Brewing is a level based system, that has a chance to move up a level to unlock better potions. The top level
        // is the cure. This prevents random win in 1st try, and still allows for randomness

        timeObject.currentTime++

        if (this.info.brew.herbs >= 3) {

            if (this.info.brew.brewLevel === 0) {
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
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
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
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
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
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
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
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
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
                statsObject.health += 5
                statsObject.sanity += 10
                statsObject.bloodlust += 5
                statsObject.suspicion -= 5

                this.diceOutput = 'Epic failure'
                this.info.logBox.unshift("Epic failure")
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