console.log('Calculator');

const calculatorForm = document.querySelector('form');
const operation = document.querySelector('#operation');
const firstValue = document.querySelector('#firstValue');
const secondValue = document.querySelector('#secondValue');
const total = document.querySelector('#total');
var value = '';

operation.onchange = function run() {
    console.log(operation.value, 'opration value')
    value = operation.value;
    return value;
}

calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const operate = value;
    const first = +firstValue.value;
    const second = +secondValue.value;


    fetch(`http://localhost:3000/calculation?firstValue=${first}&secondValue=${second}&calculate=${operate}`).then((res) => {
        res.json().then((data) => {
            console.log(data, 'data');
            if (data.error) {
                total.textContent = data.error;
            } else {
            console.log(data, 'data')
            total.textContent = data.response;
            }
        })
    });
})