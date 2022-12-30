// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const cot = [...cats, name];
    return cot;
}
function prependCat(name){
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}
function removeLastCat(){
    const copy = cats.slice(0, cats.length-1);
    return copy;
}
function removeFirstCat(){
   const cat = cats.slice(1);
   return cat;
}





