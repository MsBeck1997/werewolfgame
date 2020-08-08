export const Actions = {

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


}