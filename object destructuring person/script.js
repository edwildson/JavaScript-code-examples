const personInfo = ({
  name: name,
  age: personAge,
  location: { country: origin, city: homeCity },
  friendsQty = 0,
  recordCreatedAt = new Date().getFullYear(),
}) => {
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    recordCreatedAt,
  };
};

const person = {
  name: "Edwildson",
  age: 55,
  location: {
    country: "Brasil",
    city: "Juazeiro",
  },
};

console.log(personInfo(person));
