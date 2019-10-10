'use strict';

function grouping_count(collection) {
    const uniqueVal = collection.filter((x, y, z) => z.indexOf(x) === y);
    let count = 0;
    let groupingCount = {};

    uniqueVal.forEach(val => {
      let count = collection.filter(x => x === val).length;
      groupingCount[val.toString()] = count;
    });

    return groupingCount;
}

module.exports = grouping_count;
