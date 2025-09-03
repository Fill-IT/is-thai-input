function isThaiCharacter(character) {
    return /[\u0E00-\u0E7F]/.test(character)
}

module.exports = { isThaiCharacter }