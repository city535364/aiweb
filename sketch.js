



// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Simple Image Classification using MobileNet
This example uses promises to create the classifier
=== */

const image = document.getElementById('image'); // The image we want to classify
const result = document.getElementById('result'); // The result tag in the HTML
const probability = document.getElementById('probability'); // The probability tag in the HTML
load_pic();
// Initialize the Image Classifier method with MobileNet
ml5.imageClassifier('MobileNet')
  .then(classifier => classifier.predict(image))
  .then(results => {
    result.innerText = results[0].className;
    probability.innerText = results[0].probability.toFixed(4);
});

function load_pic(){
  fn = decodeURI(getQueryString("file"));
  url = fn
  //url = "https://firebasestorage.googleapis.com/v0/b/fileupload-40884.appspot.com/o/" + fn + "?alt=media&token=decc6dbb-1ff8-4944-9b69-88465b65e92b"  
  image.src = url;
}



function getQueryString(paramName) {
            paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]").toLowerCase();  
            var reg = "[\\?&]" + paramName + "=([^&#]*)"; 
            var regex = new RegExp(reg); 
            var regResults = regex.exec(window.location.href.toLowerCase());            	
            if (regResults == null) 
    	        return ""; 
             else 			
                return regResults[1];
}




