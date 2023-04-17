import axios from "axios";
import callAPI from "../config/api";
import { CheckoutTypes } from "./dataTypes";
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
export const setCheckout = async (data: CheckoutTypes) => {
  try {
    const url = `${BASE_URL}/${API_VERSION}/players/checkout`;

    return callAPI({ url, method: "POST", data, token: true });
  } catch (error) {
    console.log(error);
  }
};
export const getMemberOverview = async () => {
  try {
    const url = `${BASE_URL}/${API_VERSION}/players/dashboard`;

    return callAPI({ url, method: "GET", token: true });
  } catch (error) {
    console.log(error);
  }
};
