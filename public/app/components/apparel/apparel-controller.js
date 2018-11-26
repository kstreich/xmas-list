import ApparelService from "./apparel-service.js";

let _apparelService = new ApparelService()

function draw() {
  let template = ''
  _apparelService.apparel.forEach(item => {
    template +=
      `
    <div class= "col-4">
      <div class= "card">
        <img class="card-img-top" src="${item.imgURL}">
        <p class="card-body">Size: ${item.size} </p> 
        <p class="card-body">Color: ${item.color} </p> 
        <p class="card-body">Price: $${item.price} </p> 
        <a href= "${item.purchaseURL}" target= "_blank"> Purchase Here </a>
        <button onclick="app.controllers.apparelController.deleteItem('${item._id}')">Remove Item</button>
        
      </div>
    </div>
    `
  })
  document.getElementById('apparel').innerHTML = template
}


export default class ApparelController {
  constructor() {
    _apparelService.getApparel(draw)
  }

  addApparelFromForm(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target //the element that triggers the event
    let formData = {
      imgURL: form.apparelURL.value,
      color: form.apparelColor.value,
      size: form.apparelSize.value,
      price: form.apparelPrice.value,
      purchaseURL: form.apparelPurchaseURL.value
    }
    _apparelService.addApparelFromForm(formData, draw)
    form.reset()
  }

  deleteItem(itemId) {
    _apparelService.deleteItem(itemId, draw)
  }

}