
function makeAddress(address) {
    const { city, state } = address
    let newAddress = {
        ctiy: city,
        state: state,
        country: 'India'
    }
    let fulladdress = `Full Address : ${city} ${state} `
    console.log(fulladdress)
}
makeAddress({ city: 'Surat', state: 'Gujarat' })
