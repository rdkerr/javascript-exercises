const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } if (typeof num === "string") {
        num = Number(num);
    } if (num < 3) {
        return 1;
    }
    let a = 1;
    let b = 1;
    for (let i = 3 ; i <= num ; i ++) {
        let c = b;
        b = b + a;
        a = c;
    }
    return b;
}

module.exports = fibonacci
