import axios, { AxiosResponse } from "axios";
const apiUrl = process.env.REACT_APP_APIURL;

export const requestRecipientEvents = async ({ recipientId, perPage, page }: { recipientId: string; perPage: number; page: number}): Promise<AxiosResponse> => {
  return await axios.get(`${apiUrl}/events/recipient/${recipientId}?per_page=${perPage}&page=${page}`)
};

export const requestEventDetailsByType =  async(): Promise<AxiosResponse> => {
  return axios.get(`${apiUrl}/events/types`)
}
