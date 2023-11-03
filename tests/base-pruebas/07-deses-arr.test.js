import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe( "Pruebas en 07-deses-arr", () => {
    test( "debe de retornar un string y un número", ( ) => {
        const [ letters, numbers ] = retornaArreglo(); // Llamamos a la función, y la guardamos en un arreglo.

        expect(letters).toBe("ABC"); // Espera que las letras sean iguales.
        expect(numbers).toBe(123); // Espera que los números sean iguales.

        expect(typeof(letters).toBe("string")); // Espera que el tipo de variable de las letras sean string.
        expect(typeof(numbers).toBe("number")); // Espera que el tipo de variable de los números sean números.
        
        expect( letters ).toEqual( expect.any( String ) ); // Espera que las letras sean un string.
    });
});