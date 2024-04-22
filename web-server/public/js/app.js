console.log("Client side page");

// fetch('http://puzzle.mead.io/puzzle').then((res) => {
//     res.json().then((data) => {
//         console.log(data, 'data')
//     })
// })



const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const errorMessage = document.querySelector('#error-message');
const successMessage = document.querySelector('#success-message');

const locationMessage = document.querySelector('#location');
const forecast = document.querySelector('#forecast');


weatherForm.addEventListener('submit', (e) => {
    console.log(searchElement.value, 'submit');
    e.preventDefault();
    const searchedLocation = searchElement.value
    fetch(`http://localhost:3000/weather?address=${searchedLocation}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                errorMessage.textContent = data.error;
            } else {
                locationMessage.textContent = `Location: ${data.address}`;
                forecast.textContent = `Forecast: ${data.forecast}`;
            }
            console.log(data, 'data')
        })
    });
})