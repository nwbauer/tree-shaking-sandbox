// my-module index
import {subtract} from './lib-one'
import {multiply} from './lib-two'

const x = 567;

export {x}
export function add(x,y) {
  const id = "add";
  return x+y;
}

export class Something {
  sayHi () {
    return "hi";
  }
}

export {subtract, multiply}

