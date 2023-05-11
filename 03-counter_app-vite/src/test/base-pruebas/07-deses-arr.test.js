import { retornaArreglo } from "../../base-pruebas/base-pruebas/07-deses-arr";

describe('test del 07-deses ', () => {

    test('retornar un numero y unas letras  ', () => {

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);


    })
})