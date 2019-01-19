let timeout;

const debounce = callback => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 200);
}

module.exports = debounce;
