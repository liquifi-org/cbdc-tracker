export class ClonerService {
  clone (value) {
    return value ? JSON.parse(JSON.stringify(value)) : value
  }
}
