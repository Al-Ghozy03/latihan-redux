import { register } from "../../api/auth";

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      const response = await register(payload);
      const data = response.data
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
}
