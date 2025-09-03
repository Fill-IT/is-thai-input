const { isThaiCharacter } = require('../../utils/is-thai-character')

describe('isThaiCharacter', () => {
    test('givenThaiCharacter_WhenCallingIsThaiCharacter_ThenReturnTrue', () => {
        const input = "ก"
        const expectedOutput = true
        const result = isThaiCharacter(input)
        expect(result).toBe(expectedOutput)
    })

    test('givenNonThaiCharacter_WhenCallingIsThaiCharacter_ThenReturnFalse', () => {
        const input = "a"
        const expectedOutput = false
        const result = isThaiCharacter(input)
        expect(result).toBe(expectedOutput)
    })
})
