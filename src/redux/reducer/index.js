import {SWITCH_LANGUAGE, GET_LANGUAGE} from "../actions";

  
  const initialState = {
    language: "spanish"
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case SWITCH_LANGUAGE:
        let language = state.language === "spanish" ? state.language = "english" : state.language = "spanish"
        return {
          ...state,
          language: language
        }
        case GET_LANGUAGE:
        return {
          ...state,
        }
      default:
        return { ...state };
    }
  }
  