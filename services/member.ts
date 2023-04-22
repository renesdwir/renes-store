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

export async function getMemberTransactions() {
  const url = `${BASE_URL}/${API_VERSION}/players/history`;
  return callAPI({ url, method: "GET", token: true });
}
