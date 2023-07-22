type constructor<T> = {
  new (...args: any[]): T
  inject?: Array<constructor<any>>
}

export default constructor
