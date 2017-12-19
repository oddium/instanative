// jest ile bir modülü mocklamak için öncelikle mock 
// modülünü yazarız ve jest'e mocklanacak modül yolunu
// veririz ve require ile modüle erişiriz.
jest.mock('../app/services/HttpService');

import httpService from "../app/services/HttpService";

test('http mock test', () => {

    expect.assertions(1);

    console.log("httpService.getName() ->", httpService.getName());

    return httpService.fetch({
        apiPath : "http://46.101.162.248:6060", 
        path : "/media/recent"
    })
    .then((response) => {
        expect(response.data.length).toEqual(10)
    });
});