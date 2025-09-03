# is-thai-input

A lightweight JavaScript library for detecting Thai characters and strings.

## Installation

```bash
npm install is-thai-input
```

## Usage

### Basic Usage

```javascript
const { isThaiCharacter, isThaiString } = require('is-thai-input');

// Check if a single character is Thai
console.log(isThaiCharacter('ก')); // true
console.log(isThaiCharacter('a')); // false

// Check if an entire string contains only Thai characters
console.log(isThaiString('สวัสดี')); // true
console.log(isThaiString('hello')); // false
console.log(isThaiString('สวัสดี world')); // false
```

## API Reference

### isThaiCharacter(character)

Checks if a single character is a Thai character.

**Parameters:**
- `character` (character): A single character to check

**Returns:**
- (boolean): `true` if the character is Thai, `false` otherwise

**Example:**
```javascript
isThaiCharacter('ก'); // Returns: true
isThaiCharacter('a'); // Returns: false
```

### isThaiString(string)

Checks if all characters in a string are Thai characters.

**Parameters:**
- `string` (string): The string to check

**Returns:**
- (boolean): `true` if all characters are Thai, `false` otherwise

**Example:**
```javascript
isThaiString('สวัสดี'); // Returns: true
isThaiString('hello'); // Returns: false
isThaiString('สวัสดี world'); // Returns: false (mixed languages)
```

## Supported Characters

- All Thai consonants (ก-ฮ)
- Thai vowels and tone markers
- Thai numbers (P-Y)
- Thai punctuation and symbols in Unicode range U+0E00-U+0E7F

## Development

### Running Tests

```bash
npm test
```

### Project Structure

```
is-thai-input/
├── index.js                    # Main entry point
├── utils/
│   ├── is-thai-character.js   # Single character detection
│   ├── is-thai-string.js      # String detection
├── test/
    └── utils/
        ├── is-thai-character.test.js  # Tests
        ├── is-thai-string.test.js
```

## Use Cases

- Input validation for Thai text
- Language detection in multilingual applications
- Text processing and filtering
- Form validation for Thai-specific fields
- Content management systems handling Thai content

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## Repository

GitHub: [https://github.com/Fill-IT/is-thai-input](https://github.com/Fill-IT/is-thai-input)

## License

MIT

## Keywords

thai, ไทย, character detection, string validation, unicode, text processing