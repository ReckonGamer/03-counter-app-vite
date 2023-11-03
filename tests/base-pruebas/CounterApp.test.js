import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";

render

describe("Pruebas en el <CounterApp/>", () => {

    const initialValue = 10; // Valor inicial.

    test('debe de hacer match con el snapshot', () => {         
        const { container } = render( <CounterApp value = { 10 }/> ); // Renderizamos el componente, y le pasamos un valor.
        expect( container ).toMatchSnapshot(); // Esperamos que el container haga match con el snapshot.   
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value= {100}> ', () => { 
        render( <CounterApp value={ 100 }/> ); // Le pasamos un valor al componente.
        expect( screen.getByText( 100 ) ).toBeTruthy(); // Espera que el texto sea 100.

        // expect( screen.getByRole("heading"), { level: 2}.innerHTML ).toContain('1');
    });

    test('debe de incrementar con el botón +1 ', () => { 
        render( <CounterApp value={ initialValue }/> ); // Le pasamos como valor nuestro valor inicial, al componente.
        fireEvent.click( screen.getByText('+1') ); // Cuándo se haga click en el botón con el texto +1.
        expect( screen.getByText("1")).toBeTruthy(); // Espera que el texto sea 1.
    });

    test('debe de incrementar con el botón -1 ', () => { 
        render( <CounterApp value={ initialValue }/> );
        fireEvent.click( screen.getByText('-1') ); // Cuándo haga click en el -1.
        screen.debug();
        expect( screen.getByText("-1")).toBeTruthy();
    });

    test('debe de funcionar el botón de reset', () => { 
        render( <CounterApp value={ initialValue }/> ); // Renderizamos el contador, con el valor inicial.

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        screen.debug();

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' } )); // Cuándo haga click en el button con el nombre btn-reset.
        // expect( screen.getByText(355)).toBeTruthy();
    });
});