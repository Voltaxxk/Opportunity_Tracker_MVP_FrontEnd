export interface Application {
  id: string;
  name: string;
  email: string;
  message: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt: string;
  opportunity?: {
    id: string;
    title: string;
    description?: string;
    deadline?: string;
    createdAt?: string;
  };
}

export interface ApplicationTable {
    applications: Application[];
}