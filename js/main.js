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
    const hello = getRandomInt(1,101).innerHTML;
console.log(hello)}); 







function displayQuote(data){
  DOMSelectors.display.innerHTML = "";
  // const numB = getRandomInt(1,101);
  DOMSelectors.display.insertAdjacentHTML(
      "afterbegin", `<div class="output">
      <p>#${data.quote}</p>
      <p>"${data.author}"</p></div>`
  );
}    




// function generateNum(){
//   DOMSelectors.display.insertAdjacentElement(`beforeend`, `<div>You have generated the number:</div>`)
// };
// console.log(generateNum());