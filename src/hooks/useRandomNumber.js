const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const useRandomNumber = (numLength) => {
    const newNumber = [];
    for (let index = 0; newNumber.length < numLength; index++) {
        let numberToAdd = random(1, 10);
        if (newNumber.includes(numberToAdd)) { continue; }
        newNumber.push(numberToAdd);
    }
    return newNumber;
};

export default useRandomNumber;
