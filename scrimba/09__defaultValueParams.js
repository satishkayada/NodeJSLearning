'use strict'
/**
 * while we are not passing any paramters to function and not give default then foreach function give errror
 * but if assisn default type or value then it will pick while not passing any parameters.
 */
function Num(nums = []) {
    let total = 0;

    nums.forEach((element) => {
        total += element;
    });
    console.log(total)
}
Num([1, 3, 4])

