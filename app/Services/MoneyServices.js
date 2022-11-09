import { appState } from "../AppState.js"

class MoneyServices {

  getMoney() {
    appState.money++
  }

}

export const moneyServices = new MoneyServices()