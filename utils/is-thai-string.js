const { isThaiCharacter } = require('./is-thai-character')

function isThaiString(string) {
    return [...string].every(isThaiCharacter)
}

module.exports = { isThaiString }