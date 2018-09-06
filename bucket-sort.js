8
1


3, 8, 7, 1, 2

1, 2, 7, 3, 8

let low = 1;
let high = 15;

// const bucketSort = (array, bucketSize) => {
//     if (array.length === 0 || array.length === 1 ){
//         return array;
//     }
//     let minVal = low;
//     let maxVal = high;
    
//     let bucketCount = Math.floor((maxVal - minVal)/bucketSize) + 1;
//     //new array of buckets
//     let buckets = new Array(bucketCount);
//     //buckets is now array of arrays
//     for(let i = 0; i < buckets.length; i++){
//         buckets[i] = [];
//     }

//     //sorting items from input array into buckets based on their values
//     //relative to the min val and bucket size
    
//     array.forEach(item => {
//         let bucketIndex =  Math.floor((item - minVal)/bucketSize)
//         buckets[bucketIndex].push(item)
//     });


//     // buckets.forEach(bucket => bucket.sort((a,b) => a-b));


//     // console.log(buckets);
//     let results = [];
//     for(let j = 0; j < buckets.length; j++){
//             console.log(buckets[j])
//             results = [...results, ...buckets[j]];
//     }
//     // console.log(results);
//     return results;
// }

// let tester = [1, 2, 8, 4, 6, 7, 2, 3, 5];
// console.log(bucketSort(tester, 4));

function bucketSort(arr, min, max) {
    var buckets = Array(max - min + 1);
    
    for(let i=0; i < arr.length; i++) {
        buckets[arr[i]-min] = (buckets[arr[i] - min] | 0) + 1;
        console.log(buckets);
    }
    
    var ret = [];

    for(let i=min; i<=max; i++) {
        for(let j=0; j<buckets[i - min]; j++) {
            ret.push(i);
            console.log(ret);
        }
    }

    return ret;
}