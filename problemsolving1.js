function searchNumber(arr, n) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            found = true;
            console.log(i)
            break;
        }
    }
    if (!found) {
        console.log(-1)
    }
}

searchNumber([0, 2, 5, 6, 8 , 11, 19], 1)

//time complexity (using Big O notation) = O(n) -> since there is only 1 loop