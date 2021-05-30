img ="";
status = "";

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status-detecting objects";
}

function modelLoaded(){
    console.log("model "+"is " +"loaded");
    status = true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error , result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
}

function preload(){
img = loadImage('mouse.jpg');
}

function draw(){
    image(img, 0, 0, 300, 300);
    fill('black');
    text('mouse', 50, 50);
    noFill();
    stroke('blue');
    rect(40, 10, 200 , 300);


   
 
    
}


function goback(){
    window.location = "index.html";
}