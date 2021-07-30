/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversedNum =  Math.abs(reverseString(x));
    
    if (reversedNum > 0x7FFFFFFF) {
        return 0;
    }

    reversedNum = x > 0 ? reversedNum : -reversedNum;
    return reversedNum;

};

function reverseString(n) {
    n = Math.abs(n) + ''
    console.log(n)
    n = n.split('').reverse().join('')
    return n;
}


let res = reverse(-2147483648)

console.log(res)