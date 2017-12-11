import { 
    SHOW_HIDE_CAMERA
} from './Actions';

const initialState = {
    showCameraModal : false,
};

export default function (state = initialState, action) {

    let {payload} = action;

    if (action.type === SHOW_HIDE_CAMERA) {
        return {
            showCameraModal : payload
        }
    }    
    return state;
}
  