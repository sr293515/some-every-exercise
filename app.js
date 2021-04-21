function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true;
    }
    return false;
}

mySome([4,5,6,7], function(n){
    return n > 5;
})

function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;
    }
    return true;
}

myEvery([4,5,6,7], function(n){
    return n === 4;
})

