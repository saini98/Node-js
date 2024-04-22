const calculator = (firstValue, secondValue, calculate) => {

    if (calculate === "add") {
        console.log(firstValue + secondValue)
        return firstValue + secondValue;
    } else if(calculate === "subtract") {
        return firstValue - secondValue;
    } else if (calculate === "divide") {
        return firstValue/secondValue;
    } else if(calculate === "multiplication") {
        return firstValue*secondValue;
    } else {
        return `Cant'calculate ${calculate}`
    }
}

module.exports = calculator;