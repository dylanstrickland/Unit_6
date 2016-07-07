/*
* Strickland, Dylan - Assignment 6.3
* function receives an array of numbers, and returns the average 
* precondition: only accepts numbers.
*/

function average(a){
    var result = 0;
    var total = 0;
    for (var i = 0; i < a.length; i++){
        total += a[i];
        result = total / (i + 1);
    }
    return result;

}
