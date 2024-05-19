
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
