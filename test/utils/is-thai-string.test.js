const { isThaiString } = require('../../utils/is-thai-string')

describe('isThaiString', () => {
    test('givenThaiString_WhenCallingIsThaiString_ThenReturnTrue', () => {
        const input = "สวัสดี"
        const expectedOutput = true
        const result = isThaiString(input)
        expect(result).toBe(expectedOutput)
    })

    test('givenNonThaiString_WhenCallingIsThaiString_ThenReturnFalse', () => {
        const input = "Hello"
        const expectedOutput = false
        const result = isThaiString(input)
        expect(result).toBe(expectedOutput)
    })
    
    test('givenMixThaiAndNonThai_WhenCallingIsThaiString_ThenReturnFalse', () => {
        const input = "Hello สวัสดี"
        const expectedOutput = false
        const result = isThaiString(input)
        expect(result).toBe(expectedOutput)
    })
})
