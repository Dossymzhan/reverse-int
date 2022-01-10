module.exports = function reverse (n) {
    const str = Math.abs(n).toString().split('').reverse().join('');
    n = parseInt(str);
    return str
}
