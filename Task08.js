function capWords(str) {
    let words = str.split(" ");  
    let result = [];

    for (let word of words) {
        let cap =
            word[0].toUpperCase() + word.slice(1);
        result.push(cap);
    }

    return result.join(" ");
}
//console.log(capWords("hello world from javascript"));
