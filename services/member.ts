import callAPI from "../config/api";
const BASE_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export const getMemberOverview = async () => {
  try {
    const url = `${BASE_URL}/${API_VERSION}/players/dashboard`;

    return callAPI({ url, method: "GET", token: true });
  } catch (error) {
    console.log(error);
  }
};

export async function getMemberTransactions(valueParams: string) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${BASE_URL}/${API_VERSION}/players/history${params}`;
  return callAPI({ url, method: "GET", token: true });
}
