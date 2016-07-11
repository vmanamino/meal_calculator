var Diner = function(name){
  this.name = name;
  this.meals = [];
  this.bill = 0;
  this.tax = 0;
  this.total = this.bill + this.tax
}

Diner.prototype.meal = function(meal){
  this.meals.push(meal)
  for (var i = 0; i < this.meals.length; i++){
    this.bill += this.meals[i].price
  }
  this.tax = this.bill * .07;
  this.tax = this.tax.toFixed(2)
}

var Meal = function(dish, price){
  this.dish = dish;
  this.price = price;
}

var newOne = new Diner('Jack');
var shrimp = new Meal('shrimp with pasta', 10.50);
var steak = new Meal('steak with potatoes', 15.75);
newOne.meal(shrimp);
newOne.meal(steak);

console.log(newOne.bill)