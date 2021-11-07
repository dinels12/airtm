import api from "../api";
import {
  IOperation,
  IOperationRequest,
  IOperationsPaginated,
} from "../interfaces/IOperations";

export const getOperations = async ({
  page,
  perPage,
  type,
}: IOperationRequest): Promise<IOperationsPaginated> => {
  return await new Promise(async (resolve, reject) => {
    try {
      const data = (
        await api.get(
          `/operations?page=${page}${perPage ? `&perPage=${perPage}` : ""}${
            type ? `&type=${type}` : ""
          }`
        )
      ).data as IOperationsPaginated;
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

export const getOperationsById = async (
  operationId: string
): Promise<IOperation> => {
  return await new Promise(async (resolve, reject) => {
    try {
      if (!operationId) return reject("Operation ID needed");
      const data = (await api.get(`/operations/${operationId}`))
        .data as IOperation;
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
