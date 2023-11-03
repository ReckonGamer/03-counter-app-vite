import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
    test('getHeroeById debe de retornar un héroe por ID', () => { 
        
        const id = 1; // ID heroe.
        const hero = getHeroeById(id); // El heroe será el heroe recogido por id.

        expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC"}); // Espera que el héroe sea el que pide por parámetro.
    }),

    test('getHeroeById debe de retornar undefined si no existe', () => { 
        
        const id = 100; 
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy(); // Espera que el héroe no exista.
    });

    test('getHeroeByOwner debe de retornar un héroe si es de DC', () => { 
        
        const owner = "DC";
        const hero = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2); // Espera que hayan 2 héroes.
        expect( hero ).toEqual([ // Espera que el héroe sea igual al array.
            { id: 1, name: 'Batman', owner: 'DC'},
            { id: 2, name: 'Superman', owner: 'DC'},
            { id: 4, name: 'Flash', owner: 'DC'},
            
        ]);

        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner)); // Espera que el héroe sea igual al resultado de filtrar los héroes por propietario.
    });

    test('getHeroeByOwner debe de retornar un héroe si es de Marvel', () => { 
        
        const owner = "Marvel";
        const hero = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect( hero ).toEqual([ // Espera que el héroe sea igual al array.
           { id: 2, name: 'Spiderman', owner: 'Marvel' },
           { id: 5, name: 'Wolverine', owner: 'Marvel' },
        ]);

        expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner)); // Espera que el héroe sea igual al resultado de filtrar los héroes por propietario.
    });
    });

});