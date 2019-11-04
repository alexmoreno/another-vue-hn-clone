export function isEmpty(obj: object): boolean {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}
