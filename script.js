
const key ="30a17d9a7d2a58fc2fddb7d5742eeba8"

function allocation(information){
    console.log(information)
    document.querySelector(".localization").innerHTML= "Tempo em " + information.name
    document.querySelector(".temp").innerHTML=Math.floor(information.main.temp) + "°C"
    document.querySelector(".text-prev").innerHTML = information.weather[0].description
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${information.weather[0].icon}.png`
    document.querySelector(".water").innerHTML= information.main.humidity +"% umidade"
}

async function citysrc(input){

    const information = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json())

    allocation(information)
}   

function clicksrc(){
    const input = document.querySelector (".city").value

    citysrc(input)
   
}

