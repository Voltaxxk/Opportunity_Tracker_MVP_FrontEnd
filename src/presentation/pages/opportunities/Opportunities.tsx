import { useState } from "react";
import { OpportunityGrid } from "../../components/opportunities/OpportunityGrid";
import { useOpportunities } from "../../../hooks/opportunities/useOpportunities";
import { Loader } from "../../components/loader/Loader";
import styles from "./Opportunities.module.css";

const PAGE_SIZE = 6;

export const Opportunities = () => {
 const [page, setPage] = useState(0);
  const { data: opportunities, loading } = useOpportunities(page, PAGE_SIZE);

  return (
    <div className={styles["opportunities-page"]}>
      <div className={styles["opportunities-page__container"]}>
        <h1 className={styles["opportunities-page__title"]}>
          Oportunidades Disponibles
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <OpportunityGrid opportunities={opportunities || []} />
        )}
        <div className={styles["opportunities-page__pagination"]}>
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className={`${styles["opportunities-page__pagination-btn"]} ${styles["opportunities-page__pagination-btn--prev"]}`}
          >
            Anterior
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className={`${styles["opportunities-page__pagination-btn"]} ${styles["opportunities-page__pagination-btn--next"]}`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};