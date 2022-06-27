import swal from "sweetalert";
export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
export const GET_LANGUAGE = "GET_LANGUAGE";


export function switchLanguage() {
  return {
    type: SWITCH_LANGUAGE,
  };
}

export function getLanguage() {
  return {
    type: GET_LANGUAGE,
  };
}