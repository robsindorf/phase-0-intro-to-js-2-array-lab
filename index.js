const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newCat) {
    cats.push(newCat);
}

function destructivelyPrependCat(firstCat) {
    cats.unshift(firstCat);
}

function destructivelyRemoveLastCat(lastKitty) {
    cats.pop(lastKitty);
}

function destructivelyRemoveFirstCat(firstKitty) {
    cats.shift(firstKitty);
}

function appendCat(newCatName) {
    const copyCat = [...cats, "Broom"];
    return copyCat
}

function prependCat(newFirstCat) {
    const gatoCat = ["Arnold", ...cats];
    return gatoCat
}

function removeLastCat() {
    const catRemover = cats.slice(0, 2);
    return catRemover
}

function removeFirstCat() {
    const catNapper = cats.slice(1, cats.length);
    return catNapper
}