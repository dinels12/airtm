import api from "../api";
import IPartnerResponse from "../interfaces/IPartner";

export const getPartnerInformation = async (): Promise<IPartnerResponse | null> => {
  return await new Promise(async (resolve, reject) => {
    try {
      const data = (await api.get("/partners/me")).data as IPartnerResponse;
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
