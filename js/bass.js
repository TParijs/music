const audio = new Audio('/audio/bass1 (1).mp3');
const audio2 = new Audio('/audio/bass2 (1).mp3');
const audio3 = new Audio('/audio/bass3.mp3');
const audio4 = new Audio('/audio/bass4.mp3');



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
}