const audio = new Audio('audio/trumpet.mp3');
const audio2 = new Audio('audio/trumpet2.mp3');
const audio3 = new Audio('audio/trumpet3.mp3');
const audio4 = new Audio('audio/trumpet4.mp3');
const audio5 = new Audio('audio/trumpet5.mp3');
const audio6 = new Audio('audio/trumpet6.mp3');
const audio7 = new Audio('audio/trumpet7.mp3');
const audio8 = new Audio('audio/trumpet8.mp3');
const audio9 = new Audio('audio/trumpet9.mp3');
const audio10 = new Audio('audio/trumpet10.mp3');


document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "81") {
        audio.play();
    }
    else if (evt.keyCode == "87") {
        audio2.play();
    }
    else if (evt.keyCode == "69") {
        audio3.play();
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
    else if (evt.keyCode == "85") {
        audio7.play();
    }
    else if (evt.keyCode == "73") {
        audio8.play();
    }
    else if (evt.keyCode == "79") {
        audio9.play();
    }
    else if (evt.keyCode == "80") {
        audio10.play();
    }
}