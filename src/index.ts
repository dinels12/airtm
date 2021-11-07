import api from "./api";
import config from "./config.json";
import IClientData from "./interfaces/IClientData";
import { IPurchaseCreate } from "./interfaces/IPurchases";
import { IPayoutRequest } from "./interfaces/IPayout";
import AirtmEnv from "./interfaces/types/AirtmEnv";
import * as Partner from "./services/Partner";
import * as Purchases from "./services/Purchases";
import * as Payout from "./services/Payout";
import * as Operations from "./services/Operations";
import { IOperationRequest } from "./interfaces/IOperations";

let ENV: AirtmEnv = "sandbox";
export let { baseURL } = config[ENV];

class InitializeClient {
  constructor({ clientKey, clientSecret, clientEnv }: IClientData) {
    if (api.defaults.auth) {
      api.defaults.auth.password = clientSecret;
      api.defaults.auth.username = clientKey;
    }
    ENV = clientEnv;
    baseURL = clientEnv ? config[clientEnv].baseURL : baseURL;
    api.defaults.baseURL = baseURL;
  }
  getPartnerInformation() {
    return Partner.getPartnerInformation();
  }
  createPurchase(data: IPurchaseCreate) {
    return Purchases.createPurchase(data);
  }
  createPayoutOneStep(data: IPayoutRequest) {
    return Payout.createPayoutOneStep(data);
  }
  getOperations(data: IOperationRequest) {
    return Operations.getOperations(data);
  }
  getOperationById(operationId: string) {
    return Operations.getOperationsById(operationId);
  }
}

export default InitializeClient;
