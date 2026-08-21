import { formInputs } from "./lesson2-export_typed_fn_1";


// Writing this line instead will cause type error
// const tryIputs: formInputs = (x:any, y:any, z:any) => {
const tryInputs = (x:any, y:any, z:any) => {
  const result = x + y + z;
  return `${x} + ${y} + ${z} = ${result}`;
}

console.log(tryInputs(2, 3, 4));