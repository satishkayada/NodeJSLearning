'use strict'

var payLoad = {
    name: 'satish',
    vitamins: [5, 6, 7]
}
var secondElement = payLoad.vitamins.reduceRight((sum, num2) => {
    console.log(num2)
    return sum + num2
})
console.log('final result', secondElement)

console.log('Start Join Concept')
var joinValue = payLoad.vitamins.join('-')
console.log(joinValue)
console.log('End Join Concept')
