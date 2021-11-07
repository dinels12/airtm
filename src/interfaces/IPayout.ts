import { IOperation } from "./IOperations";

export interface IPayoutRequest {
  email: string;
  description: string;
  amount: number;
  confirmation_uri: string;
  failure_uri: string;
}

export interface IPayoutResponse extends IOperation {
  failure_uri: string;
}
