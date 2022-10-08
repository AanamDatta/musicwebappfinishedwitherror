song1 = ""
song2 = ""
rightwristX = 0
rightwristY = 0 
leftwristX = 0
leftwristY = 0
scoreleftwrist = 0 
scorerightwrist = 0 
function setup() {
    canvas = createCanvas(600,500)
    canvas.position(500,150)
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.poseNet(video, modeloaded) 
    classifier.on("pose",gotresult)

    }
    function modeloaded(){
        console.log("model is loaded")
     }
    function draw() {
        image(video,0,0,600,500 )
        fill("red")
        if (scoreleftwrist > 0.2) {
            song1.play()
            circle(leftwristX , leftwristY , 10)

        }
        if (scorerightwrist > 0.2) {
            song2.play()
            circle(rightwristX , rightwristY , 10)

        }
    }
        
    
    function preload(){
        song1 = loadSound("09-Peter_Pan-Victory_song.mp3")
      
        song2 = loadSound("Harry Potter Theme Song.mp3")
    }
function gotresult(error, results){
    if (error) {
        console.log("error")
    } else {
        console.log(results)
        if (results.length > 0) {
            leftwristX = results[0].pose.leftWrist.x
            leftwristY = results[0].pose.leftWrist.y
            rightwristX = results[0].pose.rightWrist.x
            rightwristY = results[0].pose.rightWrist.y
            console.log(results)
        } 
    }
    
    leftwristscore = results[0].pose.keypoint[9].score;
    rightwristscore = results[0].pose.keypoint[10].score;
 }
