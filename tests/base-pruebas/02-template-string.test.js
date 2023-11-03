import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => { // Prueba para ver que funciona.

    test('getSaludo debe de retornar "Hola Pau"', () => {  // Test para getSaludo.
        const name = "Pau"; // Ponemos el nombre.
        const message = getSaludo( name ); // Llamamos a la función, y le pasamos la variable como parámetro.

        expect (message).toBe(`Hola ${ name }`); // Espera que el mensaje sea el que está esperando.
    })
});