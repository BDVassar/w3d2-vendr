import { Value } from "./Models/Value.js"
import { Snack } from "./Models/Vendr.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  money = 0
  selectedSnack = null

  snacks = [
    new Snack({
      name: 'Carrot',
      price: 1,
      img: 'https://images.unsplash.com/photo-1600623632360-cb8918e1c754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80',
      qty: 0
    }),
    new Snack({
      name: 'Beet',
      price: 1,
      img: 'https://images.unsplash.com/photo-1591640943880-105f7fbcaa24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80',
      qty: 0
    }),
    new Snack({
      name: 'Peppers',
      price: 1,
      img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      qty: 0
    }),
    // new Snack({
    //   name: 'Apple',
    //   price: 1.00,
    //   img: 'https://images.unsplash.com/photo-1600623632360-cb8918e1c754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80'
    // }),
    // new Snack({
    //   name: 'Banana',
    //   price: 1.25,
    //   img: 'https://images.unsplash.com/photo-1600623632360-cb8918e1c754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80'
    // }),
    // new Snack({
    //   name: 'Pear',
    //   price: .60,
    //   img: 'https://images.unsplash.com/photo-1600623632360-cb8918e1c754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80'
    // }),
  ]

  mySnacks = loadState('mySnacks', [Snack])
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
