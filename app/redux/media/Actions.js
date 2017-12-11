export const FETCH_RECENT_MEDIA_REQUEST = "FETCH_RECENT_MEDIA_REQUEST";
export const FETCH_RECENT_MEDIA_SUCCESS = "FETCH_RECENT_MEDIA_SUCCESS";
export const FETCH_RECENT_MEDIA_FAILURE = "FETCH_RECENT_MEDIA_FAILURE";

export const FETCH_MY_RECENT_PHOTOS_REQUEST = "FETCH_MY_RECENT_PHOTOS_REQUEST";
export const FETCH_MY_RECENT_PHOTOS_SUCCESS = "FETCH_MY_RECENT_PHOTOS_SUCCESS";
export const FETCH_MY_RECENT_PHOTOS_FAILURE = "FETCH_MY_RECENT_PHOTOS_FAILURE";

export const DO_UPLOAD_REQUEST = "DO_UPLOAD_REQUEST";
export const DO_UPLOAD_REQUEST_COMPLETED = "DO_UPLOAD_REQUEST_COMPLETED";
export const UPLOAD_PROGRESS_CHANGED = "UPLOAD_PROGRESS_CHANGED";

// export const AUTO_LOGIN_

export const fetchRecentMedia = () => ({
    type : FETCH_RECENT_MEDIA_REQUEST
});

export const fetchMediaSuccess = (mediaData) => ({
    type : FETCH_RECENT_MEDIA_SUCCESS,
    payload : mediaData
});

export const fetchMediaError = (errorData) => ({
    type : FETCH_RECENT_MEDIA_FAILURE,
    payload : errorData
});

// FETCH MY RECENT PHOTOS
export const fetchMyRecentPhotos = () => ({
    type : FETCH_MY_RECENT_PHOTOS_REQUEST
});

export const fetchMyRecentPhotosSuccess = (mediaData) => ({
    type : FETCH_MY_RECENT_PHOTOS_SUCCESS,
    payload : mediaData
});

export const fetchMyRecentPhotosError = (errorData) => ({
    type : FETCH_MY_RECENT_PHOTOS_FAILURE,
    payload : errorData
});

export const doUpload = (imageUri) => ({
    type : DO_UPLOAD_REQUEST,
    payload : imageUri
});