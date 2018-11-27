const removeFromArray = function(...args) {
    let array = args[0];
    return array.filter(i=>!args.includes(i));
}

module.exports = removeFromArray;
