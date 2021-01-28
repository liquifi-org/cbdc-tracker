export class NotFoundError extends Error {
  constructor (...args) {
    super(...args)
    this.name = NotFoundError.name
    this.message = this.message || NotFoundError.name
  }
}
