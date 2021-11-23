import {login} from "../../api/login"


export function authLogin(payload) {
    return async (dispatch) => {
      try {
        const response = await login(payload);
        const data = response.data
        dispatch(loginHandle(data))
        // localStorage.setItem("nama", data.token)``
        console.log(data);
        return data
      } catch (err) {
        console.log(err);
      }
    };
  }

  function loginHandle(data) {
    return{
        type:"login",
        nama:data?.user?.nama,
        email:data?.user?.email,
        token:data?.token,
      }
  }
  