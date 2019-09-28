function productSum(array, multiplier = 1) {
    let sum = 0
    array.forEach(ele => {
        if (Array.isArray(ele)) {
            sum += productSum(ele, multiplier + 1)
        } else {
            sum += ele
        }
    })
    return sum * multiplier;
}
