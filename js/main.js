
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.target.value.length >= 3) {
        search(event.target.value);
    }
});


window.onload = function() {
    search("Alexandria");
};

async function search(userInput){
    clearDisplay();
    userInput = userInput || "Alexandria";
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4a7f0071f2324bfc89c190259233012&q=${userInput}&days=3`)
    let res =await data.json();
    display(new Date(res.forecast.forecastday[0].date).toLocaleDateString('en-US', { weekday: 'long' }),res.location.name,res.current.condition.text,res.current.temp_c, res.current.condition.icon);
    displayDay(new Date(res.forecast.forecastday[1].date).toLocaleDateString('en-US', { weekday: 'long' }),res.forecast.forecastday[1].day.condition.icon,res.forecast.forecastday[1].day.maxtemp_c,res.forecast.forecastday[1].day.condition.text,res.forecast.forecastday[1].day.mintemp_c)
    displayDay2(new Date(res.forecast.forecastday[2].date).toLocaleDateString('en-US', { weekday: 'long' }),res.forecast.forecastday[2].day.condition.icon,res.forecast.forecastday[2].day.maxtemp_c,res.forecast.forecastday[2].day.condition.text,res.forecast.forecastday[2].day.mintemp_c)
}


function display(locationDay,locationName,text,locationTemp,icon){
    let cartona=``;
        cartona += `
        <div class="day text-center py-2 px-3 rounded-4 mb-2 fs-4">${locationDay}</div>

        <div class="day  py-2 px-3 rounded-4 mb-2"> <h3 class="fw-bold fs-1 m-2"> ${locationName} </h3> </div>
        <div class="weather mb-4 text-white">${text}</div>
        <h2 class="numb m-2"> ${locationTemp}<sup>o</sup>C</h2>
        <div class="weather-img mb-3"> <img src="https:${icon}" alt="" width="100"></div>
        <div class="mb-4">
       <img src="images/icons8-keep-dry-48.png" alt=""  width="25"><span class="me-3">20%</span>
      <img src="images/icons8-wind-48.png" alt=""  width="25"> <span class="me-3"> 18km/h</span>
      <img src="images/icons8-compass-48.png" alt=""  width="25"></i>East
    </div>

        `;
        document.getElementById("today").innerHTML += cartona;
    }
    

    function displayDay(locationDay,dayicon,daytemp,daytxt,deg){
        let days =``;
        days +=`
        <div class="day text-center py-2 px-3 rounded-4 mb-2 fs-4">${locationDay}</div>
                       
                      
                     <div class="weather-img"> <img src="https:${dayicon}" alt="" width="100"></div>
                     
                     <p class="deg m-2 "> ${daytemp}<sup>o</sup>C
                     </p> 
                     <h4> ${deg}<sup>o</sup></h4>
                        <div class="weather mb-4 text-white">${daytxt}</div>
        `
        document.getElementById("day").innerHTML +=days;


    }


    function displayDay2(locationDay,dayicon,daytemp,daytxt,deg){
        let days =``;
        days +=`
        <div class="day text-center py-2 px-3 rounded-4 mb-2 fs-4">${locationDay}</div>
                       
                      
                     <div class="weather-img"> <img src="https:${dayicon}" alt="" width="100"></div>
                     
                     <p class="deg m-2"> ${daytemp}<sup>o</sup>C
                     </p> 
                     <h4> ${deg}<sup>o</sup></h4>
                     <div class="weather mb-4 text-white">${daytxt}</div>
                     `
        document.getElementById("day2").innerHTML +=days;


    }



    function clearDisplay() {
        document.getElementById("today").innerHTML ="";
        document.getElementById("day").innerHTML = "";
        document.getElementById("day2").innerHTML = "";
    }




