const objectConverter = {
    arrayToMap(array) {
      return new Map(array.map((item, index) => [index, item]));
    },
    arrayToSet(array) {
         return new Set(array);
    },
    setToMap(array) {
    return new Map(Array.from(array).map((item, index) => [index, item]));
    },
    setToArray(array) {
    return [...array];
    },
    mapToArray(array) {
        const temp = [];
        for (const value of array) {
          temp.push(value[1]);
        }
        return temp;
    },
    mapToSet(array) {
        const setArray = [];
        array.forEach(value => setArray.push(value));
        return new Set(setArray);
    },
}

export default objectConverter;

