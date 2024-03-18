import { getValue, buttonLogic, ToggleHistorial } from './index.js';

export const ButtonListener = () => {
    const buttons = document.querySelectorAll( 'button' )
    const toggleHistorial = new ToggleHistorial()

    buttons.forEach(button => {
        button.addEventListener( 'click', ( e ) => {
            if ( e.target.id !== 'show-historial' ) {
                buttonLogic( getValue( e ) )
            } else {
                toggleHistorial.main( e.target.innerText );
            }
        });
    });
}