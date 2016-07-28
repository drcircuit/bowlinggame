/**
 * Created by Espen on 7/28/2016.
 */
module.exports = function(){

    var rolls = [];
    var currentRoll = 0;

    function frameIsStrike(frameIndex) {
        return rolls[frameIndex] == 10;
    }

    function strikeBonus(frameIndex) {
        return 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2];
    }

    function frameIsSpare(frameIndex) {
        return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
    }

    function spareBonus(frameIndex) {
        return 10 + rolls[frameIndex + 2];
    }

    return {
        roll: function (pins) {
            rolls[currentRoll++] = pins;
        },
        score: function () {
            var score = 0;
            var frameIndex = 0;
            for(var frame = 0;frame < 10;frame++){
                if(frameIsStrike(frameIndex)){
                    score += strikeBonus(frameIndex);
                    frameIndex += 1;
                } else if(frameIsSpare(frameIndex)){
                    score += spareBonus(frameIndex);
                    frameIndex += 2;
                } else {
                    score += rolls[frameIndex] + rolls[frameIndex+1];
                    frameIndex += 2;
                }
            }
            return score;
        }
    };
};