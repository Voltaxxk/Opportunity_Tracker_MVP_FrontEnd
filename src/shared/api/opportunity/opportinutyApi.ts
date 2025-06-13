import type { Opportunity } from "../../../interfaces/opportunity.interface";
import { apiClient } from "../apiClient";


export const getOpportunities = (page: number, pageSize: number) => {
  const skip = page * pageSize;
  return apiClient<Opportunity[]>("http://localhost:3000/api/opportunities", {
    query: { skip: skip.toString(), take: pageSize.toString() },
  });
};

export const getOpportunity = (id: string) => {
  return apiClient<Opportunity>(`http://localhost:3000/api/opportunities/${id}`);
};