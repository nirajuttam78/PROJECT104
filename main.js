Webcam.set({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" scr="'+data_uri+'"/>';
    });
}

console.log('ml5 vesion:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XM3bd5DCS/model.json',modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}
