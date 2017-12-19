// jest ile bir modülü mocklamak için öncelikle mock 
// modülünü yazarız ve jest'e mocklanacak modül yolunu
// veririz ve require ile modüle erişiriz.
jest.mock('sum-mock');

test('adds 1 + 2 to equal 6', () => {
    let sum = require('sum-mock').default;
    expect(sum(1, 2)).toBe(6);
});