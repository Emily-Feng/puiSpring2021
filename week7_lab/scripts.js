function Lion(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A description of my animal";
    this.image = "images/Lion.png";
}

function Sheep(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A description of my animal";
    this.image = "images/Sheep.png";
}

function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A description of my animal";
    this.image = "images/Elephant.png";
}

var animals = [new Lion(), new Sheep(), new Elephant()];

var animalNames = ["Simba", "Shane", "Dumbo", "Peggy"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random()*maxIndex);
}
   
function generateRandomName() {
    let randomIndex = generateRandomIndex(4);
    return animalNames[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(12);
}

function generateRandomAnimal() {
    let randomIndex = generateRandomIndex(3);
    let randomAnimal = animals[randomIndex];
    if (randomAnimal instanceof Lion)
    {
        return new Lion(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Sheep)
    {
        return new Sheep(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Elephant)
    {
        return new Elephant(generateRandomName(), generateRandomAge());
    } 
}

function onLoad() {
    var animal = generateRandomAnimal();
    console.log(animal)
    let header = document.getElementById("header");
    header.innerHTML = animal.name + " " + animal.age + " years old";
    let img = document.getElementById("image");
    img.setAttribute("src", animal.image);
    img.setAttribute("alt", animal.image_alt);
}

