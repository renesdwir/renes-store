import axios from "axios";
export const getFeaturedGame = async () => {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_API;
    const API_VERSION = "api/v1";
    const URL = "players/landingpage";
    const response = await axios.get(`${BASE_URL}/${API_VERSION}/${URL}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDetailVoucher = async () => {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_API;
    const response = await axios.get(`${BASE_URL}/api/v1/players/landingpage`);
  } catch (error) {
    console.log(error);
  }
};
