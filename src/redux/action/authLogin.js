import { syncToken } from "../../api/axiosClient";
import {authme, login} from "../../api/login"

function loadingStart() {
  return{
    type:"loadingStart"
  }
}
function loadingEnd() {
  return{
    type:"loadingEnd"
  }
}

export function authLogin(payload) {
    return async (dispatch) => {
      dispatch(loadingStart())
      try {
        const response = await login(payload);
        const data = response.data

        dispatch(loginHandle(data))
        localStorage.setItem("token", data.token)
        dispatch(loadingEnd())
        console.log(response.data);
        return data
      } catch (err) {
        dispatch(loadingEnd())
        console.log(err.status.msg);
        let data = err;
        return data
      }
    };
  }
export function authMe() {
    return async (dispatch) => {
      dispatch(loadingStart())
      syncToken()
      try {
        const response = await authme();
        const data = response.data
        dispatch(loginHandle(data))
        dispatch(loadingEnd())
        localStorage.setItem("token", data.token)
        syncToken()
        console.log(data);
        return data
      } catch (err) {
        dispatch(loadingEnd())
        console.log(err.response.data.msg);
        let data = err.response.data.msg;
        return data
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
  