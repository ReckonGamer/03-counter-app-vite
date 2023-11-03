import { render, screen } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp";
screen
describe("Pruebas en <FirstApp/>", () => {
    const title = "Hola, soy Pau";
    const subTitle = "Soy un subtítulo"
    test('debe de hacer match con el snapshot', () => { 

        const { container } = render( <FirstApp title= { title } /> );
        
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, soy Pau"', () => { 
        
        return ( <FirstApp title= { title } /> );        
        expect( screen.getByText(title).toBeTruthy());
        // screen.debug();                 
    });

    test('debe de mostrar el título en h1', () => { 
        
        return ( <FirstApp title= { title } /> );                
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

    });

    test('debe de mostrar el subtítulo enviado por props', () => { 
        
        render (
            <FirstApp
                title= { title }
                subTitle= { subTitle }
            />
        )

        return ( <FirstApp title= { title } /> );                
        expect( screen.getAllByText(subTitle).length ).toBe( 2 );                      
    });
});