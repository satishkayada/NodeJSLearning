var Async = require('async');
Async.waterfall(
    [
        function one(callback) {
            console.log('one')
            callback('one')
        },
        function two(arg, callback) {
            console.log('two', arg)
            callback(arg)
        }
    ], (err, responce) => {
        console.log('final ', responce)
    }
)
// async.waterfall([
//     function (callback) {
//         console.log('1 Method Called')
//         callback(null, 'Arg 1'); //paramx will be availaible as the first parameter to the next function
//         /**
//             The 1st parameter passed in callback.
//             @null or @undefined or @false control moves to the next function
//             in the array
//             if @true or @string the control is immedeatly moved
//             to the final callback fucntion
//             rest of the functions in the array
//             would not be executed
//         */
//     },
//     function (arg1, callback) {
//         console.log('2 Method Called', arg1)
//         //doSomething else
//         // arg1 now equals paramx
//         callback(null, arg1 + ' arg 2');
//     },
//     function (arg1, callback) {
//         //do More
//         // arg1 now equals 'result'
//         console.log('3 Method Called', arg1)
//         callback(null, 'done');
//     },
//     function (arg1, callback) {
//         //even more
//         // arg1 now equals 'done'
//         console.log('4 Method Called', arg1)
//         callback(null, 'done');
//     }
// ], function (err, result) {
//     console.log('result print', result)
//     //final callback function
//     //finally do something when all function are done.
//     //result now equals 'done'
// }); 