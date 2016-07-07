/*
* Strickland, Dylan - Assignment 6.7
* function receives an array, and returns number of '0' contained within it
*/

function numberOfZeros(a){
    var count = 0;
    for (var i = 0; i < a.length; i++){
        if (parseInt(a[i]) == 0){
            count++;
        }
    }
    return count;
}
