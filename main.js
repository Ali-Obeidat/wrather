let country= document.getElementById("country")
let btn= document.getElementById("change")
let li= document.querySelectorAll("li")
let dayName= document.querySelectorAll(".day-name")
let today=new Date()
var date = `${today.getDate()} ${today.toLocaleString("en-US", {
    month: "short",
  })} ${today.getFullYear()}`;
let weekDay=today.toLocaleString('en-us', {  weekday: 'long' })
let day =document.querySelector(".date-dayname")
day.innerHTML=weekDay
let dateDay =document.querySelector(".date-day")
dateDay.innerHTML=date
window.onload= function (){
    console.log(dayName);
    if(dayName[1].value==weekDay ){
        li.className="activeDay"
    }    
}

dayName.forEach(function(ele,index)
{
    if (ele.innerHTML == weekDay )
    {
        li[index].classList.add("activDay")
    }
})



function apiCityName(name1){
var cityName=name1;
let api_url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
async function getJason(){
     const respnse = await fetch(api_url)
     const data=await respnse.json();
     console.log(data);
     let loc=document.querySelector('.location')
     loc.innerText=data.name+', '+data.sys.country
     let temp=document.querySelector(".weather-temp")
     temp.innerHTML=Math.ceil(data.main.temp )+"°C"
     let wind =document.querySelector(".value-wind")
    wind.innerHTML=data.wind.speed+"km/h"
    let humidity =document.querySelector(".value-humidity")
    humidity.innerHTML=data.main.humidity+"%"
    // console.log(temp.innerHTML=data.main.temp -273.15);    //  temp.innerHTML=tempre.substr(0,2)
    
 }
 getJason()
}

 country.addEventListener('change', function myFunction() {
     let cityName1=country.value;
     apiCityName(cityName1)
    
  })
 

//   function convertToCelsius(num){
//     let c=num - 273.15
//  return ${c}.substr(0,2)+"°C"
//  }
  
