const person = {
  name: "Kim NewBorn",
  gender: "Female",
  age: 51,
  NumberOfChildern: 2,
  Employed: true,
};

// Access Object Using Dot notation
var personName = person.name; // Kim NewBorn
var personGender = person.gender; // Female
var personAge = person.age; // 51
var personNumberOfChildern = person.NumberOfChildern; //2
var personStatus = person.Employed; // Employed

const testObject = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

//Access Object Using Braket notation

var entreeValue = testObject["an entree"]; // hamburger
var mySideValue = testObject["my side"]; //veggies
var drinkValue = testObject["my drink"]; // water

const playerObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = playerObj[playerNumber]; // Montana

var phone = {
  name: "iphone",
  version: "4.4.4",
  color: "black",
  price: 154.98,
  Owners: ["Apple"],
};

// change values of properties in object
phone.name = "android";
phone.Owners = ["Google"];
phone["price"] = 125.95;
phone["color"] = "White";
console.log(phone);

// Delete Properties from object

delete phone["version"];

console.log(phone);

// Objects in a function is shorter than a long switch statement

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Admas",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxrot: "frank",
  };

  result = lookup[val];
  return result;
}

var codeNameOne = phoneticLookup("charlie"); // Chicago
var codeNameTwo = phoneticLookup("bravo"); // Boston
var codeNameThree = phoneticLookup("foxrot"); // frank

// Testing objects for properties

var myObj = {
  gift: "poney",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

var resultOfCheck01 = checkObj("Hello"); // Not Found
var resultOfCheck02 = checkObj("pet"); // kitten

// Manipulating Complex Objects

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },

  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["Youtube video!!"],
  },
];

// Nested Objects

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      truck: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"]; //maps
var passengerSeatContents = myStorage.car.inside["passenger seat"]; // crumbs

var truckContents = myStorage.car.outside["truck"]; // jack

var Plants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "danelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var oneTree = Plants[0].list[2]; // dnaelion
var secondTree = Plants[1].list[1]; // pine

//---------------------------------------- Record Collection ------------------------------------------

var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

// Keep a copy of the collection
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

updateRecords("2468", "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

// Prevent data Mutation

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  // Prevent Object from chaning
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS;
}

const PI = freezeObj();

console.log(PI);

// Use Destructuring Assignment to Assigne Variables from Objects

let voxel = { x: 3.6, y: 7.4, z: 6.54 };

let x = voxel.x;
let y = voxel.y;
let z = voxel.z;

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURE = {
  today: 77.5,
  tomorrow: 79,
};

function getTemperatureOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTemperatureOfTmrw(AVG_TEMPERATURE)); // 79

// Destructuring Assignment with Nested Objects

const LOCAL_FORCAST = {
  today: { min: 72, max: 84.6 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));

// Old Version -> function in object

const bicycle = {
  gear: 2,
  setGear: function (newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);

// New Version -> function in object

const bike = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};

bike.setGear(3);
console.log(bike.gear);

// Use class Syntax to Contructor Function

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// Use getters and setters to Control Access to an Object

//get - to define a getter method to get the property value
// getter -> access the value

//set - to define a setter method to set the property value
// setter -> change value

class Book {
  constructor(author) {
    this._author = author;
  }

  //getter
  get writer() {
    return this._author;
  }

  //setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

function makeClassNow() {
  class Thermostate {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostate;
}

const Thermostate = makeClassNow();
const thermos = new Thermostate(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

const {
  crew: {
    captain: { degree: computerDegree },
  },
} = spaceship;
const {
  crew: { medic: doctor },
} = spaceship;
const {
  crew: {
    medic: { name: doctorName },
  },
} = spaceship;
