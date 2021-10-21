console.log("hello nerds");

let things = ["one", "two", "three"]

for(i=0; i<document.getElementsByClassName("thing").length; i++) {
  console.log(things[i]);
  document.getElementsByClassName("thing")[i].innerHTML = "<h2>" + things[i] + "</h2>";
  document.getElementsByClassName("thing")[i].id = things[i];
}
