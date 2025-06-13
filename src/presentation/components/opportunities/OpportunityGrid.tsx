
import type { Opportunity } from "../../../interfaces/opportunity.interface";
import { OpportunityCard } from "./OpportunityCard";
import styles from "./OpportunityGrid.module.css";
interface Props {
  opportunities: Opportunity[];
}

export const OpportunityGrid = ({ opportunities }: Props) => {
  if (!opportunities.length) {
    return (
      <p className={styles["opportunity-grid__empty"]}>
        No hay oportunidades disponibles.
      </p>
    );
  }

  return (
    <div className={styles["opportunity-grid"]}>
      {opportunities.map((opp) => (
        <OpportunityCard key={opp.id} opportunity={opp} />
      ))}
    </div>
  );
};