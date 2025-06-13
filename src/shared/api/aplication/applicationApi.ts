import type { Application } from "../../../interfaces/application.interface";
import type { ApplicationPayload } from "../../../interfaces/applicationForm.interface";
import { apiClient } from "../apiClient";


export const getApplications = () => {
  return apiClient<Application[]>("http://localhost:3000/api/applications");
};


export const postApplication = ({
  name,
  email,
  message,
  opportunityId,
  utm_source = "",
  utm_medium = "",
  utm_campaign = "",
}: ApplicationPayload) => {
  return apiClient("http://localhost:3000/api/applications", {
    method: "POST",
    body: {
      name,
      email,
      message,
      opportunityId,
    },
    query: {
      utm_source,
      utm_medium,
      utm_campaign,
    },
  });
};