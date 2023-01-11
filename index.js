const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const cat = [...cats];
    cat.push(name);
    return cat;
}

function prependCat(name){
    let cat = [...cats];
    cat.unshift(name);
    return cat;
}

function removeLastCat(){
    const cat = [...cats];
    cat.pop();
    return cat;
}

function removeFirstCat(){
    const cat = [...cats];
    cat.shift();
    return cat;
}