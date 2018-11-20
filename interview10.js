var word1 = "racecar";
var word2 = "cat";
var arr = [];
var array1 = [];
var array2 = [];

function palindrome(words) {
    arr = words.split("");
    for (var i = 0; i <arr.length; i++){
        // console.log(arr[i]);
        array1.push(arr[i]);
        array1.join('');

    }
    console.log(array1.join(""));

    for(var j= arr.length - 1; j> -1; j--){
        // console.log(arr[j]);
        array2.push(arr[j]);
        array2.join();

    }
    console.log(array2.join(""));

    if(array1.join("") == array2.join("")){
        console.log("This word is a palindrome");
    }
    else if(array1.join("") != array2.join("")){
        console.log("This word is not a palindrome");
    }

}

palindrome("racecar");
