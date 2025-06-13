import { useEffect, useState } from "react";
import type { Opportunity } from "../../interfaces/opportunity.interface";
import { getOpportunities } from "../../shared/api/opportunity/opportinutyApi";



export const useOpportunities = (page: number, pageSize = 6) => {
  const [data, setData] = useState<Opportunity[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getOpportunities(page, pageSize)
      .then(setData)
      .catch((err) => console.error("Error cargando oportunidades:", err))
      .finally(() => setLoading(false));
  }, [page, pageSize]);

  return { data, loading };
};
