var doorLocked = 0;

var leftGemGet = 0;

var rightGemGet = 0;

let hubButtons = ["leftButton", "rightButton", "openDoor"];

let otherButtons = ["backDoor"];

function returnHub() {
  // returns player to the main room. must include any function added to the main room, and must remove text for other rooms.
  document.getElementById("hub").innerHTML = "<p> You find yourself in a <a id='hubInspect' href='#'> large, cavernous antechamber </a>. The room is lit by giant, blazing braziers, which sit perched upon ledges far above you. When you look up, you can see stalactites hanging down from the darkness. </p> <p> In front of you is a <a id='doorInspect' href='#'> massive pair of stone doors,</a> closed shut. <a id='statueInspect' href='#'> Large statues of strange figures </a> sit on either side. </p> <p> There are paths leading left and right into adjacent caverns. </p>;"
  document.getElementById("doorInspect").addEventListener("click", inspectDoor);
  document.getElementById("statueInspect").addEventListener("click", inspectStatues);
  document.getElementById("leftButton").addEventListener("click", goLeft);
  document.getElementById("hubInspect").addEventListener("click", inspectHub);
  document.getElementById("openDoor").addEventListener("click", openDoorEvent);
  for (let i=0; i<otherButtons.length; i++) {
    document.getElementById(otherButtons[i]).style.display = "none";
  }
  for (let i=0; i < hubButtons.length; i++) {
    document.getElementById(hubButtons[i]).style.display = "initial";
  }
}

function inspectDoor() {
  // flavor text for looking at the door.
  document.getElementById("hub").innerHTML="<p> The door is ancient, carved from marble. Its surface bears an intricate relief carving of strange creatures emerging from the deep. At the top is the image of a figure holding a sword aloft. It's easily 7 meters tall, at least.</p> <p> <a href='#' id='back'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", returnHub);

}

function inspectStatues() {
  // flavor text for looking at the statues.
  document.getElementById("hub").innerHTML = "<p> These statues are over two meters tall each, reaching a little higher than the top of your head. They portray strange reptilian creatues in seated poses, each holding a sword in one hand. The eye sockets are conspicuously empty; it seems like something is meant to be placed there. </p> <p> <a href='#' id='back'> Back. </a> </p>"
  document.getElementById("back").addEventListener("click", returnHub);
}

function inspectHub() {
  // flavor text for the main room.
  document.getElementById("hub").innerHTML = "<p> This chamber lies deep beneath the earth. According to legend, the Ancients once dwelt in the depths, in a city below the ground where the sun did not reach. Your search for that city has led you here, to this great door set in the rock. It needs only to be opened. </p> <p> <a href='#' id='back'> Back. </a> </p>'"
  document.getElementById("back").addEventListener("click", returnHub);
}

function goLeft() {
  // takes player to the left room. must hide the hub text and buttons.
  document.getElementById("hub").style.display = "none";
  document.getElementById("leftRoom").style.display = "initial";
  document.getElementById
}

function openDoorEvent() {
  // if player opens the door. different options depending on if the door is locked - see variable 'doorLocked'
  if(doorLocked == 1) {
    document.getElementById("hub").innerHTML = "<p> the door opens. </p>"
    // flesh out this text
    document.getElementById("buttons").style.visibility = "hidden";
  }
  else {
    document.getElementById("hub").innerHTML = "<p> You try opening the door. It doesn't budge. </p>"
    for (let i = 0; i < hubButtons.length; i++) {
      document.getElementById(hubButtons[i]).style.display="none";
    }
    document.getElementById("backDoor").style.display = "initial";
    console.log(otherButtons);
    document.getElementById("backDoor").addEventListener("click", returnHub);
  }
}

// functions that are available upon start.
document.getElementById("doorInspect").addEventListener("click", inspectDoor);
document.getElementById("statueInspect").addEventListener("click", inspectStatues);
document.getElementById("leftButton").addEventListener("click", goLeft);
document.getElementById("hubInspect").addEventListener("click", inspectHub);
document.getElementById("openDoor").addEventListener("click", openDoorEvent);
