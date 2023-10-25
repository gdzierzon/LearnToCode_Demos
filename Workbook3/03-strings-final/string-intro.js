let sentence
sentence = "This is a string";
sentence = 'This is a string'; 
sentence = `This is a string`;

sentence = "I want to 'quote someone'";
sentence = 'I want to "quote someone"';
let firstName = "John"
sentence = `Hello ${firstName}`; // ONLY with ` - string interpolation

// escape characters \
// \n = new line
// \t = tab
// \\ = \
sentence = "this is a \new line";
sentence = "this actually displays a \\";
sentence = "I want to \"quote someone\"";
console.log(sentence);