
let result = "";
function reverseString(str){
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;

}
console.log(reverseString("hello"));