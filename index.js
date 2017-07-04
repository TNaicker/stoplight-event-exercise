(function() {
  'use strict';

  // YOUR CODE HERE
})();

// STOP LIGHT
var stopButt = document.querySelector("#stopButton");
var stopColor = document.querySelector("#stopLight");

stopButt.addEventListener('click', function(){
  if(stopColor.classList.contains('stop')){
    stopColor.classList.remove('stop');
  }else{
    stopColor.className += ' stop';
  }
})
stopButt.addEventListener('mouseenter', function(event){
  console.log("entered stop button");
});
stopButt.addEventListener('mouseleave', function(event){
  console.log("left stop button");
});


//SLOW DOWN LIGHT
var slowButt = document.querySelector("#slowButton");
var slowColor = document.querySelector("#slowLight");

slowButt.addEventListener('click', function(){
  if(slowColor.classList.contains('slow')){
    slowColor.classList.remove('slow');
  }else{
    slowColor.className += ' slow';
  }
})
slowButt.addEventListener('mouseenter', function(event){
  console.log("entered slow button");
});
slowButt.addEventListener('mouseleave', function(event){
  console.log("left slow button");
});

//GO LIGHT
var goButt = document.querySelector("#goButton");
var goColor = document.querySelector("#goLight");

goButt.addEventListener('click', function(){
  if(goColor.classList.contains('go')){
    goColor.classList.remove('go');
  }else{
    goColor.className += ' go';
  }
})
goButt.addEventListener('mouseenter', function(event){
  console.log("entered go button");
});
goButt.addEventListener('mouseleave', function(event){
  console.log("left go button");
});
