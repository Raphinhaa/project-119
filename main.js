function preload(){}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J-XSZ2rhu/model.json', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresults);
}

function gotresults(error, result){
    if(error){
        console.error("error");
    }
    else{
        document.getElementById("object_result").innerHTML = result[0].label;
        document.getElementById("accuracy_result").innerHTML = result[0].confidence.toFixed(2);
    }
}