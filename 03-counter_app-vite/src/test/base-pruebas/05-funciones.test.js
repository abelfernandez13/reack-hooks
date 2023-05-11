import { getUser } from "../../base-pruebas/base-pruebas/05-funciones";


describe('test 05-funciones ', () => {

    test('getUser debe de return un objeto ', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    })
})