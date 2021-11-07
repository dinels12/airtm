import api from "../api";
import { baseURL } from "../index";
import { IPurchaseCreate, IPurchaseResponse } from "../interfaces/IPurchases";
import { v4 as uuid } from "uuid";

export const createPurchase = async (
  data: IPurchaseCreate
): Promise<IPurchaseResponse> => {
  return await new Promise(async (resolve, reject) => {
    try {
      const res = (await api.post("/purchases", { ...data, code: uuid() }))
        .data as IPurchaseResponse;
      resolve({ ...res, redirect_uri: `${baseURL}/checkout/${res.id}` });
    } catch (e) {
      reject(e);
    }
  });
};
