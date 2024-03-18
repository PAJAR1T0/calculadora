export class ToggleHistorial {
    constructor(){
        this.calculatorBox = document.querySelector('#calculator-box');
        this.historialDesign = document.querySelector('#historial_design');
        this.hisorial = document.querySelector('#historial');
        this.button = document.querySelector('#show-historial');
    }
    main(text){
        let [innerText, display, boxShadow, width, padding] = (text === '<') 
                                                        ? ['>', 'none', 0, '0', '0'] 
                                                        : ['<', 'block', 0.3, '230px', '10px'] ;

        this.button.innerText = innerText;
        this.hisorial.style.display = display;
        this.calculatorBox.style.boxShadow = `rgba(0, 0, 0, ${boxShadow}) 0px 0px 20px`;
        this.historialDesign.style.width = width;
        this.historialDesign.style.padding = padding;
    }
}