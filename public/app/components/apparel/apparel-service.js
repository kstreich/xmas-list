let api = axios.create({
  baseURL: "/api/apparel"
})

let _apparel = []

function handleError(err) {
  throw new Error(err)
}



export default class ApparelService {

  getApparel(callback) {
    api.get('').then(res => {
      console.log(res.data)
      _apparel = res.data
      callback()
    })
  }

  addApparelFromForm(formData, callback) {
    if (!formData) {
      throw new Error("You must supply form data")
    }
    api.post('', formData)
      .then(res => {
      })
      .catch(handleError)
    this.getApparel(callback)
  }

  deleteItem(itemId, draw) {
    api.delete(itemId)
      .then(res => {
        this.getApparel(draw)
      })
  }

  get apparel() {
    return _apparel
  }

}