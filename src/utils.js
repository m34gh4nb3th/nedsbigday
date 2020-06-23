export const getRandom = (arr, n) => {
    let result = new Array(n);
    let len = arr.length;
    let taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export const capitalize = (name) => {
    let lowercase = name.split(' ');
    let capitalized = [];
    for (let name of lowercase) {
        capitalized.push(name.replace(name[0], name[0].toUpperCase()));
    }
    return capitalized.join(' ');
};