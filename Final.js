//Task 01
function reverseString(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;

}
//console.log(reverseString("shuvon"));
//Task 02
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
//console.log(countVowels("shuvon"));
//Task 03
function reverseString(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    if (str===result){
        return true;
    }else{
        return false;
    }

}
//console.log(reverseString("shuvon"));
//Task 04
function maxNum(arr){
    let max = Math.max(...arr);
    return max;
}
//console.log(maxNum([3,5,7,2,8,10]));
//Task 05
function rmvDup(arr){
    let unq = new Set(arr);
    return Array.from(unq);
}
//console.log(rmvDup([1,2,2,3,4,4,5]));
//Task 06
function sumArr(arr){
    let sum =0 ;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
//console.log(sumArr([1,2,3,4,5]));
// Task 07
function evenNum(arr){
    let even =[];
    for (let i=0;i<arr.length; i++){
        if(arr[i]%2===0){
            even.push(arr[i]);  
        }
    }
    return even;
}
//console.log(evenNum([1,2,3,4,5,6,7,8,9,10]));
// Task 08
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
// Task 09
function factorial(num){
    let fact= 1;
    for (let i=1; i<=num; i++){
        fact*=i;
    }
    return fact;
}
//console.log(factorial(5));
// Task 10
function pingPong() {
    for (let i = 1; i <= 20; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        }else if (i % 3 === 0) {
            console.log("Ping");
        }else if (i % 5 === 0) {
            console.log("Pong");
        }else {
            console.log(i);
        }

    }
}
//pingPong();
// End of File


