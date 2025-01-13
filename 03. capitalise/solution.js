function capitalise(word) {
  if (/[A-Z]/.test(word) === true) {
    let lowerCase = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lowerCase.slice(1);
  } else {
    return word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = { capitalise };

 
