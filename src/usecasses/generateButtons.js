export class GenerateButtons {
    constructor(){
        this.buttons = document.getElementById( 'numbers' );
        this.operations = [{'id':'point', 'show':'.'},
                            {'id':'clear', 'show':'C'},
                            {'id':'multiply', 'show':'X'},
                            {'id':'divide', 'show':'/'},
                            {'id':'rest', 'show':'-'},
                            {'id':'sum', 'show':'+'},]
    }

    buildButtons(idName, className, show){
        const button = document.createElement( 'button' );
            button.id = idName;
            button.className = className;
            button.innerText = show; 
            this.buttons.appendChild(button);
    }
    
    generateButtons(){
        for ( let i = 0; i <= 9; i++ ) {
            this.buildButtons( `number-${i}`, 'number', i );
        }
        this.operations.forEach( operation => {
            this.buildButtons( operation.id, 'operation', operation.show );
        })
    }
}