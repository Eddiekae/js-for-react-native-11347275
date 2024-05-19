
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the even number
            return num * num;
        } else {
            // Triple the odd number
            return num * 3;
        }
    });
}


const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); 

module.exports = processArray;

function formatArrayStrings(stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
        throw new Error("Both arrays must have the same length");
    }

    return stringArray.map((str, index) => {
        if (numberArray[index] % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}

const strings = ["Hello", "World", "JavaScript", "is", "Awesome"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);

module.exports = { processArray, formatArrayStrings };

