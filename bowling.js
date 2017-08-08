var frames = [[]];

function roll(pins){
    var latestFrame = frames[frames.length - 1];

    if(latestFrame.length == 2){ // Two rolls, we need a new frame
        currentFrame = [];
        frames.push(currentFrame);
    }else{
        currentFrame = latestFrame;
    }

    currentFrame.push(pins);
}

function score(){
    var finalScore = 0;
    for(var frame of frames){
        var scoreForFrame = scoreForFrame(frame);
        finalScore += scoreForFrame;
    }
    return finalScore;
}

function scoreForFrame(frame){
    var frameScore = 0;
    for(var roll of frame){
        frameScore += roll;
    }
    return frameScore;
}

function startNewGame(){
    frames = [[]];
}


module.exports = {roll, score, startNewGame};