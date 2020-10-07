module.exports = function toReadable (number) {
    let num = number.toString();
    let answer ="";

    if (number >= 0 && number < 14) {
        answer = firstRank(number);
    } else if (number >= 14 && number < 20){
        if (number === 15) {
            answer = "fifteen";
        }
        else {
            answer = firstRank(+num[1]);
            if (answer[answer.length-1] !== 't'){
                answer += "teen";
            }
            else {
                answer += "een";
            }
        }
    } else if (num.length === 2 && number > 19) {
        answer = secondRank(+num[0]);
        if (+num[1] > 0){
            answer = answer + " " + firstRank(+num[1]);
        }
    } else if (num.length === 3) {
        answer = firstRank(+num[0]) + " " + "hundred";
        if (+num[1] >= 0 && +num[2] !== 0) {
            if (+num[1] === 0) {
                answer = answer + " " + firstRank(+num[2]);
            } else if (+num[1] === 1) {
                let pair = num[1]+num[2];
                if (+pair < 14) {
                    answer += " " + firstRank(+pair);
                } else if (+pair >= 14 && +pair < 20){
                    if (+pair === 15) {
                        answer += " fifteen";
                    }
                    else {
                        answer += " " + firstRank(+pair[1]);
                        if (answer[answer.length-1] !== 't'){
                            answer += "teen";
                        }
                        else {
                            answer += "een";
                        }
                    }
                } 
            } else {
                answer += " " + secondRank(+num[1]);
                if (+num[2] > 0){
                    answer = answer + " " + firstRank(+num[2]);
                }
            }
        }
        else if (+num[1] !== 0 && +num[2] === 0) {
            if (+num[1] === 1 && +num[2] === 0){
                answer += " ten";
            }
            else {
                answer += " " + secondRank(+num[1]);
                if (+num[2] > 0){
                    answer = " " + answer + " " + firstRank(+num[2]);
                }
            }
        }
    }

    return answer;
}

function firstRank(strNumber) {
    return strNumber === 0 ? "zero" : strNumber === 1 ? "one" : strNumber === 2 ? "two" : strNumber === 3 
    ? "three" : strNumber === 4 ? "four" : strNumber === 5 ? "five" : strNumber === 6 ? "six"
     : strNumber === 7 ? "seven" : strNumber === 8 ? "eight" :  strNumber === 9 ? "nine" : strNumber === 10 ? "ten" : strNumber === 11 ? "eleven" : strNumber === 12 ? "twelve" : "thirteen";
}

function secondRank(strNumber) {
    return strNumber === 2 ? "twenty" : strNumber === 3 ? "thirty" : strNumber === 4 ? "forty" : strNumber === 5 
    ? "fifty" : strNumber === 6 ? "sixty" : strNumber === 7 ? "seventy" : strNumber === 8 ? "eighty"
     : "ninety";
}