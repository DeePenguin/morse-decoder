const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr;
    const sentence = [];
    while (str.length) {
      sentence.push(str.slice(0, 10));
      str = str.slice(10);
    }
    const decodedSentence = sentence.map(letter => {
      if (letter.includes('*')) return ' ';
      else {
        let trimmedLetter = letter.slice(letter.indexOf('1'));
        trimmedLetter = trimmedLetter.replace(/10/g, '.');
        trimmedLetter = trimmedLetter.replace(/11/g, '-');
        return MORSE_TABLE[trimmedLetter];
      }
    });
  
    return decodedSentence.join('');
}

module.exports = {
    decode
}
