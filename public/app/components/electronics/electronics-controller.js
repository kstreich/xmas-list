import ElectronicsService from "./electronics-service.js";

let _elecService = new ElectronicsService()

function draw() {
  let template = ''
  _elecService.electronics.forEach(item => {
    template +=
      `
    <div class= "col-4">
      <div class= "card">
        <img class="card-img-top" src="${item.imgURL}"/>
        <h4 class="card-title">${item.brand} ${item.name}</h4>
        <p class="card-body">Price: $${item.price}</p>
        <a class="card-body" href= "${item.purchaseURL}"> Purchase Here </a>
        <button onclick="app.controllers.electronicsController.deleteItem('${item._id}')">Remove Item</button>

      </div>
    </div>
    `
  })
  document.getElementById('electronics').innerHTML = template
}

export default class ElectronicsController {
  constructor() {
    _elecService.getElectronics(draw)
  }

  addItemFromForm(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      brand: form.electronicsBrand.value,
      name: form.electronicsName.value,
      imgURL: form.electronicsImg.value,
      price: form.electronicsPrice.value,
      purchaseURL: form.electronicsPurchaseURL.value
    }
    _elecService.addItemFromForm(formData, draw)
    form.reset()
  }

  deleteItem(itemId) {
    _elecService.deleteItem(itemId, draw)
  }

}