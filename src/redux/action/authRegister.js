import { register } from "../../api/register";

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      const response = await register(payload);
      const data = response.data;
      dispatch(registerHandle(data));
      localStorage.setItem("token", data.token);
      console.log(data);
      return data;
    } catch (err) {
      // console.log(err.response);
      let data = err.response;
      return data;
    }
  };
}

function registerHandle(data) {
  return {
    type: "login",
    nama: data?.user?.nama,
    email: data?.user?.email,
    token: data?.token,
  };
}
