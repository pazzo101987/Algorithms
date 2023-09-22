// Push Front

function pushFront(arr, val) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr
}

// Pop Front

function popFront(arr) {
    if (arr.length == 0) {
        console.log(arr);
        return undefined;
    } else {
        const val = arr[0]
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length--;
        console.log(arr)
        return val
    }
}

// Insert At

function insertAt(arr, index, val) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr
}