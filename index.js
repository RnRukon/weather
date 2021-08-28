const submitBtn = document.getElementById('submit-btn').addEventListener('click', function () {

    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=60b4665f25d070ad17f5a9404358462e`)
        .then(res => res.json())
        .then(data => cityWeather(data))
})

const cityWeather = data => {
    console.log(data);


    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const description = data.weather[0].description;
    console.log(cityName)
    document.getElementById('city').innerText = cityName;
    document.getElementById('temp').innerText = temp.toFixed(0);
    document.getElementById('description').innerText = description;
}

