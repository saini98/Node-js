console.log('Calculator');

const calculatorForm = document.querySelector('form');
const operation = document.querySelector('#operation');
const firstValue = document.querySelector('#firstValue');
const secondValue = document.querySelector('#secondValue');
const total = document.querySelector('#total');

console.log(operation, firstValue, secondValue)

calculatorForm.addEventListener('submit', (e) => {
    console.log(firstValue.value, 'submit');
    e.preventDefault();
    const operate = operation.value;
    const first = firstValue.value;
    const second = secondValue.value;


    fetch(`http://localhost:3000/calculation?firstValue=${first}&secondValue=${second}&calculate=${operate}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                errorMessage.textContent = data.error;
            } else {
            console.log(data, 'data')

                if (data.calculate === "add") {
                    console.log(first + second)
                    total.textContent = `Total sum is: ${+first + +second}`;
                } else if(data.calculate === "subtract") {
                    total.textContent = `Total sum is: ${first - second}`;
                } else if (data.calculate === "divide") {
                    total.textContent = `Total sum is: ${first/second}`;
                } else if(data.calculate === "multiplication") {
                    total.textContent = `Total sum is: ${first*second}`;
                } else {
                    total.textContent = `Cant'calculate ${data.calculate}`
                }
                
            }
        })
    });
})