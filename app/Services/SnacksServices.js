import { appState } from "../AppState.js"
import { Snack } from "../Models/Vendr.js"
import { saveState } from "../Utils/Store.js"
import { setHTML } from "../Utils/Writer.js"

class SnackServices {

  getSnack(name) {
    if (appState.money > 0) {
      appState.money--
      let snacks = appState.snacks.find(snack => snack.name == name)
      snacks.qty++
      appState.mySnacks = [...appState.mySnacks, snacks]
      saveState('mySnacks', appState.mySnacks)
      appState.selectedSnack = snacks
    } else {
      console.log("no coins")
    }
  }

}



export const snackServices = new SnackServices()