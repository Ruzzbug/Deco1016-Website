let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d'); //Context 

let gridContainer = document.getElementsByClassName("grid-container");

let birdLoadArr = [];
let birdArr = [];
let birdKey = 'birdKey';
let birdRetrievalTest = [];

let currentGrid = [];

let cwidth = window.innerHeight/1.34;
let cheight = window.innerHeight/1.34;
console.log(window.innerHeight/1.34);

//The Images' Sources
const crownSrc = ["https://source.unsplash.com/300x300/?crown", "https://source.unsplash.com/301x300/?crown", "https://source.unsplash.com/300x301/?crown", "https://source.unsplash.com/302x300/?crown", "https://source.unsplash.com/300x302/?crown", "https://source.unsplash.com/303x300/?crown", "https://source.unsplash.com/300x303/?crown", "https://source.unsplash.com/304x300/?crown", "https://source.unsplash.com/300x304/?crown"];
const beakSrc = ["https://source.unsplash.com/300x300/?beak", "https://source.unsplash.com/301x300/?beak", "https://source.unsplash.com/300x301/?beak", "https://source.unsplash.com/302x300/?beak", "https://source.unsplash.com/300x302/?beak", "https://source.unsplash.com/303x300/?beak", "https://source.unsplash.com/300x303/?beak", "https://source.unsplash.com/304x300/?beak", "https://source.unsplash.com/300x304/?beak"];
const chestSrc = ["https://source.unsplash.com/300x300/?bird", "https://source.unsplash.com/301x300/?bird", "https://source.unsplash.com/300x301/?bird", "https://source.unsplash.com/302x300/?bird", "https://source.unsplash.com/300x302/?bird", "https://source.unsplash.com/303x300/?bird", "https://source.unsplash.com/300x303/?bird", "https://source.unsplash.com/304x300/?bird", "https://source.unsplash.com/300x304/?bird"];
const wingSrc = ["https://source.unsplash.com/300x300/?wing", "https://source.unsplash.com/301x300/?wing", "https://source.unsplash.com/300x301/?wing", "https://source.unsplash.com/302x300/?wing", "https://source.unsplash.com/300x302/?wing", "https://source.unsplash.com/303x300/?wing", "https://source.unsplash.com/300x303/?wing", "https://source.unsplash.com/304x300/?wing", "https://source.unsplash.com/300x304/?wing"];
const feetSrc = ["https://source.unsplash.com/300x300/?talon", "https://source.unsplash.com/301x300/?talon", "https://source.unsplash.com/300x301/?talon", "https://source.unsplash.com/302x300/?talon", "https://source.unsplash.com/300x302/?talon", "https://source.unsplash.com/303x300/?talon", "https://source.unsplash.com/300x303/?talon", "https://source.unsplash.com/304x300/?talon", "https://source.unsplash.com/300x304/?talon"];

//Array of all the images' sources so they can be preloaded
const imgSrcArr = [crownSrc, beakSrc, chestSrc, wingSrc, feetSrc];

//An array to contain all the arrays of images
let crowns = [], beaks = [], chests = [], wings = [], feet = [];
let imgArr = [crowns, beaks, chests, wings, feet];

//Loads the images into the page so that the buttons are more responsive the first time they are used
function preloadImage() {
    let count = 0;
    for (let i = 0; i < imgSrcArr.length; i++) {
        for (let a = 0; a < imgSrcArr[i].length; a++) {
            imgArr[i][a] = new Image(300, 300);
            imgArr[i][a].src = imgSrcArr[i][a];
            imgArr[i][a].onload = () => {
                count++;
                console.log(count);
                if (count == 45) {
                    if (checkPage()) {
                        console.log("Random")
                        randomBird();
                    } else {
                        console.log("Load")
                        loadBird();
                    }
                }
            }
        }
    }
}

//Initialises the page, helpful for testing
function setup() {
    buildCanvas();
    preloadImage();
}

//Checks local storage for the previous page's key to determine if a random bird should be generated
function checkPage() {
    if (localStorage.getItem("pageKey") === null || localStorage.getItem("pageKey") < 2) {
      localStorage.setItem("pageKey", 2);
      return true;
    } else {
        return false;
    }
}

function buildCanvas () {
    canvas.width = cwidth;
    canvas.height = cheight;
}

function clearCanvas() {
    c.fillStyle = "#ffffff";
    c.fillRect(0, 0, canvas.width, canvas.height);
}



//Creates a random bird from supplied elements
function randomBird() {
    let min=0; 
    let max=9;  
    for (let i = 0; i < imgSrcArr.length; i++){
        birdArr[i] = Math.floor(Math.random() * (+max - +min)) + +min;    
    }
    update();
}

//Draws the user's bird from local memory
function loadBird() {
    birdLoadArr = localStorage.getItem(birdKey);
    
    //This for loop gets rid of the commas in the array
    for (let i = 0 ; i < birdLoadArr.length; i += 2) {
        birdArr.push(birdLoadArr[i]);
    } 
    update();        
}

//Handles drawing the bird to the canvas each time a new part is chosen
function update() {
    localStorage.setItem(birdKey, birdArr);
    canvas.height = window.innerHeight/1.2;
    //Update the canvas
    clearCanvas();
    //Draw all 5 pictures
    for (let i = 0; i < 5; i++) {
        c.drawImage(imgArr[i][birdArr[i]], canvas.width/2 - canvas.height/5.4/2, canvas.height/5.4 * (i + 0.2), canvas.height/5.4, canvas.height/5.4); 
    }
}


//Makes the grid appear and dissapear
function buildGrid (index) {
    if (currentGrid !== imgArr[index]) {
        clearGrid();
        currentGrid = imgArr[index];
        for (let i = 0; i < 9; i++) {
            let item = document.createElement('div');//creates a div
            item.classList.add('grid-item'); //sets the class

            // Does things when the image gets clicked
            item.addEventListener("click", function() {
                birdArr[index] = i;
                clearGrid(); 
                update();
            } );
            item.appendChild(imgArr[index][i]);
            gridContainer[0].appendChild(item);
        }
    } else {
        currentGrid = [];
        clearGrid();
    }
}

function clearGrid () {
    currentGrid = null;
    while (gridContainer[0].firstChild) {
        gridContainer[0].removeChild(gridContainer[0].firstChild);
    }
}

setup();