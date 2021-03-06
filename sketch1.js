// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
const classifier = ml5.imageClassifier('MobileNet', modelReady);

// A variable to hold the image we want to classify
let img;

function setup() {
  noCanvas();
  // Load the image
  var url=decodeURI(getQueryString("file"));
  //var value = window.AppInventor.getWebViewString();
   url = "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2017/11/06/99/4205106.jpg"  
  //url = "https://firebasestorage.googleapis.com/v0/b/fileupload-40884.appspot.com/o/" + url + "?alt=media&token=decc6dbb-1ff8-4944-9b69-88465b65e92b"
  img = createImg(url, imageReady);
  img.size(400, 400);
}

// Change the status when the model loads.
function modelReady(){
  select('#status').html('Model Loaded')
  classifier.predict(img, gotResult);
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  classifier.predict(img, gotResult);
  // You can also specify the amount of classes you want
  // classifier.predict(img, 10, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
  // Display error in the console
  if (err) {
    console.error(err);
  }
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
}

function getQueryString(paramName) {
            paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]").toLowerCase();
            var reg = "[\\?&]" + paramName + "=([^&#]*)";
            var regex = new RegExp(reg);
            var regResults = regex.exec(window.location.href.toLowerCase());

            if (regResults == null) return "";
            else return regResults[1];
} 

