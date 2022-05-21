let debounce = (fn, wait) => {
    let timer = null;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, wait)
    }
}
export default debounce