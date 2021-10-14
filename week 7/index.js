console.log("hello world");
console.log(Math.floor(Math.random()*3));

console.log(document.getElementsByClassName("options"));


// waow a comment, nerd
const images = ["skull1.jpg", "skull2.jpg", "skull3.jpg"]
const title = ["tyrannosaurus", "allosaurus", "dilophosaurus"]


function changeColor(sectionID) {
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue")
}


for(i=0; i<document.getElementsByClassName("options").length; i++) {
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">' ;
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}
