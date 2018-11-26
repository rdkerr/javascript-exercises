const snakeCase = function(string) {
    // wtf
    string = string.replace(/\.\./g," ");
    // camel case
    if (string.indexOf(" ") < 0) {
        string = string.replace(/([A-Z])/g,' $1');
    }
    return string.toLowerCase()
        .replace(/[,-?]/g," ")
        .replace(/\s{2,}/g," ").trim().split(" ")
        .join("_");

}

module.exports = snakeCase;
