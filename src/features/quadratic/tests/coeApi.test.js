import request from 'supertest';

describe('Coefficient API test', () => {

    test('should return array of objects like: { a, b, c }[]', async () => {

        const response = await request('http://localhost:9000/').get('/test-coefficients.json');

        const data = response.body;

        expect( Array.isArray(data) ).toBe(true);

        data.forEach(item => {
            expect(item).toHaveProperty('a');
            expect(item).toHaveProperty('b');
            expect(item).toHaveProperty('c');

            expect( +item.a ).not.toBeNaN();
            expect( +item.b ).not.toBeNaN();
            expect( +item.c ).not.toBeNaN();
        });
    });

});
