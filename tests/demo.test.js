
describe("Pruebas en <DemoComponent/>", () => {
    test("Esta prueba no debe fallar.", () => { // We will test the demo.
        // 1. Inicialización
        const message1 = "Hola Mundo";

        // 2. estímulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento... esperado
        // expect( message1 ).toBe( message2 );
        expect( message1 ).toBe( message2 );
    });
})

