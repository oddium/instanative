import httpService from "../../services/HttpService";
import instaApi from "./instaApi";

instaApi.setHttpService(httpService);

export default instaApi;