var doorLocked = 0;

var leftGemGet = 0;

var rightGemGet = 0;

var leftGemPlaced = 0;

var rightGemPlaced = 0;

var doorClick = 0;

let hubButtons = ["leftButton", "rightButton", "openDoor"];

let otherButtons = ["backDoor"];

let leftButtons = ["backToMain"];

let rightButtons = ["backToMain"];

function clickTest() {
  console.log("click heard");
}

function returnHub() {
  // returns player to the main room. must include any function added to the main room, and must remove text for other rooms.
  if (document.getElementById("hub").style.display == "none") {
    document.getElementById("leftRoom").style.display = "none";
    document.getElementById("rightRoom").style.display = "none";
    document.getElementById("hub").style.display = "initial";

  }
  document.getElementById("hub").innerHTML = "<p> You find yourself in a <a id='hubInspect' href='#'> large, cavernous antechamber </a>. The room is lit by giant, blazing braziers, which sit perched upon ledges far above you. When you look up, you can see stalactites hanging down from the darkness. </p> <p> In front of you is a <a id='doorInspect' href='#'> massive pair of stone doors,</a> closed shut. <a id='statueInspect' href='#'> Large statues of strange figures </a> sit on either side. </p> <p> There are paths leading left and right into adjacent caverns. </p>;"
  document.getElementById("doorInspect").addEventListener("click", inspectDoor);
  document.getElementById("statueInspect").addEventListener("click", inspectStatues);
  //document.getElementById("leftButton").addEventListener("click", goLeft);
  document.getElementById("hubInspect").addEventListener("click", inspectHub);
  for (let i=0; i<otherButtons.length; i++) {
    document.getElementById(otherButtons[i]).style.display = "none";
  }
  for (let i=0; i<leftButtons.length; i++) {
    document.getElementById(leftButtons[i]).style.display = "none";
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

function placeLeftGem() {
  leftGemPlaced += 1;
  leftGemGet -= 1;
  console.log(leftGemPlaced);
  document.getElementById("leftStatue").innerHTML = "<img alt='leftStatue' src='https://github.com/seanriddle24/web_files_fall2021/blob/main/midterm/assets/statueleft1.png?raw=true'>";
  inspectStatues();
  doorClick += 1;
}

function placeRightGem() {
  rightGemPlaced += 1;
  rightGemGet -= 1;
  document.getElementById("rightStatue").innerHTML = "<img alt='rightStatue' src='https://github.com/seanriddle24/web_files_fall2021/blob/main/midterm/assets/statueright1.png?raw=true'>"
  inspectStatues();
  doorClick += 1;
}

function inspectStatues() {
  // flavor text for looking at the statues.
  if (leftGemPlaced == 0 && rightGemPlaced == 0) {
    document.getElementById("hub").innerHTML = "<p> These statues are over two meters tall each, reaching a little higher than the top of your head. They portray strange reptilian creatues in seated poses, each holding a sword in one hand. The eye sockets are conspicuously empty; it seems like something is meant to be placed there. </p>";
  }
  else if (leftGemPlaced == 1 && rightGemPlaced == 0) {
    document.getElementById("hub").innerHTML = "<p> These statues are over two meters tall each, reaching a little higher than the top of your head. They portray strange reptilian creatues in seated poses, each holding a sword in one hand. The left statue has a red gemstone in its eye. </p>";
  }
  else if (leftGemPlaced == 0 && rightGemPlaced == 1) {
    document.getElementById("hub").innerHTML = "<p> These statues are over two meters tall each, reaching a little higher than the top of your head. They portray strange reptilian creatues in seated poses, each holding a sword in one hand. The right statue has a red gemstone in its eye. </p>";
  }
  else if (leftGemPlaced == 1 && rightGemPlaced == 1) {
    document.getElementById("hub").innerHTML = "<p> These statues are over two meters tall each, reaching a little higher than the top of your head. They portray strange reptilian creatues in seated poses, each holding a sword in one hand. Both gems have been placed. </p>";
    if (doorClick >= 1) {
      document.getElementById("hub").innerHTML += "<p> You hear a click.";
      doorClick -= 2;
    }
    doorLocked = 1;
  }


  if (leftGemGet == 1 && rightGemGet == 0) {
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='leftPrompt'> Place left gem. </a> </p>";
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='back'> Back. </a> </p>";
    document.getElementById("leftPrompt").addEventListener("click", placeLeftGem);
    document.getElementById("back").addEventListener("click", returnHub);
  }

  else if (leftGemGet == 0 && rightGemGet == 1) {
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='rightPrompt'> Place right gem. </a> </p>";
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='back'> Back. </a> </p>";
    document.getElementById("rightPrompt").addEventListener("click", placeRightGem);
    document.getElementById("back").addEventListener("click", returnHub);
  }
  else if (leftGemGet == 1 && rightGemGet == 1) {
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='rightPrompt'> Place right gem. </a> </p>";
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='leftPrompt'> Place left gem. </a> </p>";
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='back'> Back. </a> </p>";
    document.getElementById("leftPrompt").addEventListener("click", placeLeftGem);
    document.getElementById("rightPrompt").addEventListener("click", placeRightGem);
    document.getElementById("back").addEventListener("click", returnHub);
  }
  else {
    document.getElementById("hub").innerHTML += "<p> <a href='#' id='back'> Back. </a> </p>";
    document.getElementById("back").addEventListener("click", returnHub);
  }
}

function inspectHub() {
  // flavor text for the main room.
  document.getElementById("hub").innerHTML = "<p> This chamber lies deep beneath the earth. According to legend, the Ancients once dwelt in the depths, in a city below the ground where the sun did not reach. Your search for that city has led you here, to this great door set in the rock. It needs only to be opened. </p> <p> <a href='#' id='back'> Back. </a> </p>'";
  document.getElementById("back").addEventListener("click", returnHub);
}

function goLeft() {
  // takes player to the left room. must hide the hub text and buttons.
  document.getElementById("hub").style.display = "none";
  for (let i = 0; i < hubButtons.length; i++) {
    document.getElementById(hubButtons[i]).style.display="none";
  }
  document.getElementById("leftRoom").style.display = "initial";
  for (let i = 0; i < leftButtons.length; i++) {
    document.getElementById(leftButtons[i]).style.display="initial";
  }
  document.getElementById("pedestalInspect").addEventListener("click", inspectPedestal);
}

function goRight() {
  document.getElementById("hub").style.display = "none";
  for (let i = 0; i < hubButtons.length; i++) {
    document.getElementById(hubButtons[i]).style.display="none";
  }
  for (let i = 0; i < rightButtons.length; i++) {
    document.getElementById(rightButtons[i]).style.display="initial";
  }
  document.getElementById("rightRoom").style.display = "initial";
  document.getElementById("fountainInspect").addEventListener("click", inspectFountain);
  document.getElementById("warriorInspect").addEventListener("click", inspectWarrior);
}

function backRight() {
  document.getElementById("rightRoom").innerHTML = "<p> You enter the room to the right. </p> <p> This chamber appears to be a large plaza of some sort. The floor is tiled with stone setts. There is a <a id='fountainInspect' href='#'> fountain </a> in the center of the room, upon which is perched a <a id='warriorInspect' href='#'> tall statue </a> of a woman in armor. </p>";
  document.getElementById("fountainInspect").addEventListener("click", inspectFountain);
  document.getElementById("warriorInspect").addEventListener("click", inspectWarrior);
}

function backLeft() {
  document.getElementById("leftRoom").innerHTML = "<p> You enter the room to the left. </p> <p> Tall carved columns line the walls around you. In the center of the room is a <a id='pedestalInspect' href='#'> raised pedestal </a>. </p>"
  document.getElementById("pedestalInspect").addEventListener("click", inspectPedestal);
}

function inspectFountain() {
  document.getElementById("rightRoom").innerHTML = "<p> The fountain is grandiose, seemingly carved from marble. The sides are carved in the shapes of beautiful flowers. The water inside is stagnant; algae grows on the surface. </p> <p> <a id='fountainBack' href='#'> Back. </a> </p>";
  document.getElementById("fountainBack").addEventListener("click", backRight);
}

function dialogue1() {
  document.getElementById("rightRoom").innerHTML = "<p> 'Your attire is familiar to me. You are from the research hall, are you not?' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='choice1' href='#'> 'I am.' </a> </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='choice2' href='#'> 'I am not.' </a> </p>";

  document.getElementById("choice1").addEventListener("click", dialogue2a);
  document.getElementById("choice2").addEventListener("click", dialogue2b);
}

function dialogue2a() {
  document.getElementById("rightRoom").innerHTML = "<p> 'I thought as much. I remember when the research hall was founded, very long ago. I imagine it has changed much since the time of the Ancients. Many of the records were destroyed when the city was abandoned.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'If you are a researcher, then I know why you have come. You seek entrance to the lost city.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='next' href='#'> 'I do.' </a> </p>";
  document.getElementById("next").addEventListener("click", dialogue3a);
}

function dialogue2b() {
  document.getElementById("rightRoom").innerHTML = "<p> 'I see. I must have been misremembered; it has been a very long time, after all.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'But one does not find this place on accident. Why have you come here?' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='next' href='#'> 'I seek entrance to the lost city.' </a> </p>";
  document.getElementById("next").addEventListener("click", dialogue3b);
}

function dialogue3a() {
  document.getElementById("rightRoom").innerHTML = "<p> 'This I give to you freely, young mortal,' the statue says, opening the palm of her hand. She gives you a red gemstone It looks like it would fit in the eye of the statue right of the door. </p>";
  rightGemGet = 1;
  document.getElementById("rightRoom").innerHTML += "<p> 'Be careful, little one. The city is awakening. She has returned. The Queen of Beasts. Do you know of whom I speak?' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='choice1' href='#'> 'Yes.' </a> </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='choice2' href='#'> 'No.' </a> </p>";
  document.getElementById("choice1").addEventListener("click", dialogue4aa);
  document.getElementById("choice2").addEventListener("click", dialogue4ab);


}

function dialogue3b() {
  document.getElementById("rightRoom").innerHTML = "<p> 'An explorer, then. I see. It is my duty to act as Guardian to the gates, young mortal. Terrible things lurk in the darkness beyond.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'Before I give you the key, I must know that you understand the dangers you will face; do you know of the Queen of Beasts?' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='choice1' href='#'> 'Yes.' </a> </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='choice2' href='#'> 'No.' </a> </p>";
  document.getElementById("choice1").addEventListener("click", dialogue4ba);
  document.getElementById("choice2").addEventListener("click", dialogue4bb);
}

function dialogue4aa() {
  document.getElementById("rightRoom").innerHTML = "<p> 'Then you know what danger lies beyond. Good luck, young mortal. Seek the truth.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> The statue resumes her watchful stance. </p> <p> <a id='back' href='#'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", backRight);
}

function dialogue4ab() {
  document.getElementById("rightRoom").innerHTML = "<p> 'She was created by us - by the ancients. A warrior of great renown, given the power to live forever. She was to be a weapon against the darkness that lurks below. She was the hope of our people. But her being was corrupted by that which we sought to destroy.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'Now, she is doomed to walk this earth as a phantom. An undying shadow of evil. She wields blades that are not of this world; no steel can guard against them. You must be careful not to cross paths with her.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'Good luck, young mortal. Seek the truth.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> The statue resumes her watchful stance. </p> <p> <a id='back' href='#'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", backRight);
}

function dialogue4ba() {
  document.getElementById("rightRoom").innerHTML = "<p> 'Good. Do not underestimate her; she is the greatest warrior who has ever lived.'";
  document.getElementById("rightRoom").innerHTML += "<p> 'Now I shall give you what you seek.' The statue gives you a red gemstone. It looks like it would fit in the eye of the statue right of the door. </p>";
  rightGemGet = 1;
  document.getElementById("rightRoom").innerHTML += "<p> 'Good luck, young mortal. Seek the truth.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> The statue resumes her watchful stance. </p> <p> <a id='back' href='#'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", backRight);
}

function dialogue4bb() {
  document.getElementById("rightRoom").innerHTML = "<p> 'She was created by us - by the ancients. A warrior of great renown, given the power to live forever. She was to be a weapon against the darkness that lurks below. She was the hope of our people. But her being was corrupted by that which we sought to destroy.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'Now, she is doomed to walk this earth as a phantom. An undying shadow of evil. She wields blades that are not of this world; no steel can guard against them. You must be careful not to cross paths with her.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> 'Do you understand what I have said?' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> <a id='next' href='#'> 'Yes.' </a> </p>";
  document.getElementById("next").addEventListener("click", dialogue5);

}

function dialogue5() {
  document.getElementById("rightRoom").innerHTML = "<p> 'Good. Now I shall give you what you seek.' The statue gives you a red gemstone. It looks like it would fit in the eye of the statue right of the door. </p>";
  rightGemGet = 1;
  document.getElementById("rightRoom").innerHTML += "<p> 'Good luck, young mortal. Seek the truth.' </p>";
  document.getElementById("rightRoom").innerHTML += "<p> The statue resumes her watchful stance. </p> <p> <a id='back' href='#'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", backRight);
}

function inspectWarrior() {
  document.getElementById("rightRoom").innerHTML = "<p> This statue depicts an imposing figure in a ceremonial suit of armor. Her hand rests on the hilt of a large greatsword. </p>";
  if (rightGemGet == 0 && rightGemPlaced == 0) {
    document.getElementById("rightRoom").innerHTML += "<p> As you approach, the statue's head turns to face you. </p> <p> 'I have not seen a mortal since the Ancients walked these halls,' she says. 'Welcome.' </p> <p> <a id='next' href='#'> 'Uh... hello!' </a> </p>";
    document.getElementById("next").addEventListener("click", dialogue1);
  }
  else {
    document.getElementById("rightRoom").innerHTML += "<p> It remains motionless. </p> <p> <a id='back' href='#'> Back. </a> </p>";
    document.getElementById("back").addEventListener("click", backRight);
  }

}

function inspectPedestal(){
  document.getElementById("leftRoom").innerHTML = "<p> The pedestal is carved out of a material you don't recognize. Its thrumming with energy. There is an indentation in the shape of a handprint on the top. </p>";
  document.getElementById("leftRoom").innerHTML += "<p> <a id='next' href='#'> Place your hand on the pedestal. </a> </p>";
  document.getElementById("leftRoom").innerHTML += "<p> <a id='back' href='#'> Back. </a> </p>";

  document.getElementById("next").addEventListener("click", touchPedestal);
  document.getElementById("back").addEventListener("click", backLeft);
}

function touchPedestal() {
  if (leftGemGet == 0 && leftGemPlaced == 0) {
    document.getElementById("leftRoom").innerHTML = "<p> You place your hand in the indentation. </p>";
    document.getElementById("leftRoom").innerHTML += "<p> Suddenly, the pedestal begins humming louder. A stone clamp rises out of the pedestal and locks your hand in place. </p>";
    document.getElementById("leftRoom").innerHTML += "<p> <a id='wait' href='#'> Wait. </a> </p>";
    document.getElementById("wait").addEventListener("click", touchPedestal2);

  }
  else {
    document.getElementById("leftRoom").innerHTML = "<p> You place your hand in the indentation. </p>";
    document.getElementById("leftRoom").innerHTML += "<p> Nothing happens. </p>"
    document.getElementById("leftRoom").innerHTML += "<p> <a id='back' href='#'> Back. </a> </p>";
    document.getElementById("back").addEventListener("click", backLeft);
  }
}

function touchPedestal2() {
  document.getElementById("leftRoom").innerHTML = "<p> After a few moments, the clamp lets go. You feel the pedestal press something cold into the palm of your hand. You turn it over to see a red gemstone. It looks like it would fit in the eye of the statue left of the door. </p>";
  leftGemGet = 1;
  document.getElementById("leftRoom").innerHTML += "<p> The pedestal must have been scanning you for something. You supposed it found whatever it was looking for. </p>";
  document.getElementById("leftRoom").innerHTML += "<p> <a id='back' href='#'> Back. </a> </p>";
  document.getElementById("back").addEventListener("click", backLeft);

}

function openDoorEvent() {
  // if player opens the door. different options depending on if the door is locked - see variable 'doorLocked'
  if(doorLocked == 1) {
    document.getElementById("hub").innerHTML = "<p> You push on the doors. With great effort, they start to scrape against the stone floor. A bright, unnatural light fills the antechamber as the doors are opened. </p>";
    document.getElementById("hub").innerHTML += "<p> At long last, your search for the lost city is complete. But your adventure is only just beginning. </p>";
    document.getElementById("hub").innerHTML += "<p> THE END </p>";
    // flesh out this text
    document.getElementById("buttons").style.visibility = "hidden";
  }
  else {
    document.getElementById("hub").innerHTML = "<p> You try opening the door. It doesn't budge. </p>";
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
document.getElementById("rightButton").addEventListener("click", goRight);
document.getElementById("backToMain").addEventListener("click", returnHub);
