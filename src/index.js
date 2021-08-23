module.exports = function reverse (n) {
    n = n + '';
    let reversedText = n.split('').reverse().join('');
    let reversedNumber = parseInt(reversedText, 10);
    return reversedNumber;
}
