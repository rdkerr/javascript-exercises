const caesar = function(string, shift) {
    const alphabet = new Array(26).fill(1).map((_, i)=> String.fromCharCode(65+i));
    return string.split("")
        .map(e => {
            const index = alphabet.indexOf(e.toUpperCase());
            //return index;
            if (index < 0) {
                return e;
            } else if(e===e.toUpperCase()) {
                return alphabet[mod((index + shift), 26)];
            } else {
                return alphabet[mod((index + shift), 26)].toLowerCase();
            }
        }).join("");
}

var mod = function (n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
};

module.exports = caesar;
