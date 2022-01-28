  Nosex=0;
  Nosey=0;
function preload()
{
    nose=loadImage("https://i.postimg.cc/kgtG7LMd/clown-nose.png");
}

function setup()
{
    canvas=createCanvas(400,400);
    canvas.position(750,450);
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw()
{
   image(video,0,0,400,400);
   
   image(nose,Nosex,Nosey,55,30);
}

function snapshot()
{
    save("sap_img.png");
}

function modelLoaded()
{
    console.log("Posenet is working")
}

function gotPoses(results)
{
   
    if(results.length>0)
    {
        console.log(results);
        Nosex=results[0].pose.nose.x;
        Nosey=results[0].pose.nose.y;
        console.log("Nose X="+Nosex);
        console.log("Nose Y="+Nosey);
    }
}