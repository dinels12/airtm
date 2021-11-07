import api from "../api";
import { IPayoutResponse, IPayoutRequest } from "../interfaces/IPayout";

export const createPayoutOneStep = async (
  data: IPayoutRequest
): Promise<IPayoutResponse> => {
  return await new Promise(async (resolve, reject) => {
    try {
      const res = (await api.post("/payouts/one-step", data))
        .data as IPayoutResponse;
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};
