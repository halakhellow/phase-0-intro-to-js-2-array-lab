let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = () => cats.push("Ralph");
let destructivelyPrependCat = () => cats.unshift("Bob");

let destructivelyRemoveLastCat = () => cats.pop();
let destructivelyRemoveFirstCat = () => cats.shift();

let appendCat = () => { return [...cats, "Broom"] }
let prependCat = () => { return ["Arnold", ...cats] }