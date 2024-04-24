const calculator = (firstValue, secondValue, calculate, callback) => {
      console.log('calculate',calculate);
    if (calculate === "add") {
        console.log(`Sum is ${firstValue + secondValue}`)
        callback(undefined, `Sum of ${firstValue} and ${secondValue} is :  ${firstValue + secondValue}`);
    } else if(calculate === "subtract") {
        callback(undefined, `Subtraction of ${firstValue} and ${secondValue} is :  ${firstValue - secondValue}`);
    } else if (calculate === "divide") {
        callback(undefined, `Division of ${firstValue} and ${secondValue} is :  ${firstValue/secondValue}`);
    } else if(calculate === "multiplication") {
        callback(undefined, `Multiplication of ${firstValue} and ${secondValue} is :  ${firstValue*secondValue}`);
    } else {
        callback(`Cant'calculate ${calculate}`)
    }
}

module.exports = calculator;