function combineArr(arrA, arrB) {
    let flag = false;
    for (let i = 0; i < arrB.length; i++) {
        arrA.push(arrB[i]);
    }
    for (let i = 0; i < arrA.length; i++) {
        flag = false
        for (let x = 0; x < arrA.length; x++) {
            if (arrA[x] > arrA[x + 1]) {
                let temp = arrA[x];
                arrA[x] = arrA[x + 1];
                arrA[x + 1] = temp; 
                flag = true
            }
        }
        if (flag === false) {
            break;
        }
    }
    console.log(arrA)
}

combineArr([1, 5, 8], [2, 3, 7])