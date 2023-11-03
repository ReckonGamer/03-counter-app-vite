import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe( "Pruebas en 05-funciones", () => {
    test( "getUser debe de retornar un objeto", ( ) => {
        const testUser = { // Objeto.
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(); // Llama a la función.
        
        expect( testUser ).toEqual( user ); // Espera que el usuario nuevo, sea igual al usuario.
    });

    test("getUsuarioActivo debe de retornar un objeto", () => {
        const name = "Pau"; // String.

        const user = getUsuarioActivo ( name ); // Le pasamos la variable a la función para ver si el usuario está activo. 

        expect(user).toStrictEqual({ // Espera que el usuario sea estrictamente igual al objeto.
            uid: "ABC567",
            username: name
        });
    });
});