// test edilecek metod, normalde bir modül dosyasında
// yer alabilir.
const sum = (a, b) => {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});