document.addEventListener("DOMContentLoaded",function(){

var searchBtn = document.getElementById("search-button");
var countryInp = document.getElementById("country-inp");
var result = document.getElementById("result");


/// Add a click event to the search button
  searchBtn.addEventListener("click",()=>{
    let countryName = countryInp.value;

    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  

  /// FETCH FUNCTION WILL FETCH THE DATA FROM THE API
fetch(url).then((response) => response.json())
.then((data) =>{
  console.log(data);
  result.innerHTML = `

  <img src ="${data[0].flags.svg}" class="flag-img" />

  <h2>${data[0].name.common}</h2>
  <div class= "wrapper">
  <h2>capital:</h4>
  <span>${data[0].capital[0]}</span>
  </div>


  <div class= "wrapper">
  <h2>continents:</h4>
  <span>${data[0].continents[0]}</span>
  </div>


  <div class= "wrapper">
  <h2>population:</h4>
  <span>${data[0].population}</span>
  </div>



  
  
  `
})


}) 

})