function processArray (arr){
    return arr.map(
        x => x % 2 === 0 ? x * x : x + x + x
    );
}


function formatArrayStrings (arrNumbers, arrStrings){
    return arrStrings.map(
         (str,i) => arrNumbers[i] % 2 === 0 ? str.UpperCase() : str.LowerCase()
    );

}

