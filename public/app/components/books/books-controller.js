import BooksService from "./books-service.js";

let _booksService = new BooksService()

function draw() {
  let template = ''
  _booksService.books.forEach(item => {
    template += `
    <div class= "col-4">
      <div class= "card">
        <img class="card-img-top" src="${item.imgURL}">
        <p class="card-body">Title: ${item.title} </p> 
        <p class="card-body">Author: ${item.author} </p> 
        <p class="card-body">Price: $${item.price} </p> 
        <a href= "${item.purchaseURL}" target= "_blank"> Purchase Here </a>
        <button onclick="app.controllers.booksController.deleteBook('${item._id}')">Remove Item</button>
      </div>
    </div>
    `
  })
  document.getElementById('books').innerHTML = template
}


export default class BooksController {
  constructor() {
    _booksService.getBooks(draw)
  }

  addBooksFromForm(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      imgURL: form.booksImgURL.value,
      title: form.booksTitle.value,
      author: form.booksAuthor.value,
      price: form.booksPrice.value,
      purchaseURL: form.booksPurchaseURL.value

    }
    _booksService.addBooksFromForm(formData, draw)
    form.reset()
  }

  deleteBook(itemId) {
    _booksService.deleteBook(itemId, draw)
  }

}
