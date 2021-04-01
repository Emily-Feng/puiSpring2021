var num = 0;

function clearAll() {
    localStorage.clear();
}

function addListItem() {
    var qty = document.getElementById("qty").value;
    localStorage.setItem("qty", qty);
    
   localStorage.setItem("num", localStorage.getItem("num")+1);

    alert("Added to Cart");
}

function color1(){
    var colorInput = document.getElementById("colorInput");
    colorInput.innerHTML = "Color: Strawberry";
    localStorage.setItem("color", "Strawberry");
}

function color2(){
    var colorInput = document.getElementById("colorInput");
    colorInput.innerHTML = "Color: Blackberry";
    localStorage.setItem("color", "Blackberry");
}

function color3(){
    var colorInput = document.getElementById("colorInput");
    colorInput.innerHTML = "Color: Crazyberry";
    localStorage.setItem("color", "Crazyberry");
}

function color4(){
    var colorInput = document.getElementById("colorInput");
    colorInput.innerHTML = "Color: Fire Orange";
    localStorage.setItem("color", "Fire Orange");
}

function setSize1() {
    localStorage.setItem("size", "Tiny");
}

function setSize2() {
    localStorage.setItem("size", "Small");
}

function setSize3() {
    localStorage.setItem("size", "Medium");
}

function setSize4() {
    localStorage.setItem("size", "Large");
}

function onLoad() {
    // header: count items in the cart
    var header = document.getElementById("header");
    header.innerHTML = localStorage.getItem("num").length + " Items";

    // list
    let list = document.getElementById("list");
    let newItem = document.createElement("li");
    newItem.id = "item";

    let itemImage = document.createElement("img");
    itemImage.src = "images/backpack1.png";
    itemImage.alt = "cat backpack";
    itemImage.id = "item-image";
    let itemTitle = document.createElement("h4");
    itemTitle.appendChild(document.createTextNode("Cat Backpack"));
    let itemPrice = document.createElement("h4");
    itemPrice.appendChild(document.createTextNode("$127.65"));
    let itemColor = document.createElement("h4");
    itemColor.appendChild(document.createTextNode("Color: " + localStorage.getItem("color")));
    let itemSize = document.createElement("h4");
    itemSize.appendChild(document.createTextNode("Size: " + localStorage.getItem("size")));
    let itemQty = document.createElement("h4");
    itemQty.appendChild(document.createTextNode("Quantity: " + localStorage.getItem("qty")));

    newItem.appendChild(itemImage);
    newItem.appendChild(itemTitle);
    newItem.appendChild(itemPrice);
    newItem.appendChild(itemColor);
    newItem.appendChild(itemSize);
    newItem.appendChild(itemQty);
    list.appendChild(newItem);
}