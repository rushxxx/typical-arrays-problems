
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
    return 0
}

exports.avg = function avg (array) {
    return 0
}
