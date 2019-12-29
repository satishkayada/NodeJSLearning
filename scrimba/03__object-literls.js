/* Object use in construtor */
function Address(city, state) {
    /*Old way to copy object from paramter to another variable */
    let newAddrss = { city: city, state: state }

    /*with object literal we can ignore unwanted variable declation */
    let NewAddrss = { city, state }
    console.log(newAddrss)
    console.log(NewAddrss)
}
Address('Surat', 'Gujarat')