import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {

    test('debe de mostrar el título en un h1', () => { 
        
        const title = "Hola, soy Pau";
        // Renderizamos el componente, con el título.
        const {container, getByText, getByTestId} = render( <FirstApp title= { title } /> );       
        expect( getByText(title) ).toBeTruthy(); // Espera a que haya un título.

        expect(getByTestId("test-title").innerHTML().toBe(title)); // Espera a que sea la variable que hemos creado.

    });

    test('debe de mostrar el subtítulo enviado por props', () => { 
        
        const title = "Hola, soy Pau";
        const subTitle = "Soy un subtítulo";

        const { getAllByText } = render ( // Renderizamos con valores. pasados a través del componente.
            <FirstApp 
                title= { title } 
                subTitle= { subTitle }             
            /> 
        );  

        expect( getAllByText(subTitle).length).toBe(3); // Espera que el tamaño del subtítulo sea 3.
    });
});