import { Platform } from "react-native";

const Configuration = {
    API_URL : Platform.OS == "ios" ? "http://46.101.162.248:6060" : "http://46.101.162.248:6060",
    STATIC_HOST : Platform.OS == "ios" ? "http://46.101.162.248:8800/" : "http://46.101.162.248:8800/",
    PLATFORM_IOS : Platform.OS == "ios",
    PLATFORM_ANDROID : Platform.OS != "ios",
    HTTP_TIMEOUT_MS : 40000 /* 40 sec */
};

export default Configuration;