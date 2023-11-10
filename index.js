

//1.Declare an object named dinner that uses the purchased food as the keys and the price of the food for the values.


const dinner = {
  cheeseburger : 12,
  steak : 20,
  soup : 8,
  macAndCheese : 14,
  soupAndSalad : 16
};

console.log('Diner Object',dinner);

//2. Using the dinner object, list all of the different foods that were eaten during the dinner.

console.log('Different Foods',Object.keys(dinner));

//3. Using the dinner object, list the prices of the meals eaten during the dinner.

console.log('Prices',Object.values(dinner));

//4. Using what we know about objects, add the values of the dinner object to calculate the total cost of the meal. 

let prices = Object.values(dinner);
console.log('prices',prices);
let totalPrice = 0;
prices.forEach(price => {
   totalPrice = totalPrice + price;
});
console.log('Total Price::',totalPrice);


//another method
totalPrice = 0;
for(const key in dinner) {
  console.log('dinner[key]',dinner[key]);
  totalPrice += dinner[key];
}

console.log('TotalPrice using Method2::', totalPrice);


//5. Convert the answer for the previous question into a function that returns the total cost of any object that is shaped like dinner.

function findTotal(obj) {
  let totalPrice = 0;
  for (const key in obj) {
    totalPrice += obj[key];
  }
  return totalPrice;
}

console.log('TotalPrice of all the meals:', findTotal(dinner));