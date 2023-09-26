// Given an array of integers a , your task is to find how many of its contiguous subarrays of length m contain a pair of integers with a sum equal to k.

// More formally, given the array a , your task is to count the number of indices 0 < i < a.length such that a subarray [a[i], a[i+1], …, a[i+m-1]] contains at least one pair (a[s], a[t]), where:

// s ≠ t
// a[s] + a[t] = k

// Example:
// 1. 
// For a = [2, 4,7,5, 3, 5, 8, 5, 1, 7], m = 4, and k = 10, the output should be solution(a, m, k) = 5.
// Let consider all subsarray of length m = 4 and see which fit the description conditions:
// Subarray a[0..3] = [2, 4, 7, 5] doesn't contain any pair of integers with a sum of k = 10. Note that although the pair (a[3], a(3)) has return the sum 5+5 = 10, it doesn’t fit the requirement s ≠ t.
// Subarray a[1..4] = [4, 7, 5, 3] contains the pair (a[2], a[4]), where a[2] + a[4] = 7 + 3 = 10.
// Subarray a[2..5] = [ 7, 5, 3, 5] contains two pairs (a[2], a[4]), and (a[3], a[5]), both with sum of k=10
// Subarray a[3..6] = [ 5, 3, 5, 8] contains the pair (a[3], a[5]), where a[3] + a[5] = 5 + 5 = 10.
// Subarray a[4..7] = [ 3, 5, 8, 5] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
// Subarray a[5..8] = [ 5, 8, 5, 1] contains the pair (a[5], a[7]), where a[5] + a[7] = 5 + 5 = 10.
// Subarray a[6..9] = [ 8, 5, 1, 7] doesn’t contain any pair with sum of k=10.
// 	So, the answer is 5, because there are 5 contiguous subarrays that contain a pair with a sum of k = 10.

// 2.
// For a= [15, 8, 8, 2, 6, 4, 1, 7], m=2, and k=8, the output should be solution(a, m, k) = 2.
// 	There are 2 subarrays satisfying the description conditions:
// a[3..4] = [2, 6], where 2+6 =8
// a[6..7] = [1, 7], where 1+7 =8

let a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7]
let m = 4
let k = 10

let aa = [15, 8, 8, 2, 6, 4, 1, 7]
let mm = 2
let kk = 8

const solution = (a, m, k)=>{
    let count = 0

    for (let i = 0; i <= a.length - m; i++) {
        let subarray = a.slice(i, i + m)
        let pairFound = false

        for (let j = 0; j < subarray.length - 1; j++) {
            for (let l = j + 1; l < subarray.length; l++) {
                if (subarray[j] + subarray[l] === k) {
                    pairFound = true
                    break
                }
            }

            if (pairFound) {
                break
            }
        }

        if (pairFound) {
            count++
        }
    }

    return `(a, m, k) = ${count}`
}

console.log(solution(a, m, k))
console.log(solution(aa, mm, kk))