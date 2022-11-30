function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/XCJnUSFgc/model.json', modelReady);
}

 function modelReady()
{
    classifier.classify(gotResults);
}