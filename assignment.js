// problem 1
function radianToDegree(radian) {
  const constantValue = Math.PI;
  radian = radian * (180 / constantValue);
  console.log(radian);
}
radianToDegree(5);

// problem 2
function isJavaScriptFile(userGivenFile) {
  if (userGivenFile.includes(".js")) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isJavaScriptFile("PHero.js");

function oilPrice(diesel, petrol, octane) {
  let sumOfDiesel = 0;
  const dieselPerLiter = 114;
  sumOfDiesel = dieselPerLiter * diesel;
  let sumOfPetrol = 0;
  const pertrolPerLiter = 130;
  sumOfPetrol = pertrolPerLiter * petrol;
  let sumOfOctane = 0;
  const octanePerLiter = 135;
  sumOfOctane = octanePerLiter * octane;
  let totalCost = sumOfDiesel + sumOfPetrol + sumOfOctane;
  console.log(totalCost);
  return totalCost;
}
oilPrice(5, 5, 5);

// problem 4
function publicBusFare(totalPeople) {
  let reservedBus = 50;
  let remainingPeople = totalPeople % reservedBus;
  let microbus = 11;
  let remainingPeopleAfterBus = remainingPeople % microbus;
  let remainingPeopleAfterMicrobus = remainingPeopleAfterBus % remainingPeople;
  let publicBusCost = remainingPeopleAfterMicrobus * 250;
  console.log(publicBusCost);
}
publicBusFare(263);
//problem 5
function isBestFriend(obj1, obj2) {
  if (person1.name == person2.friend && person2.name == person1.friend) {
    console.log("true");
  } else {
    console.log("false");
  }
}

const person1 = {
  name: "Tom",
  friend: "Rock",
};
const person2 = {
  name: "Rock",
  friend: "Tom",
};
isBestFriend(person1, person2);
