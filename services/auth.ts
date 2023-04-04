import axios from "axios";
import { LoginTypes } from "./dataTypes";
import callAPI from "../config/api";
const BASE_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export const setSignUp = async (data: FormData) => {
  try {
    const url = `${BASE_URL}/${API_VERSION}/auth/signup`;
    // const URL = "auth/signup";
    // const response = await axios
    //   .post(`${BASE_URL}/${API_VERSION}/${URL}`, data)
    //   .catch((err) => err.response);
    // // if (response.error === 1) {
    // //   return response.data;
    // // }
    // return response.data.data;
    return callAPI({ url, method: "POST", data });
  } catch (error) {
    console.log(error);
  }
};

export async function setLogin(data: LoginTypes) {
  try {
    const url = `${BASE_URL}/${API_VERSION}/auth/signin`;
    return callAPI({ url, method: "POST", data });
  } catch (error) {
    console.log(error);
  }
}
