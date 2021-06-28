// sums all numbers in the array
const sum = arr => {
    return arr.reduce((prev, next) => prev + next, 0);
}

// multiplies elements in the array
const multiply = arr => {
    return arr.reduce((prev, next) => prev * next, 1);
}

// reverses string
const reverse = str => {
    return str.split("").reverse().join("");
}

// returns list of words whose length is greater than a specicfic number
const filterLongWords = (arr, i) => {
    return arr.filter(str => str.length > i);
}