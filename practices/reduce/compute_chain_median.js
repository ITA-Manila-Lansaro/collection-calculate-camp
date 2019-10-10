'use strict';

function compute_chain_median(collection) {
    collection = collection.split('->').map(a => parseInt(a));
    let collectionLen = collection.length; 

    return collection.sort((a, b) => a - b)
    .reduce((a,b, c) => { 
        if (collectionLen % 2 == 0){
            let median = collectionLen/2;
            return collection[median] + 
                    ((collection[median] - collection[median + 1])/2);
        }
        else{
            return collection[median];
        }
    });
}

module.exports = compute_chain_median;
