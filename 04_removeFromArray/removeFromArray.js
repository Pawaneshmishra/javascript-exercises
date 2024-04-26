const removeFromArray = function(array, ...items) {
    for(const item of items){
        for(let index=array.length-1; index>=0; index--){
            if(array[index] === item){
                array.splice(index,1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
