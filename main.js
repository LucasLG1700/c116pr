noseX = 0;
noseY = 0;
function preload(){
 clownNose = loadImage('https://i.postimg.cc/GpVK7s59/th-1-removebg-preview.png')
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

    }
}
function draw(){
 image(video, 0, 0, 300, 300);
 image(clownNose, noseX, noseY, 50, 30);
}
function takeSnapshot(){
    save('myFilterImage.png');
}