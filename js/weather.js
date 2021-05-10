
//get city input
let button = document.querySelector("#button");
let city = document.querySelector("#city");


button.addEventListener("click",()=>{

    if(city.value != ""){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKEY}`)
        //link 1 - convert response to JSON
        .then(response => response.json())

        //link 2 - extract data into variables and put into an object
        .then(data => {
        //console.log(data);
        let kelvin = data.main.temp;
        let degC = Math.floor(kelvin - 273.15);
        let degF = Math.floor(degC * 1.8 + 32);
        let city = data.name;
        let desc = data.weather[0].description
        let dataArr = [degF,city,desc];
        return dataArr;
        })

        // final link - display data
        .then(dataArr => {
        let [degF,city,desc] = dataArr;
        console.log();
        let weatherDiv = document.querySelector("#dispWeather");
        let temp = document.createElement("p");
        temp.innerText = `Current Temp. in ${city} is ${degF.toString()} with ${desc}`;
        weatherDiv.append(temp);
        weatherDiv.style.display = "flex";
        })
        city.value = "";

    } else {
        alert("you must enter a city.");
    }
    
    
})


