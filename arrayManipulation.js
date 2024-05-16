function processArray (arr){
    return arr.map(
        x => x % 2 === 0 ? x * x : x + x + x
    );
}



