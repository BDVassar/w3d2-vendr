import { appState } from "../AppState.js";
import { Snack } from "../Models/Vendr.js";
import { snackServices } from "../Services/SnacksServices.js";
import { setHTML } from "../Utils/Writer.js";


function drawSnacks() {
  let snacks = appState.snacks.sort((a, b) => a.name - b.name)
  let template = ''
  snacks.forEach(snack => template += snack.SnackTemplate)
  setHTML('vendrMachine', template)
}

function drawSelected() {
  let seclected = appState.selectedSnack
  setHTML('seclectedSnack', seclected.SelectedSTemplate)
}

function drawMySnacks() {
  let selected = appState.mySnacks
  let template = ''
  selected.forEach(snack => template += snack.SelectedSTemplate)
  setHTML('mySnack', template)
}

export class SnacksController {
  constructor() {
    appState.on('snacks', drawSnacks)
    appState.on('selectedSnack', drawSelected)
    appState.on('mySnacks', drawMySnacks)
    drawSnacks()
  }

  getSnack(name) {
    snackServices.getSnack(name)
    console.log(name)
  }


}