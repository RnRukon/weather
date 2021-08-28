const submitBtn = document.getElementById('submit-btn').addEventListener('click', async () => {

    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";


    const url = `https://api.weatherapi.com/v1/current.json?key=7489c7043a2747328d255557212808&q=${inputFieldValue}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        cityWeather(data);
    }
    catch (error) {
        console.log(error)

        const containerWeather = document.getElementById('containerWeather');
        const div = document.createElement('div');
        div.innerHTML = `
    <div style="height:50vh" class=" d-flex justify-content-center align-items-center">
      <div class=" bg-danger rounded-3">
          <div class="card-body ">
          <img class=" w-25" src="./img/imojie.png" alt="">
            <p class="card-text text-white">Please enter a country or city name</p>
         </div>
    </div>
    
    </div>
    
    `
        containerWeather.appendChild(div);

    }
})



const cityWeather = data => {

    const containerWeather = document.getElementById('containerWeather');
    containerWeather.textContent = "";
    const div = document.createElement('div');
    div.innerHTML = `

    <img src="${data.current.condition.icon}"></img>
    <h1 class="text-danger fs-1"><span>${data.location.name}</span> <span>${data.location.country}</span></h1>
    <p class="text-white">${data.current.temp_c}<span>&deg;c</span> </p>
    <h4 class="text-warning " >${data.current.condition.text}</h4>
    <h5 class="text-white">${data.location.localtime}</h5>
    <h6 class="text-danger">Rukon</h6>
    `
    containerWeather.appendChild(div);

}