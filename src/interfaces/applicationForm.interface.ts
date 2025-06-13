import type { UTMParams } from "./utm.interface";

export interface AplicationForm {
  opportunityId: string;
  utm?: UTMParams;
  onSuccess?: () => void;
}


export interface ApplicationPayload {
  name: string;
  email: string;
  message: string;
  opportunityId: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}