const audio = new Audio('/audio/guitar3.mp3');
const audio2 = new Audio('/audio/guitar.mp3');
const audio3 = new Audio('/audio/guitar4.mp3');
const audio4 = new Audio('/audio/guitar5.mp3');
const audio5 = new Audio('/audio/guitar6.mp3');
const audio6 = new Audio('/audio/guitar7.mp3')

document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "69") {
        audio3.play();
    }
    else if (evt.keyCode == "87") {
        audio2.play();
    }
    else if (evt.keyCode == "81") {
        audio.play();
    }
    else if (evt.keyCode == "82") {
        audio4.play();
    }
    else if (evt.keyCode == "84") {
        audio5.play();
    }
    else if (evt.keyCode == "89") {
        audio6.play();
    }

}