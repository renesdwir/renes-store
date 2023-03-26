import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export const getFeaturedGame = async () => {
  try {
    const URL = "players/landingpage";
    const response = await axios.get(`${BASE_URL}/${API_VERSION}/${URL}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDetailVoucher = async (id: string) => {
  try {
    const URL = `players/${id}/detail`;
    const response = await axios.get(`${BASE_URL}/${API_VERSION}/${URL}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getGameCategory = async () => {
  try {
    const URL = `players/category`;
    const response = await axios.get(`${BASE_URL}/${API_VERSION}/${URL}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
