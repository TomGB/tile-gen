const queryString = require('query-string');
const twoGradients = require('../patterns/twoGradients');
const gradEveryLine = require('../patterns/gradEveryLine');

const selectPattern = (pattern) => {
    if (pattern === 'gradEveryLine') {
        return gradEveryLine;
    }

    return twoGradients;
}

const getPatternFunction = () => {
    const { pattern } = queryString.parse(location.search);
    return selectPattern(pattern);
}
module.exports = getPatternFunction;