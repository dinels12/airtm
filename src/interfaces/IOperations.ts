import { OperationType, StatusType } from "./types/PurchasesTypes";

export interface IOperationRequest {
  page: number;
  perPage?: number;
  type?: OperationType;
}

export interface IOperation {
  id: string;
  partner_id: string;
  status: StatusType;
  amount: string;
  description: string;
  confirmation_uri: string;
  created_at: string;
  updated_at: string;
  airtm_user_email: string;
  operation_type: OperationType;
  airtm_user_id: null | string;
  cancel_uri: string;
  failure_uri: string;
  code: string;
  airtm_operation_id: string;
}

export interface IOperationsPaginated {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
  from: number;
  to: number;
  data: IOperation[];
}
