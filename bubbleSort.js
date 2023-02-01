function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let largerVal = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = largerVal
                swapped = true
            }
        }
        if (!swapped) {
            return arr
        }
    }
    return arr
}

let sample_list = [1, 5, 2, 6, 7]
console.log(`Unsorted list: ${sample_list}`)
bubbleSort(sample_list)
console.log(`Sorted list: ${sample_list}`)