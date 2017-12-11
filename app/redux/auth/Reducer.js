import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS,
  LOGIN_FORM_UPDATED,
  LOGOUT_REQUEST,
  PROFILE_NAME_CHANGED,
  PROFILE_JOB_CHANGED,
  PROFILE_WEBSITE_CHANGED,
  FETCH_PROFILE_SUCCESS
} from './Actions';

const initialState = {
  user : {},
  profile : {},
  loginForm : {
    email : "user1@mol42.com",
    password : "1234"
  },
  token : null,
  loggedIn : false,
  loginInProgress : false,
  loginCompleted : false
};

export default function (state = initialState, action) {

  let {payload} = action;

  if (action.type === LOGIN_REQUEST) {
    return {
      ...state,
      loginInProgress : true
    }
  }
  if (action.type === LOGIN_SUCCESS) {
    let {user, sessionToken} = payload;
    return {
      ...state,
      user,
      isLoggedIn : true,
      token : sessionToken,
      loginInProgress : false,
      loginCompleted : true
    }
  }
  if (action.type === LOGIN_FORM_UPDATED) {
    let {email, password} = payload;
    return {
      ...state,
      loginForm : {
        email,
        password
      }
    }
  }
  if (action.type === LOGOUT_REQUEST) {
    return {
      ...initialState,
      user : {},
      loginForm : {
        ...initialState
      }
    }
  }
  if (action.type === PROFILE_NAME_CHANGED) {
    return {
      ...state,
      user : {
        ...state.user,
        profile : {
          ...state.user.profile,
          name : action.payload
        }
      },
      profile : {
        ...state.profile,
        name : action.payload        
      }       
    }    
  }
  if (action.type === PROFILE_WEBSITE_CHANGED) {
    return {
      ...state,
      user : {
        ...state.user,
        profile : {
          ...state.user.profile,
          webSite : action.payload
        }
      },
      profile : {
        ...state.profile,
        webSite : action.payload        
      }      
    }    
  }
  if (action.type === PROFILE_JOB_CHANGED) {
    return {
      ...state,
      user : {
        ...state.user,
        profile : {
          ...state.user.profile,
          currentJob : action.payload
        }
      },
      profile : {
        ...state.profile,
        currentJob : action.payload        
      }
    }    
  }    
  if (action.type === FETCH_PROFILE_SUCCESS) {
    return {
      ...state,
      user : {
        ...state.user
      },
      profile : {
        ...action.payload.profile
      }
    }
  }
  return state;
}
