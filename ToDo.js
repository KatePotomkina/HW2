var inputText = document.getElementById("txt")
var inputTime = document.getElementById("time"),
    items = document.querySelectorAll("#list li"),
    tab = [], index;

// get the selected li index using array
// populate array with li values

for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
}

// get li index onclick
for (var i = 0; i < items.length; i++) {

    items[i].onclick = function () {
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index);
        // set the selected li value into input text
        inputText.value = this.innerHTML;
        inputTime.value = this.innerHTML;
    };

}

function refreshArray() {
    // clear array
    tab.length = 0;
    items = document.querySelectorAll("#list li");
    // fill array
    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }
}
function addLI() {

    var listNode = document.getElementById("list"),
        textNode = document.createTextNode(inputText.value),
        liNode = document.createElement("LI");

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);

    refreshArray();

    // add event to the new LI

    liNode.onclick = function () {
        index = tab.indexOf(liNode.innerHTML);
        console.log(liNode.innerHTML + " INDEX = " + index);
        // set the selected li value into input text
        inputText.value = liNode.innerHTML;
    };

}

function editLI() {
    // edit the selected li using input text
    items[index].innerHTML = inputText.value;
    refreshArray();
}

function deleteLI() {

    refreshArray();
    if (items.length > 0) {
        items[index].parentNode.removeChild(items[index]);
        inputText.value = "";
    }
}
var list = document.querySelector('ul');
list.addEventListener('dblclick', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

const pics = [
       'url("https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_with_Closed_eyes_large.png?v=1571606093") ',
    'url("https://cdn.shopify.com/s/files/1/1061/1924/products/Money_Face_Emoji_b26670f3-2d57-42f5-9003-f1a1ee3257c6_large.png?v=1571606036")',
    'url("https://cdn.shopify.com/s/files/1/1061/1924/products/Sunglasses_Emoji_be26cc0a-eef9-49e5-8da2-169bb417cc0b_large.png?v=1571606036") ',
    'url("https://cdn.shopify.com/s/files/1/1061/1924/products/Sleeping_Emoji_large.png?v=1571606036',
    'url("https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png?v=1571606036")'

];
const pic = document.querySelector('section');

function showImage() {
    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.style.backgroundImage = img;
}

// setInterval(showImage, 1000);


