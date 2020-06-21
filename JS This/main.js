// Exercise 1
exDivider(1);

const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      alert('Im no longer hungry!')
    }
  }
}

person.feed() //should alert "I'm no longer hungry"


// Exercise 2
exDivider(2);


const pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);


// Exercise 3
exDivider(3);

const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel:0,
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());


// Exercise 4
exDivider(4);


const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function(amount){
    this.coinCount -= amount;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



// Exercise 5
exDivider(5);

const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  alert(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);



// Exercise 6
exDivider(6);


const coffeeShop = {
  beans: 100,
  money: 50,
  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement: 15, price: 7},
    frenchPress: {beanRequirement: 12, price: 6},
  },
  buyBeans: function(numBeansToBuy){
    if(this.money >= numBeansToBuy){
      this.money -= numBeansToBuy
      this.beans += numBeansToBuy
      alert(`Just baught ${numBeansToBuy} beans`)
    } else {
      alert(`You asked to buy ${numBeansToBuy} beans, but you have only ${this.money} coins...`)
    }
  },
  buyDrink: function(drinkType){
    if(this.makeDrink(drinkType)){
      this.money += this.drinkRequirements[drinkType].price
      this.beans -= this.drinkRequirements[drinkType].beanRequirement
    }else{
      alert('Sorry')
    }
  },
  makeDrink: function (drinkType) {
    if(this.drinkRequirements[drinkType]) {
      if(this.beans-this.drinkRequirements[drinkType].beanRequirement >=0){
        this.beans -= this.drinkRequirements[drinkType].beanRequirement
        alert(`Enjoy Your ${drinkType}`)
        return true
      }else{
        alert("Sorry, we're all out of beans!")
        return false
      }
    }
    else {
      alert(`Sorry, we don't make ${drinkType}`)
      return false
    }
  }
}

coffeeShop.makeDrink("latte"); 
console.log(coffeeShop)
coffeeShop.makeDrink("americano");
console.log(coffeeShop)
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
console.log(coffeeShop)
coffeeShop.makeDrink("doubleShot");
console.log(coffeeShop)
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
console.log(coffeeShop)
coffeeShop.buyBeans(100) // Should Alert: You asked to buy 100 beans, but you have only 50 coins...
console.log(coffeeShop)
coffeeShop.buyBeans(25) // Just baught 25 beans
console.log(coffeeShop)
coffeeShop.buyBeans(45) // Should Alert: You asked to buy 45 beans, but you have only 25 coins...
console.log(coffeeShop)
coffeeShop.makeDrink("frenchPress"); // Should Alert: Enjoy Your frenchPress
console.log(coffeeShop)
coffeeShop.makeDrink("doubleShot"); // Should Alert: Enjoy Your doubleShot
console.log(coffeeShop)
coffeeShop.makeDrink("doubleShot"); // Should Alert: Sorry, we're all out of beans
console.log(coffeeShop)

coffeeShop.buyDrink("doubleShot")

console.log(coffeeShop)

// Exetension 1
exDivider('- Extension 1');


function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}

