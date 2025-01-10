const reverseString = function(string) {
    let newText = '';
    for(let i = string.length - 1; i >= 0; i--){
        newText+= string[i];
    }

    return newText;
};

// Do not edit below this line
module.exports = reverseString;
