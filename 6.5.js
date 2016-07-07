/*
* Strickland, Dylan - Assignment 6.5
* function receives two numbers, and returns a random number in between them.
* precondition: only accepts numbers.
*/

function inbetween(a, b) {
    if (a < b) {
        return generate(a, b)
    }
    else if (a > b) {
        return generate(b, a)
    }
    else {
        return a
    }
}

    function generate(x,y){
        var difference = y - x;
        var result = (Math.random() * difference) + x;
        return result;
    }
