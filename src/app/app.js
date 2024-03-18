import { GenerateButtons, ButtonListener, toggleOperations, Historial } from '../usecasses/index.js';
import html from './main.html?raw';

export class App {
    constructor(){
        this.document = document.querySelector('#app')
    }

    buildHtml() {
        this.document.innerHTML = html;
        const total = document.getElementById('total');
        const generateButtons = new GenerateButtons()
        generateButtons.generateButtons()
        toggleOperations('.operation', true)
        total.disabled = true;
    }
    
    buttonListener() {
        ButtonListener();
    };
        
    main() {
        this.buildHtml();
        this.buttonListener();
        const historial = new Historial();
        historial.setHistorialBox();
        historial.loadHistorial();
    }

    }
