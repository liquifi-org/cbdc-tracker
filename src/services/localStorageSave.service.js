export class LocalStorageSaveService {
  save (data) {
    localStorage.setItem('store', JSON.stringify(data))
  }

  load () {
    const store = localStorage.getItem('store')
    return store ? JSON.parse(store) : null
  }
}
