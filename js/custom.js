
var popup = document.getElementsByClassName("popup")[0];

window.onload = function(){
popup.style.display = "block";
}
var close = document.getElementById("close")
 close.onclick = function(){
  popup.style.display= "none";
 }

 window.onclick = function(event){
  if(event.target !=popup){
    popup.style.display= "none";
  }
 }