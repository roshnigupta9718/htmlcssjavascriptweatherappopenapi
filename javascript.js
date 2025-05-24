const input=document.querySelector('input')
const btn=document.getElementById('btn')
const icon=document.getElementById('icon')
const weather =document.getElementById('weather')
const temparature=document.getElementById('temparature')
const description=document.getElementById('description')

btn.addEventListener("click",()=>{
    let city=input.value;
    console.log(city)
    getWeather(city)
})
 function getWeather(city){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc88da890f2203f1a75a586c26a57a6f` )
    .then(res=>res.json())
        .then(data=>{console.log(data);
        console.log(data.weather[0].id)
        const iconCode = data.weather[0].icon;
        console.log(iconCode)
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather icon">`;
        
       
        const city=data.name
      const country=data.sys.country
      weather .innerHTML=`${city}, ${country}`
      let temp=data.main.temp
      temp= temp-273
      const te=temp.toFixed(2)
      temparature.innerHTML= `${te}c`
      const des = data.weather[0].description;
      description.innerHTML = `${des}`

        
       
       
        }
    )
        .catch(error=>console.log(error))
     
}
