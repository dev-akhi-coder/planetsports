
var popup = document.getElementsByClassName("popup")[0];
var close = document.getElementById("close")
var body = document.querySelector("body");

window.onload = function(){
popup.style.display = "block";
body.style.overflow ="hidden";
}

 close.onclick = function(){
  popup.style.display= "none";
  body.style.overflow="auto";
 }

//  window.onclick = function(event){
//   if(event.target !=popup){
//     popup.style.display= "none";
//   }
//  }