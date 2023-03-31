import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export const setSignUp = async (data) => {
  try {
    const URL = "auth/signup";
    const response = await axios
      .post(`${BASE_URL}/${API_VERSION}/${URL}`, data)
      .catch((err) => err.response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
