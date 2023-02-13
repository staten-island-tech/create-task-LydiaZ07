console.log("HI");

 function getRandomInt(min, max) {
  min = Math.ceil(min);//rounds up to min, inclusive
  max = Math.floor(max);//rounds to lower number, exclusive 
  return Math.floor(Math.random() * (max - min) + min); 
};
console.log(getRandomInt(1,101));//random number between 1 and 100, inclusive 

//https://cataas.com/cat  cat img gen api
//https://api.goprogram.ai/inspiration motivational/inspirational quote gen api 