var qty = 0;
var list = [];

// constructors for 6 products
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
    // general info
    this.name = "Cat Backpack";
    this.reviews = "62 Reviews";
    this.price = "$127.65";

    // images
    this.demo1 = "Assets/images/backpack1.png";
    this.demo2 = "Assets/images/backpack2.png";
    this.demo3 = "Assets/images/backpack3.png";
    this.demo4 = "Assets/images/backpack4.png";
    this.main = "Assets/images/backpackMain.png";
    this.main_alt = "cat backpack behind";
}

// building an array that contains all 6 products
var products = [new c_harness(), new d_harness(), new f_storage(), new w_storage(), new collar(), new catBackpack()];

// function that clear all local storage
function clearAll() {
    localStorage.clear();
    location.reload();
}

// when clicked add to cart, triggers this function, add all the data about the selected item to local storage
function addListItem() {
    // read and storage data about selected quantity
    var qty = document.getElementById("qty").value;
    var newQty = parseInt(localStorage.getItem("qty")) + qty;
    localStorage.setItem("qty", qty);
    
    // store the product id into the list for cart items
    var list = JSON.parse(localStorage.getItem("list"));
    // create list if empty
    if (list === null) {
        list = [];
    }
    var newItem = localStorage.getItem("product");
    list.push(newItem);
    localStorage.setItem("list", JSON.stringify(list));

    // feedback on the status
    alert("Added to Cart");
}

// change when the user clicks into different products in product page
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

// changes the local storage when user chooses different color in detail page
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

// changes the local storage when user chooses different sizes
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

// generate page for different product selected
function loadDetail() {
    // check which product is selected
    let productId = parseInt(localStorage.getItem("product"));
    var product = products[productId];
    
    // build the demo side bar
    let list = document.getElementById("demos");
    let demoA = document.getElementById("demo1");
    demoA.setAttribute("src", product.demo1);

    // build the main image on the page
    let mainImg = document.getElementById("mainImage");
    mainImg.setAttribute("src", product.main);
    mainImg.setAttribute("alt", product.main_alt);

    // build the information on the right column of the page
    let name = document.getElementById("name");
    name.innerHTML = product.name;
    let review = document.getElementById("review");
    review.innerHTML = product.reviews;
    let price = document.getElementById("price");
    price.innerHTML = product.price;
}

// load the shopping cart page
function onLoad() {
    // fetch the list of selected items
    var cartList = JSON.parse(localStorage.getItem("list"));
    let newItems = document.createElement("div");
    newItems.class = "item";

    // header: count items in the cart
    var header = document.getElementById("header");
    header.innerHTML = cartList.length + " items";

    // list
    let list = document.getElementById("list");
    
    // iterate through cart list
    for (var i = 0; i < cartList.length; i++)
    {
        let newItem = document.createElement("div");
        newItem.id = "item" + i;
        // fetch item
        let productId = parseInt(cartList[i]);
        var product = products[productId];

        //populate list item with information from the fetched product
        let itemImage = document.createElement("img");
        itemImage.src = product.main;
        itemImage.alt = product.main_alt;
        itemImage.id = "item-image"+i;
        let itemTitle = document.createElement("h4");
        itemTitle.appendChild(document.createTextNode(product.name));
        let itemPrice = document.createElement("h4");
        itemPrice.appendChild(document.createTextNode(product.price));
        let itemColor = document.createElement("h4");
        itemColor.appendChild(document.createTextNode("Color: " + localStorage.getItem("color")));
        let itemSize = document.createElement("h4");
        itemSize.appendChild(document.createTextNode("Size: " + localStorage.getItem("size")));
        let itemQty = document.createElement("h4");
        itemQty.appendChild(document.createTextNode("Quantity: " + localStorage.getItem("qty")));
        let removeButton = document.createElement("span");
        removeButton.innerHTML = '<button id="removal_"+i onclick = "removeItem(this)"> remove </button>';
        let breakLine = document.createElement("hr");


        // add the information to DOM
        newItem.appendChild(itemImage);
        newItem.appendChild(itemTitle);
        newItem.appendChild(itemPrice);
        newItem.appendChild(itemColor);
        newItem.appendChild(itemSize);
        newItem.appendChild(itemQty);
        newItem.append(removeButton);
        newItem.appendChild(breakLine);
        list.appendChild(newItem);
    }
}

// triggered when clicked on the remove button under each item
function removeItem(buttonRemove) {
    // get which item the user trying to remove
    let span = buttonRemove.parentNode;
    let itemDiv = span.parentNode;

    // get the id of the item selected
    let str = itemDiv.id.toString();
    let id = parseInt(str.substring(str.length - 1, str.length));

    // delete it from the array in local storage
    var cartList = JSON.parse(localStorage.getItem("list"));
    cartList.splice(id, 1);

    // save the edited array
    localStorage.setItem("list", JSON.stringify(cartList));

    // reload the page to see the change
    location.reload();
}