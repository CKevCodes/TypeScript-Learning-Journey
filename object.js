const getThis = () => {
  return this;
}

const obj1 = {
  name: "Nathan",
  age: 24
}

obj1.getThis = getThis;

console.log(obj1.getThis());