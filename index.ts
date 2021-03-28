// Types
export type Collection<T, A> = T[]
export const PrimaryKeyType = 'wow i primary key'

// Decorators
export function Entity (...args: any[]) {
  return function () {}
}
export function PrimaryKey (...args: any[]) {
  return function () {}
}
export function Property (...args: any[]) {
  return function () {}
}
export function ManyToOne (...args: any[]) {
  return function () {}
}
export function OneToMany (...args: any[]) {
  return function () {}
}