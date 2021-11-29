import axios, { AxiosResponse } from "axios";
const apiUrl = process.env.REACT_APP_APIURL;

export const requestCareRecipients = async ({ perPage, page }: { perPage: number; page: number}): Promise<AxiosResponse> => {
  return await axios.get(`${apiUrl}/users/care-recipients?per_page=${perPage}&page=${page}`)
};
