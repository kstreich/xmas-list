let api = axios.create({
  baseURL: "/api/books"
})

let _books = []

function handleError(err) {
  throw new Error(err)
}

export default class BooksService {

  getBooks(callback) {
    api.get('').then(res => {
      console.log(res.data)
      _books = res.data
      callback()
    })
  }

  addBooksFromForm(formData, callback) {
    if (!formData) {
      throw new Error('You must supply form data')
    }
    api.post('', formData)
      .then(res => {
      })
      .catch(handleError)
    this.getBooks(callback)
  }

  deleteBook(itemId, draw) {
    api.delete(itemId)
      .then(res => {
        this.getBooks(draw)
      })

  }

  get books() {
    return _books
  }

}