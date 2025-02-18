const arr = [];

function fib(num) {

    const fibArr = [];
    for(let i = 0; i < num; i++) {
        if( i === 0 ){
            fibArr.push(i);
        } else if( i === 1 ) {
            fibArr.push(i);
        } else {
            fibArr.push(fibArr[(i-1)] + fibArr[(i-2)]);
        }
    }

    return fibArr;
}


function fibRecursive(num) {
    if( num === 0 || num === 1 ) {
        return num;
    } else {
       return fibRecursive( num - 2 ) + fibRecursive( num - 1 );
    }
    
}

console.log(fib(8));
console.log(`from recursive, fibonacci 8 is: ${fibRecursive(8)}`);


/***Merge sort implementation********/

function mergeSort( nums ) {
    let length = nums.length;
    const hold = [];
    if( length === 1 ) {
        return nums;
    } else {
        let leftLength = Math.floor( length / 2 );
        let rightLength = length - leftLength;
        let leftCounter = 0;
        let rightCounter = 0; 

        //split array in half
        let leftArr = mergeSort(nums.slice(0, leftLength));
        let rightArr = mergeSort(nums.slice(leftLength, length));

        while( ( leftLength !== leftCounter ) || ( rightLength !== rightCounter ) ) {
            //Left or right half finished? append the remainder of the other half
            if ( ( leftLength === leftCounter ) && ( rightLength !== rightCounter ) ) {
                for (let n = rightCounter; n < rightLength; n++ ) {
                    hold.push( rightArr[n]);
                }
                return hold;
            } else if ( ( rightLength === rightCounter ) && ( leftLength !== leftCounter ) ) {
                for (let m = leftCounter; m < rightLength; m++ ) {
                    hold.push( leftArr[m]);
                }
                return hold;

                //Else compare the elements and append the smallest
            } else if ( leftArr[ leftCounter ] < rightArr[ rightCounter ] ) {
                hold.push( leftArr[leftCounter] );
                leftCounter++;
            } else {
                hold.push( rightArr[rightCounter] );
                rightCounter++;
            }
        }

        return hold;

    }
}

console.log( mergeSort( [3, 2, 1, 13, 8, 5, 0, 1] ) );  //Output: [0, 1, 1,  2, 3, 5, 8, 13]
console.log( mergeSort( [105, 79, 100, 110] ) );  //Output: [ 79, 100, 105, 110 ]