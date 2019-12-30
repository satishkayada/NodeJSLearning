/**
 * arraw function used to allow us to reduce boiler plate code for function it also
 * use to replace call,bind
 */
function Num(...num) {
    console.log(num.reduce((x, y) => x + y))
}
Num(2, 3, 5)

