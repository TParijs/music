const audio = new Audio('/audio/drum2.mp3');
const audio2 = new Audio('/audio/drum4.mp3');
const audio3 = new Audio('/audio/drum3.mp3');
const audio4 = new Audio('/audio/drum1.mp3');
const audio5 = new Audio('/audio/drum5.mp3');
const audio6 = new Audio('/audio/drum6.mp3');

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "69") {
        audio.play();
    }
    else if (evt.keyCode == "32") {
        audio2.play();
    }
    else if (evt.keyCode == "87") {
        audio5.play();
    }
    else if (evt.keyCode == "81") {
        audio4.play();
    }
    else if (evt.keyCode == "82") {
        audio3.play();
    }
    else if (evt.keyCode == "65") {
        audio6.play();
    }
    else if (evt.keyCode == "70") {
        audio3.play();
    }
    else if (evt.keyCode == "83") {
        audio5.play();
    }
    else if (evt.keyCode == "68") {
        audio.play();
    }

}
