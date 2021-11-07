import { IOperation } from "./IOperations";
import { OperationType, StatusType } from "./types/PurchasesTypes";

interface Items {
  description: string;
  amount: number;
  quantity: number;
}

export interface IPurchaseCreate {
  description: string;
  cancel_uri: string;
  confirmation_uri: string;
  amount: number;
  items: Items[];
}

export interface IPurchaseResponse extends IOperation {
  cancel_uri: string;
  redirect_uri: string;
  code: string;
  airtm_operation_id: string;
}
