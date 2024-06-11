function makeTransaction(quantity, pricePerDroid) { 
    return `You ordered ${quantity} droids worth ${pricePerDroid} credits!`;
};

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(5, 1000));
console.log(makeTransaction(5, 500));