import { useEffect, useState } from "react";
import type { Opportunity } from "../../interfaces/opportunity.interface";
import { getOpportunity } from "../../shared/api/opportunity/opportinutyApi";



export const useOpportunity = (id?: string) => {
  const [data, setData] = useState<Opportunity | null>(null);
  const [loading, setLoading] = useState(true);


  console.log("hook useOpportunity", id);
  useEffect(() => {
    if (!id) {
      setData(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    getOpportunity(id)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading };
};