function setup(){
video=createCapture(VIDEO)
video.size(550,500)

canvas=createCanvas(550,550)
canvas.position(560,150)

model=ml5.poseNet(video,modelloded)
model.on("pose",gotresult)
}

function modelloded(){
console.log("model loaded succesfuly")
}

function draw(){
    background("#cce6ff")
}

function gotresult(result){
console.log (result)
}