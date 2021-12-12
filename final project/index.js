console.log('hello');

const pieces = ["piece1", "piece2", "piece3", "piece4", "piece5", "piece6"]
const overlays = ["overlay1", "overlay2", "overlay3", "overlay4", "overlay5", "overlay6"]

function clickArt(x) {
  console.log('clicked');
  if (pieces.includes(x)) {
    let position = pieces.indexOf(x);
    document.getElementById(overlays[position]).style.display = "flex";
    console.log('success')
  }

}

function dismissArt(x) {
  console.log('clicked');
  document.getElementById(x).style.display="none";

}


document.getElementById("piece1").addEventListener("click", function() {clickArt("piece1");}, false);
document.getElementById("piece2").addEventListener("click", function() {clickArt("piece2");}, false);
document.getElementById("piece3").addEventListener("click", function() {clickArt("piece3");}, false);
document.getElementById("piece4").addEventListener("click", function() {clickArt("piece4");}, false);
document.getElementById("piece5").addEventListener("click", function() {clickArt("piece5");}, false);
document.getElementById("piece6").addEventListener("click", function() {clickArt("piece6");}, false);

document.getElementById("overlay1").addEventListener("click", function() {dismissArt("overlay1");}, false);
document.getElementById("overlay2").addEventListener("click", function() {dismissArt("overlay2");}, false);
document.getElementById("overlay3").addEventListener("click", function() {dismissArt("overlay3");}, false);
document.getElementById("overlay4").addEventListener("click", function() {dismissArt("overlay4");}, false);
document.getElementById("overlay5").addEventListener("click", function() {dismissArt("overlay5");}, false);
document.getElementById("overlay6").addEventListener("click", function() {dismissArt("overlay6");}, false);

// https://stackoverflow.com/questions/12024483/how-to-pass-parameter-to-function-using-in-addeventlistener here's the site that helped me figure this bit out
