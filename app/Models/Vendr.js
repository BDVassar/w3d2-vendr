
export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.img = data.img
    this.qty = data.qty
  }

  get SnackTemplate() {
    return `<div class="col-12 col-md-3 card shadow p-3 text-center justify-content-center align-items-center bg-dark text-light m-2">
          <img class="img-fluid snackImg" src="${this.img}" alt="">
          <h1>${this.name}</h1>
          <h4>${this.price}</h4>
          <button class="btn btn-primary rounded-pill" onclick="app.snacksController.getSnack('${this.name}')">Purchase Snack</button>
        </div>`
  }

  get SelectedSTemplate() {
    return `
    <div class="col-12 col-md-3 card shadow p-3 text-center justify-content-center align-items-center bg-dark
          text-light m-2">
          <img class="img-fluid snackImg" src="${this.img}" alt="">
          <h1>${this.name}</h1>
          <h4>${this.qty}</h4>
          <button class="btn btn-primary rounded-pill mdi mdi-delete"
            onclick="app.snacksController.removeSnack('${this.name}')"></button>
      </div>`
  }
}
