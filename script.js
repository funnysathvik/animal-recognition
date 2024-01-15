function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PizvkiOyh/",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        r1=Math.floor(Math.random() * 255)+1;
        r2=Math.floor(Math.random() * 255)+1;
        b1=Math.floor(Math.random() * 255)+1;
        b2=Math.floor(Math.random() * 255)+1;
        g1=Math.floor(Math.random() * 255)+1;
        g2=Math.floor(Math.random() * 255)+1;

        document.getElementById("name").style.color="rgb("+r1+","+b1+","+g1+")";
        document.getElementById("acccuracy").style.color="rgb("+r2+","+b2+","+g2+")";

        document.getElementById("name").innerHTML="I hear -- "+results[0].label;
        document.getElementById("name").innerHTML="I hear -- "+results[0].confidence;

        img = document.getElementById("hello");
        if(results[0].label == lion){
            img.src="th.jpeg";
        }
        if(results[0].label == dog){
            img.src="dog.jpeg";
        }
        if(results[0].label == snake){
            img.src="giphy.jpeg";
        }
        else {
            img.src="penguin.gif";
        }
    }
}