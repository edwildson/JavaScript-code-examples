let person = {
  _id: "4jasb42b2bf2b32bbf2",
  index: 3,
  processed: false,
  cart: ["item1", "item2", "item3"],
  email: "example@example.com",
  name: "Edwildson Coelho Rodrigues",
  cartId: 123,
};

{
  let _id, processed, cart; // Propriedades que serão deletadas
  ({ _id, processed, cart, ...person } = person);
}

console.log(person);
