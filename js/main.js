import { DOMSelectors } from "./DOM";
import "../styles/styles.css";
console.log("HI");

 function getRandomInt(min, max) {
  min = Math.ceil(min);//rounds up to min, inclusive
  max = Math.floor(max);//rounds to lower number, exclusive 
  return Math.floor(Math.random() * (max - min) + min); 
};
// console.log(getRandomInt(1,101));//random number between 1 and 100, inclusive 

//https://cataas.com/cat  cat img gen api
//https://api.goprogram.ai/inspiration motivational/inspirational quote gen api 

DOMSelectors.btn.addEventListener("click", function(e) {
  e.preventDefault();
    console.log(getRandomInt(1,101));
DOMSelectors.display.innerHTML = getRandomInt(1,101);
getData(display);
displayQuote();
    }); 


    function displayQuote(data){
      DOMSelectors.display.innerHTML = "";
      DOMSelectors.display.insertAdjacentHTML(
          "afterbegin", `<div class="output">
          <p>#${data.slip.id}</p>
          <p>"${data.slip.advice}"</p></div>`
      );
  }    
  
  async function getData(num){
      
      try {
          const response = await fetch(`https://api.adviceslip.com/advice/${num}`);
          if(response.status < 200 || response.status >299){
              console.log(response.status);
              throw new error(response);
          } else{
              const data = await response.json();
  
          console.log(data);
         displayQuote(data); 
      };
      } catch (error) {
          console.log(error);
          alert("ERROR! Please try again.");
         
      }};
   

