/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    x = x+''
    return reverseString(x) === x
};

function reverseString(string){
    string = string +'';
    let arr = string.split('');
    for(var i=0;i<arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length -i -1];
        arr[arr.length -i -1] = temp;
    }

    return arr.join('')
}

let res = isPalindrome(123)
console.log(res)