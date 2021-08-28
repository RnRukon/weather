const submitBtn = document.getElementById('submit-btn').addEventListener('click', () => {

    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";

    fetch(`https://api.weatherapi.com/v1/current.json?key=7489c7043a2747328d255557212808&q=${inputFieldValue}`)
        .then(res => res.json())
        .then(data => cityWeather(data))
})

const cityWeather = data => {
    const cityName = data.location.name;
    const country = data.location.country;
    const tem = data.current.temp_c;
    const description = data.current.condition.text;
    const time = data.location.localtime;

    const iconContainer = document.getElementById('icon');
    iconContainer.textContent = "";
    const iconImg = document.createElement('div');
    iconImg.innerHTML = `
    <img src="${data.current.condition.icon}"></img>
    `

    iconContainer.appendChild(iconImg);
    document.getElementById('city').innerText = cityName + "-" + country;
    document.getElementById('temp').innerText = tem;
    document.getElementById('description').innerText = description;
    document.getElementById('time').innerText = time;


}


// function anotherFunction(){

//        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=60b4665f25d070ad17f5a9404358462e`)

//         .then(res => res.json())
//         .then(data => cityWeather(data))


// }