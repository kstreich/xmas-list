let api = axios.create({
  baseURL: "/api/electronics"
})

let _electronics = []

function handleError(err) {
  throw new Error(err)
}

export default class ElectronicsService {

  getElectronics(callback) {
    api.get('').then(res => {
      console.log(res.data)
      _electronics = res.data
      callback()
    })
  }

  addItemFromForm(formData, callback) {
    if (!formData) {
      throw new Error("You must supply form data")
    }
    api.post('', formData)
      .then(res => {
      })
      .catch(handleError)
    this.getElectronics(callback)
  }

  get electronics() {
    return _electronics
  }

  deleteItem(itemId, draw) {
    api.delete(itemId)
      .then(res => {
        this.getElectronics(draw)
      })
  }
}