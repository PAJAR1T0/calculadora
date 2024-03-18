
const operations = [ 'point', 'clear', 'multiply', 'divide', 'rest', 'sum', 'total' ];
    
export const getValue = ( id ) => {
        return (operations.includes(id.target.id)) ? id.target.innerText 
                                                   : (id.target.innerText)*1;
}