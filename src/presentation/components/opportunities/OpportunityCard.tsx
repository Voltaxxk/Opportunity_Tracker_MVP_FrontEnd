import { useNavigate } from "react-router-dom";
import type { Opportunity } from "../../../interfaces/opportunity.interface";
import styles from "./OpportunityCard.module.css";

interface Props {
  opportunity: Opportunity;
}

export const OpportunityCard = ({ opportunity }: Props) => {
  const { id, title, description, deadline } = opportunity;
  const navigate = useNavigate();

  return (
    <div className={styles["opportunity-card"]}>
      <div className={styles["opportunity-card__content"]}>
        <h2 className={styles["opportunity-card__title"]}>{title}</h2>
        <p className={styles["opportunity-card__desc"]}>{description}</p>
        <p className={styles["opportunity-card__deadline"]}>
          Cierra el: {new Date(deadline).toLocaleDateString()}
        </p>
      </div>
      <div className={styles["opportunity-card__actions"]}>
        <button
          className={styles["opportunity-card__button"]}
          onClick={() => navigate(`/opportunities/${id}/apply`)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};