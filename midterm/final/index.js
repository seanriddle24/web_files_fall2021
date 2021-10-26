function returnHub() {
  document.getElementById("hub").innerHTML = "<p> You find yourself in a <a id='hubInspect' href='#'> large, cavernous antechamber </a>. The room is lit by giant, blazing braziers, which sit perched upon ledges far above you. When you look up, you can see stalactites hanging down from the darkness. </p> <p> In front of you is a <a id='doorInspect' href='#'> massive pair of stone doors,</a> closed shut. <a id='statueInspect' href='#'> Large statues of strange figures </a> sit on either side. </p> <p> There are paths leading left and right into adjacent caverns. </p>;"
  document.getElementById("doorInspect").addEventListener("click", inspectDoor);
  document.getElementById("statueInspect").addEventListener("click", inspectStatues);
}

function inspectDoor() {
  document.getElementById("hub").innerHTML="<p> The door is ancient, carved from marble. Its surface bears an intricate relief carving of strange creatures emerging from the deep. At the top is the image of a figure holding a sword aloft. It's easily 7 meters tall, at least.</p> <p> <a href='#' id='back'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", returnHub);

}

function inspectStatues() {
  document.getElementById("hub").innerHTML = "<p> Each statue is of a reptilian creature in a sitting pose. They are each holding a sword in one hand. The eye sockets are empty, as if something was meant to be placed there. </p> <p> <a href='#' id='back'> Back. </a> </p>"
  document.getElementById("back").addEventListener("click", returnHub);
}

function inspectHub() {
  document.getElementById("hub").innerHTML = "<p> "
}

function goLeft() {
  document.getElementById("hub").style.display = "none";
  document.getElementById("leftRoom").style.display = "initial";
}

document.getElementById("doorInspect").addEventListener("click", inspectDoor);
document.getElementById("statueInspect").addEventListener("click", inspectStatues);
document.getElementById("leftButton").addEventListener("click", goLeft);
