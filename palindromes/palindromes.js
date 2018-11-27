const palindromes = function(string) {
    let begin = 0;
    string  = string.replace(/[.,!\s]/g, "").toLowerCase();
    let end = string.length-1;
    while (begin < end) {
        if(string[begin]!==string[end]) {
            return false;
        }
        begin += 1;
        end -= 1;
    }
    return true;
}

module.exports = palindromes
