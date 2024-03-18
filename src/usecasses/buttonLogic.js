import { Operation, toggleOperations, renderValues, Historial } from "./index.js";
import { v4 as uuid } from 'uuid';

let numbers = '';
let render = '';
const historial = new Historial();
export let data = [];
export let strings = '';

export const buttonLogic = ( value ) => {
    const point = document.getElementById( 'point' );
    const total = document.getElementById( 'total' );
    const clearElement = document.getElementById( 'clear' );
    const toggleHistorial = document.getElementById( 'show-historial' );
    
    switch (value) {
        case 'C':
            Clear();
            toggleOperations('.number', false);
            total.disabled = true;
            renderValues(0);
            break;
      
        case '=':
            if (data.length !== 0 && numbers.length !== 0) {
                data.push(numbers * 1);
                const operation = new Operation(data);
                const result = operation.main();
                renderValues(result);
                historial.saveHistorial({ 'operation': strings, 'result': result, 'id': uuid() });
                Clear();
                clearElement.disabled = false;
            }
            break;
      
        case '.':
            if (numbers.length !== 0) {
                numbers += value;
                stringsView(value);
                point.disabled = true;
                toggleOperations('.operation', true);
            }
            break;
      
        default:
            if (typeof value === 'number') {
                render = value;
                numbers += value.toString();
                stringsView(render);
                toggleOperations('.operation', false);
                if (data.length !== 0) {
                total.disabled = false;
                }
            } else if (numbers.length !== 0) {
                toggleOperations('.operation', true);
                toggleOperations('.number', false);
                stringsView(value);
                data.push(numbers * 1);
                data.push(value);
                numbers = '';
                clearElement.disabled = false;
            } 
    }

    historial.activeButtons( value );
    toggleHistorial.disabled = false;

}

export const buttonValue = ( value ) => {
    stringsView( value );
    numbers = value;
    historial.activeButtons(value);
    toggleOperations( '.operation', false );
    toggleOperations( '.number', true );
    ( data.length !== 0 ) ? total.disabled = false : total.disabled = true;
}

const stringsView = ( value ) => {
    strings += value;
    renderValues( strings );
    return strings;
}

const Clear = () => {
    numbers, strings = '';
    data = [];
    toggleOperations( 'button', true );
}