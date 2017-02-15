'use strict'
const check = {
findMissing : function (arr1, arr2) {
    var result=[];
    for(var i=0; i<arr2.length; i++){
        if(arr1.indexOf(arr2[i])===-1){
            result.push(arr2[i]);
        }
        else if (arr1 && arr2 === []){
        	return 0;
        }
    }
    
    return result;
}
}
module.exports = check;