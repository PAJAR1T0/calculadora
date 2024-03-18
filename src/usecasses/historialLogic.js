import HistorialEmpty from '../../assets/historial/historialEmpty.html?raw'
import { buttonValue } from './index.js';

let historialBox = '';
let add = null;
let remove = null;

export class Historial {
    constructor(){
        this.historial = [];
        this.historialEmpty = HistorialEmpty;
    }

    setHistorialBox(){
        historialBox = document.querySelector('#historial');
    }

    renderHistorial(){
        if (this.historial.length === 0){
            historialBox.innerHTML = this.historialEmpty;
        } else {
            while (historialBox.firstChild) {
                historialBox.removeChild(historialBox.firstChild);
            }
            this.historial.forEach( element => {
                const div = document.createElement('div');
                div.innerHTML = `
                <h3>${element.operation}</h3>
                <h4>${element.result}</h4>
                <button class='add'><i id='add' class="fa-solid fa-plus"></i></button>
                <p class='separator'>|</p>
                <button class='remove'><i class="fa-regular fa-trash-can"></i></button>
                `;
                div.className = 'historial-element';
                div.id = element.id;
                historialBox.appendChild(div);
                add = document.querySelectorAll('.add');
                remove = document.querySelectorAll('.remove');
                div.addEventListener('click', (e) => {
                    this.addRemoveEvent(e, element.id, element.result);
                });
            })
        }
    }

    addRemoveEvent( e, id, result ){
        const buttonType = ( e.target.closest( '.add, .remove' ).className );
        if ( buttonType === 'add' ){
            buttonValue( result );
        } else {
            this.historial = this.historial.filter( element => element.id !== id );
            localStorage.setItem('historial', JSON.stringify( this.historial ));
            this.renderHistorial();
        }
    }

    loadHistorial(){
        if (localStorage.getItem( 'historial' )){
            this.historial = JSON.parse(localStorage.getItem( 'historial' ));
        }
        this.renderHistorial();
    }

    saveHistorial( data ){
        const storedHistorial = JSON.parse( localStorage.getItem( 'historial' ) );
        this.historial = [ data, ...storedHistorial ];
        localStorage.setItem( 'historial', JSON.stringify( this.historial ) );
        this.renderHistorial();
    }

    activeButtons( value ){
        if ( add ){
            if (typeof value === 'number' || value === '=' ) {
                add.forEach( element => element.disabled = true );
                remove.forEach( element => element.disabled = false );
            } else {
                [ ...remove, ...add ].forEach( element => element.disabled = false );
            }
        }
    }
}