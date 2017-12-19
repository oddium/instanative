// fetch test ortamında görülemediği için isomorphic-fetch kütüphanesini
// devDependency olarak ekliyoruz ve burada import ediyoruz.
import "isomorphic-fetch";
import httpService from "../app/services/HttpService";

// The assertion for a promise must be returned.
it('http service test', () => {

    // bu statement kaç tane assertion çalıştırılacağını belirtir.
    // genelde async testler için kullanılır.
    expect.assertions(1); 

    return httpService.fetch({
        apiPath : "http://46.101.162.248:6060", 
        path : "/media/recent"
    })
    .then((response) => {
        expect(response.data.length).toEqual(10)
    });
});