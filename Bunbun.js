const bunNum = Math.floor(Math.random()*16);
const bunBox = document.getElementById(bunNum.toString());
const boxes = document.getElementsByClassName("grid-element");
const notHere = (box) => {
    box.target.style.backgroundColor = 'mediumpurple'
    box.target.innerHTML = "Not Here!"
};
const here = () => {
    bunBox.style.backgroundImage = 'url("./resources/bunbun.jpg")';
    bunBox.style.backgroundSize = 'cover';
    bunBox.style.backgroundPositionY = 'center';
    bunBox.innerHTML = 'Hi Bunbun!'
}
for (let i in boxes) {
    boxes[i].onclick = notHere;
};
bunBox.onclick = here;