let name = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

let printFullName = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName);
};

let name2 = {
  firstName: "MS",
  lastName: "Dhoni",
};

// Using call method in JavaScript we can borrow the method from another object and use it in the current object.
printFullName.call(name, "Mumbai", "Maharashtra");
printFullName.call(name2, "Ranchi", "Jharkhand");

// // apply method is similar to call method but the only difference is that it takes the arguments in the form of an array.
printFullName.apply(name, ["Mumbai", "Maharashtra"]);
printFullName.apply(name2, ["Ranchi", "Jharkhand"]);

// bind method is similar to call method but the only difference is that it returns copy of the method which can be called later
let printMyName = printFullName.bind(name, "Mumbai", "Maharashtra");
printMyName();
