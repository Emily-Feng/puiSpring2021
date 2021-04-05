var num = 0;

function c_harness() {
    this.name = "Cat Harness";
    this.reviews = "16 Reviews";
    this.price = "$29.85";
    this.demo1 = "Assets/images/c_harness1.jpg";
    this.main = "Assets/images/c_harnessMain.jpg";
    this.main_alt = "cat harness side";
}

function d_harness() {
    this.name = "Dog Harness";
    this.reviews = "62 Reviews";
    this.price = "$26.85";
    this.demo1 = "Assets/images/d_harness1.jpeg";
    this.main = "Assets/images/d_harnessMain.jpeg";
    this.main_alt = "dog harness side";
}

function f_storage() {
    this.name = "Food Storage Attachment to Harness";
    this.reviews = "10 Reviews";
    this.price = "$124.95";
    this.demo1 = "Assets/images/f_storage1.png";
    this.main = "Assets/images/f_storageMain.png";
    this.main_alt = "food storage attachment behind";
}

function w_storage() {
    this.name = "Water Storage Attachment to Harness";
    this.reviews = "5 Reviews";
    this.price = "$26.99";
    this.demo1 = "Assets/images/w_storage1.jpeg";
    this.main = "Assets/images/w_storageMain.jpeg";
    this.main_alt = "water storage attachment close-up";
}

function collar() {
    this.name = "Dog/Cat GPS Tracker Collar";
    this.reviews = "38 Reviews";
    this.price = "$21.49";
    this.demo1 = "Assets/images/collar1.jpg";
    this.main = "Assets/images/collarMain.jpg";
    this.main_alt = "GPS tracker collar on puppy";
}

function catBackpack() {
    this.name = "Cat Backpack";
    this.reviews = "62 Reviews";
    this.price = "$127.65";
    this.demo1 = "Assets/images/backpack1.png";
    this.demo2 = "Assets/images/backpack2.png";
    this.demo3 = "Assets/images/backpack3.png";
    this.demo4 = "Assets/images/backpack4.png";
    this.main = "Assets/images/backpackMain.png";
    this.main_alt = "cat backpack behind";
}

var products = [new c_harness(), new d_harness(), new f_storage(), new w_storage(), new collar(), new catBackpack()];

function clearAll() {
    localStorage.clear();
}

function addListItem() {
    var qty = document.getElementById("qty").value;
    localStorage.setItem("qty", qty);
    
   localStorage.setItem("num", localStorage.getItem("num")+1);

    alert("Added to Cart");
}

function product1() {
    localStorage.setItem("product", "0");
}

function product2() {
    localStorage.setItem("product", "1");
}

function product3() {
    localStorage.setItem("product", "2");
}

function product4() {
    localStorage.setItem("product", "3");
}

function product5() {
    localStorage.setItem("product", "4");
}

function product6() {
    localStorage.setItem("product", "5");
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

function loadDetail() {
    let productId = parseInt(localStorage.getItem("product"));
    var product = products[productId];
    let list = document.getElementById("demos");
    let demoA = document.getElementById("demo1");
    demoA.setAttribute("src", product.demo1);
    // let newDemo = document.createElement("li");
    // how to append an button item child?
    // list.appendChild(newDemo);

    let mainImg = document.getElementById("mainImage");
    mainImg.setAttribute("src", product.main);
    mainImg.setAttribute("alt", product.main_alt);

    let name = document.getElementById("name");
    name.innerHTML = product.name;
    let review = document.getElementById("review");
    review.innerHTML = product.reviews;
    let price = document.getElementById("price");
    price.innerHTML = product.price;

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
    itemImage.src = "Assets/images/backpack1.png";
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