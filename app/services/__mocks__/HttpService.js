class MockHttpService {

    fetch(options) {
        return new Promise((resolve, reject) => {
            resolve({
                data : [1,2,3]
            })
        });
    }

    // HttpService'in mocklandığını göstermek için
    // dummy bir metod ekledik.
    getName() {
        return "I am a mock service !";
    }
}

export default new MockHttpService();