import axios from "axios";
import { LoginTypes } from "./dataTypes";
const BASE_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export const setSignUp = async (data) => {
  try {
    const URL = "auth/signup";
    const response = await axios
      .post(`${BASE_URL}/${API_VERSION}/${URL}`, data)
      .catch((err) => err.response);
    // if (response.error === 1) {
    //   return response.data;
    // }
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export async function setLogin(data: LoginTypes) {
  try {
    const URL = "auth/signin";
    const response = await axios
      .post(`${BASE_URL}/${API_VERSION}/${URL}`, data)
      .catch((err) => err.response);
    // if (response.status  > 300) {
    // const res = {
    //   error:true,
    //   message:response.data.message,
    //   data: null
    // }
    //   return res;
    // }
    const res = {
      error: false,
      message: "success",
      data: response.data.data,
    };
    return res;
  } catch (error) {
    console.log(error);
  }
}
