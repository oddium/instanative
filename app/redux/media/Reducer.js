import { 
    FETCH_RECENT_MEDIA_REQUEST,
    FETCH_RECENT_MEDIA_SUCCESS,
    FETCH_MY_RECENT_PHOTOS_REQUEST,
    FETCH_MY_RECENT_PHOTOS_SUCCESS,
    DO_UPLOAD_REQUEST,
    UPLOAD_PROGRESS_CHANGED,
    DO_UPLOAD_REQUEST_COMPLETED
} from './Actions';

const initialState = {
    mediaList : [],
    fetchInProgress : false,
    fetchCompleted : false,
    myPhotos : [],
    fetchMyPhotosInProgress : false,
    fetchMyPhotosCompleted : false,
    activeUpload : {
        running : false,
        completed : false,
        progress : 0
    }
};

export default function (state = initialState, action) {

    if (action.type === FETCH_RECENT_MEDIA_REQUEST) {
        return {
            ...state,
            fetchInProgress : true,
            fetchCompleted : false,
            // eger activeUpload flaglerini clear etmez isek
            // HomeScreen ekranında sonsuz döngüye sebep oluruz.
            activeUpload : {
                running : false,
                completed : false,
                progress : 0
            }
        }
    }
    if (action.type === FETCH_RECENT_MEDIA_SUCCESS) {
        return {
            ...state,
            mediaList : action.payload,
            fetchCompleted : false,
            fetchCompleted : true
        }
    }
    if (action.type === FETCH_MY_RECENT_PHOTOS_REQUEST) {
        return {
            ...state,
            fetchMyPhotosInProgress : true,
            fetchMyPhotosCompleted : false             
        }
    }
    if (action.type === FETCH_MY_RECENT_PHOTOS_SUCCESS) {
        return {
            ...state,
            myPhotos : action.payload,
            fetchMyPhotosInProgress : false,
            fetchMyPhotosCompleted : true            
        }
    }
    if (action.type === DO_UPLOAD_REQUEST) {
        return {
            ...state,
            activeUpload : {
                running : true,
                completed : false,
                progress : 0
            }           
        }        
    }
    if (action.type === UPLOAD_PROGRESS_CHANGED) {
        return {
            ...state,
            activeUpload : {
                running : true,
                completed : false,
                progress : action.payload.progress
            }           
        }        
    }
    if (action.type === DO_UPLOAD_REQUEST_COMPLETED) {
        return {
            ...state,
            activeUpload : {
                running : false,
                completed : true,
                progress : 0
            }
        }
    }
    return state;
}
  