import { Platform } from "react-native";
import Config from 'react-native-config';

const Configuration = {
    API_URL : Config.API_URL || "http://46.101.162.248:6060",
    STATIC_HOST : Config.STATIC_HOST || "http://46.101.162.248:8800/",
    PLATFORM_IOS : Platform.OS == "ios",
    PLATFORM_ANDROID : Platform.OS != "ios",
    HTTP_TIMEOUT_MS : 40000 /* 40 sec */
};

export default Configuration;