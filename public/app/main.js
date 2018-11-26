import ApparelController from "./components/apparel/apparel-controller.js";
import ElectronicsController from "./components/electronics/electronics-controller.js";
import BooksController from "./components/books/books-controller.js";


class App {
  constructor() {
    this.controllers = {
      apparelController: new ApparelController(),
      electronicsController: new ElectronicsController(),
      booksController: new BooksController()
    }
  }
}

// @ts-ignore
window.app = new App()