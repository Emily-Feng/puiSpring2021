function cat_harness(color, size, qty) {
    this.name = "Cat Harness";
    this.price = 26.85;
    this.color = color;
    this.size = size;
    this.qty = qty;
    this.image_alt = "cat harness";
    this.image = "images/cat_harness.png";
}

function dog_harness(color, size, qty) {
    this.name = "Dog Harness";
    this.price = 29.85;
    this.color = color;
    this.size = size;
    this.qty = qty;
    this.image_alt = "dog harness";
    this.image = "images/dog_harness.png";
}

function food_storage(color, size, qty) {
    this.name = "Food Storage Attachment to Harness";
    this.price = 124.95;
    this.color = color;
    this.size = size;
    this.qty = qty;
    this.image_alt = "Food Storage Attachment to Harness";
    this.image = "images/foodStorage.png";
}

function water_storage(color, size, qty) {
    this.name = "Water Storage Attachment to Harness";
    this.price = 26.99;
    this.color = color;
    this.size = size;
    this.qty = qty;
    this.image_alt = "Water Storage Attachment to Harness";
    this.image = "images/waterStorage.png";
}

function collar(color, size, qty) {
    this.name = "Dog/Cat GPS Tracker Collar";
    this.price = 31.49;
    this.color = color;
    this.size = size;
    this.qty = qty;
    this.image_alt = "GPS Tracker Collar";
    this.image = "images/collar.png";
}

function backpack(color, size, qty) {
    this.name = "Cat Backpack";
    this.price = 127.65;
    this.color = color;
    this.size = size;
    this.qty = qty;
    this.image_alt = "cat backpack";
    this.image = "images/backpack.png";
}

var products = [ new cat_harness(), new dog_harness(), new food_storage(), new water_storage(), new collar(), new backpack()];

var colors = ["Strawberry", "Blackberry", "Crazyberry", "Fire Orange"];

var sizes = ["Tiny", "Small", "Medium", "Large"];

function generateItem(option, color, size, qty) {
    let item = products[option];
    if (item instanceof cat_harness)
    {
        return new cat_harness(color, size, qty);
    }
    else if (item instanceof dog_harness)
    {
        return new dog_harness(color, size, qty);
    }
    else if (item instanceof food_storage)
    {
        return new food_storage(color, size, qty);
    }
    else if (item instanceof water_storage)
    {
        return new water_storage(color, size, qty);
    }
    else if (item instanceof collar)
    {
        return new collar(color, size, qty);
    }
    else if (item instanceof backpack)
    {
        return new backpack(color, size, qty);
    }
}