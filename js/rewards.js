// Global script for the rewards system
  // This script makes it possible to verify (by creating a value) how many rewards a user has unlocked. The first time the app starts, the value of rewardUnlocked
  // will be initialized to 0. Once a user finishes a survey, the code in the finished survey screen will
  // add the value of 1 to the original value. The current version of the code stores this value in the local storage of the device/browser.

      // Verify if the user already has the value in local storage
      if (localStorage.getItem('rewardUnlocked') === null) {
        // If this is not the case, the value for the unlocked rewards will be added to local storage with a standard value of 0
        localStorage.setItem('rewardUnlocked', 0);
        console.log(rewardUnlocked);
  }