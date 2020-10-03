
exports.min = function min (array) {
    let min
    if (Array.isArray(array) && array.length) {
        min = array[0];
        for (elem of array) {
            if (elem < min) {
                min = elem
            }
        }
    }else {
        return 0
    }
    return min;
}

exports.max = function max (array) {
    let max
    if (Array.isArray(array) && array.length) {
        max = array[0];
        for (elem of array) {
            if (elem > max) {
                max = elem
            }
        }
    }else {
        return 0
    }
    return max;
}

exports.avg = function avg (array) {
    let avg = 0
    if (Array.isArray(array) && array.length) {
        for (elem of array) {
            avg += elem
        }
    }else {
        return 0
    }
    avg = avg / array.length
    return avg;
}
