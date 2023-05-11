import { getSaludo } from "../../base-pruebas/base-pruebas/02-template-string";

describe('prueba en string 20-string ', () => {


    test('get saludo debe return "Hola fernando"', () => {

        const name = 'fernando';

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    })
})