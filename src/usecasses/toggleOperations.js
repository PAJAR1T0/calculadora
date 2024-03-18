export const toggleOperations = (selector, status) => {
    const operations = document.querySelectorAll(selector);
    operations.forEach( operation => {
        operation.disabled = status;
    })
};