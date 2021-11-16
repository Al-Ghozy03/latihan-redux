const initialState = {
  nama: "",
  email: "",
  token: "",
  isAuth: false,
};

export function authProcess(state = initialState, action) {
  if (action.type === "login") {
    return {
      ...state,
      nama: action.nama,
      email: action.email,
      token: action.token,
      isAuth: true,
    };
  }
  if (action.type === "logout") {
    return {
      ...state,
      nama: action.nama,
      email: action.email,
      token: action.token,
      isAuth: false,
    };
  }
  return state;
}
