const sumAll = function(start, end) {
    if(typeof start === "number" && typeof end === "number" &&
            start >= 0 && end>=0) {
        if (start > end) {
            let swap = start;
            start = end;
            end = swap;
        }
        return [...Array(end-start+1).keys()].map(i=>i+start).reduce((i,e)=>i+e);
        
    } else {
        return "ERROR";
    }
}

module.exports = sumAll
