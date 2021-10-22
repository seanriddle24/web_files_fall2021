function placeLeft() {
  document.getElementById("leftstatue").innerHTML = "<img alt='left statue' src='https://github.com/seanriddle24/web_files_fall2021/blob/main/midterm/assets/statueleft1.png?raw=true'>";
}

function placeRight() {
  document.getElementById("rightstatue").innerHTML = "<img alt='right statue' src='https://github.com/seanriddle24/web_files_fall2021/blob/main/midterm/assets/statueright1.png?raw=true'>";
}

document.getElementById("leftbutton").addEventListener("click", placeLeft);

document.getElementById("rightbutton").addEventListener("click", placeRight);
