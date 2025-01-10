const repeatString = function(string,num) {
    let newText = '';
    if (num < 0){
        return "ERROR";
    }

    for (let i = 0; i < num; i++){
        newText+= string;
    }

    return newText;
};

// Do not edit below this line
module.exports = repeatString;
