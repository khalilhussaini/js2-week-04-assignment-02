
const isTheWordSplit = (pArray) => {
    let theWord = pArray[0];
    let array = pArray[1].split(",");
    for (let index = 0; index < array.length; index++) {
        for (let k = 0; k < array.length; k++) {
            if (array[index] + array[k] == theWord) {
                return array[index] + "," + array[k];
            }
        }
    }
    return "not possible";
};

export { isTheWordSplit };