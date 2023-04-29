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

export async function getTransactionDetail(id: string, token: string) {
  const url = `${BASE_URL}/${API_VERSION}/players/history/${id}/detail`;
  return callAPI({ url, method: "GET", serverToken: token });
}

export async function updateProfile(data: FormData, id: string) {
  const url = `${BASE_URL}/${API_VERSION}/players/profile/${id}`;
  return callAPI({ url, method: "PUT", data, token: true });
}
