import { Platform } from "react-native";

const Configuration = {
    API_URL : Platform.OS == "ios" ? "http://165.227.143.203:6060" : "http://165.227.143.203:6060",
    STATIC_HOST : Platform.OS == "ios" ? "http://165.227.143.203:8800/" : "http://165.227.143.203:8800/",
    PLATFORM_IOS : Platform.OS == "ios",
    PLATFORM_ANDROID : Platform.OS != "ios",
    HTTP_TIMEOUT_MS : 40000 /* 40 sec */
};

export default Configuration;