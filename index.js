let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = () => cats.push("Ralph");
let destructivelyPrependCat = () => cats.unshift("Bob");

let destructivelyRemoveLastCat = () => cats.pop();
let destructivelyRemoveFirstCat = () => cats.shift();

let appendCat = () => { return [...cats, "Broom"] }
let prependCat = () => { return ["Arnold", ...cats] }

let removeLastCat = () => { return cats.slice(0, 2) }
let removeFirstCat = () => { return cats.slice(1) }