let cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = (catName) => cats.push(catName);
let destructivelyPrependCat = (catName) => cats.unshift(catName);

let destructivelyRemoveLastCat = () => cats.pop();
let destructivelyRemoveFirstCat = () => cats.shift();

let appendCat = (catName) => { return [...cats, catName] }
let prependCat = (catName) => { return [catName, ...cats] }

let removeLastCat = () => { return cats.slice(0, 2) }
let removeFirstCat = () => { return cats.slice(1) }