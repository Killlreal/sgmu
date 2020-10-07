let user = {
  name: "Вася",
};

let id = Symbol("idd");

user[id] = 1;
alert(user[id]);
