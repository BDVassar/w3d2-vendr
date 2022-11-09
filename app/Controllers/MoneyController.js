import { appState } from "../AppState.js";
import { moneyServices } from "../Services/MoneyServices.js";
import { setText } from "../Utils/Writer.js";

function drawMoney() {
  setText('money', appState.money)
}

export class MoneyController {
  constructor() {
    appState.on('money', drawMoney)
    drawMoney()
  }


  getMoney() {
    moneyServices.getMoney()
  }
}