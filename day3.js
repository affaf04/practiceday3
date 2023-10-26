////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i >= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (i = 0; i >= 200; i += 2) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let x = 0; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++;

wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", " Raphael", "Michaelangelo"];
for (const turtle of ninjaTurtles) {
  const turtleNames = turtle.toUpperCase();
  console.log(turtleNames);
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies[8]);
favMovies.sort();
//==> it sorting the array in alphabetical order
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
// ==> to add in the front of array
favMovies.unshift("Spirted Away");
let index = favMovies.indexOf("Django Unchained");
favMovies.splice(index, 1, "Avatar");
const half = Math.ceil(favMovies.length / 2);
const firstHalf = favMovies.slice(0, half);
const secondHalf = favMovies.slice(half);
console.log(favMovies);
console.log(firstHalf);
console.log(secondHalf);
console.log(favMovies.indexOf("Fast and Furious"));
// we just modifying not reassign

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

let index1 = whereIsWaldo.indexOf("Eggbert");
whereIsWaldo.splice(index, 1);
whereIsWaldo[2][2] = "No One";
console.log(whereIsWaldo[3][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
let kittyTalk = [
  "..human..why you taking pictures of me?",
  "the catnip made me do it",
  "why does the red dot always get away",
];

for (i = 0; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");

  if (i % 2 === 0) {
      meow = Math.floor(Math.random() * kittyTalk.length);
      console.log(kittyTalk[meow]);
    }

}
   
////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

let s = nums.sort(function(a, b) {
    return a - b;
  });
function median(s) {
    const mid = Math.floor(s.length / 2);
    if ( s.length % 2 ===0){
     let midValues = (s[mid] + s[mid + 1]) / 2;
     console.log(midValues);
    } else {
        console.log(s[mid]);
    }
}
median(s);

///////////////////////// Hungry for more //////////////////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  const kristynsShoe = kristynsCloset.shift();
  thomsCloset[2].push(kristynsShoe);
  ///// DressUp
  function getRandomDress () {
    randomDress = Math.floor(Math.random() * kristynsCloset.length);
    randomOutfit = Math.floor(Math.random() * thomsCloset.length)
    return [randomDress, randomOutfit]  }

  const outfit1 = `Kristyn will be wearing her ${randomDress()[0]} and Thom will be wearing his ${randomOutfit()[1]}.`;
  const outfit2 = `Kristyn will be wearing her ${randomDress()[0]} and Thom will be wearing his ${randomOutfit()[1]}.`;
  const outfit3 = `Kristyn will be wearing her ${randomDress()[0]} and Thom will be wearing his ${randomOutfit()[1]}.`;


  console.log("Dirty Laundry:");
  for (let i = 0; i < kristynsCloset.length; i++) {
      console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
  }
  