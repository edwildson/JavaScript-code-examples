const myObject = {
  a: 10,
  b: "a",
  nestedObject: {
    c: true,
    d: 5,
  },
};

const {
  a,
  b,
  nestedObject: { c, d, e = "Valor padrão" },
} = myObject;
console.log(a, b, c, d, e);
