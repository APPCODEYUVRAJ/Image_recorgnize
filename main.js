Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:1080
});

camera = document.getElementById("camera");

Webcame.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML ='<img id="captured_image"'+data_url+'"/>';
    });
    }

    console.log('m15 version:', m15,version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/KCnwniDIy/')

function modeLoaded(){
    HTMLFormControlsCollection.log('Model Loaded!');
}


function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].lable;
        document.getElementById("result_object_accuracy").innerHTML = result [0].confidence.toFixed(3);
    }
    }