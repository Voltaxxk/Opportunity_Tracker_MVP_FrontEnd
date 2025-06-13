import { useEffect, useState } from "react";
import type { Application } from "../../interfaces/application.interface";
import { getApplications } from "../../shared/api/aplication/applicationApi";


export const useApplications = () => {
  const [data, setData] = useState<Application[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};