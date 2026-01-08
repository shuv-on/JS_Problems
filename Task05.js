function rmvDup(arr){
    let unq = new Set(arr);
    return Array.from(unq);
}
//console.log(rmvDup([1,2,2,3,4,4,5]));