import { DOMSelectors } from "./DOM";
import "../styles/styles.css";
console.log("HI");

const img = [];
const text = [];
function getRandomInt(min, max) {
  min = Math.ceil(min);//rounds up to min, inclusive
  max = Math.floor(max);//rounds to lower number, exclusive 
  return Math.floor(Math.random() * (max - min) + min); 
};
// console.log(getRandomInt(1,101));//random number between 1 and 100, inclusive 

//https://cataas.com/cat  cat img gen api
//https://zenquotes.io/api/quotes motivational/inspirational quote gen api 

DOMSelectors.btn.addEventListener("click", function(e) {
  const number = getRandomInt(1,101);

  e.preventDefault();
    console.log(number);
DOMSelectors.numb.innerHTML = number;
     ifelse(number);
    DOMSelectors.display.value = "";
    
}); 

DOMSelectors.btn2.addEventListener("click", function(e){
    e.preventDefault();
img.forEach(e => DOMSelectors.his.insertAdjacentHTML(`beforeend`, `<img  class="imgs" src="${e[0].url}">`)
);

DOMSelectors.btn4.addEventListener("click", function(e){
  e.preventDefault();
  toClearImg();});
//console.log(e)
});

DOMSelectors.btn5.addEventListener("click", function(e){
  e.preventDefault();
  toClearText();
});


function toClearImg(){
  his.innerHTML = "";
};

function toClearText(){
  his2.innerHTML = "";
};

DOMSelectors.btn3.addEventListener("click", function(e){
  e.preventDefault();
text.forEach(el => DOMSelectors.his2.insertAdjacentHTML(`beforeend`, `<p class="texts" >${el.slip.advice}<p>`)
);
// console.log(el);
});

//DOMSelectors.his.insertAdjacentHTML(`beforeend`, `<img src="${img[0].url}">`));




//if the random number generated is even, then "Hi" will log be logged, if odd, then "bye" will be logged
  function ifelse(number){
    const remainder = (number % 2);

    if (remainder == 0 ) {
      console.log("Even");

      function displayImg(data){
        DOMSelectors.display.innerHTML = "";
        // console.log(data[0].url);
        DOMSelectors.display.insertAdjacentHTML(
            "afterbegin", `<div class="output">
            <img class="mainimg" src="${data[0].url}"></div>` //(0) means the first item in the array 
        );
      };
      getData2();

      async function getData2(){
        
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
            if(response.status < 200 || response.status >299){
                console.log(response.status);
                throw new error(response);
            } else{
                const data = await response.json();
                img.push(data);

      
            console.log(data);
           displayImg(data); 
        };
        } catch (error) {
            console.log(error);
            alert("ERROR! Please try again.");
           
        }};
    } else {
      console.log("odd");

function displayQuote(data){
  DOMSelectors.display.innerHTML = "";
  DOMSelectors.display.insertAdjacentHTML(
      "afterbegin", `<div class="output">
      <p class= "maintext" >"${data.slip.advice}"</p></div>`
  );

};
getData();
async function getData(){
  
  try {
      const response = await fetch(`https://api.adviceslip.com/advice/${number}`);
      console.log(number);
      if(response.status < 200 || response.status >299){
          console.log(response.status);
          throw new error(response);
      } else{
          const data = await response.json();
          text.push(data);


      console.log(data);
     displayQuote(data); 
  };
  } catch (error) {
      console.log(error);
      alert("ERROR! Please try again.");
     
  }};

 
    };};
  



  
// function generateNum(){
//   DOMSelectors.display.insertAdjacentElement(`beforeend`, `<div>You have generated the number:</div>`)
// };
// console.log(generateNum());



