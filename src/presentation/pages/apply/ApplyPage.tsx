import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useOpportunity } from "../../../hooks";
import { Loader } from "../../components/loader/Loader";
import { OpportunityApplicationForm } from "../../components/opportunities/OpportunityApplicationForm";
import { ArrowLeft } from "lucide-react";
import styles from "./ApplyPage.module.css";

const utm = {
  utm_source: "landing",
  utm_medium: "email",
  utm_campaign: "junio2025"
};

export const ApplyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: opportunity, loading } = useOpportunity(id);
  const navigate = useNavigate();

  if (loading) return <Loader messageType="detalles de la oportunidad" />;
  if (!opportunity) return <Navigate to="/opportunities" replace />;

  return (
    <div className={styles["apply-page"]}>
      <div className={styles["apply-page__container"]}>
        <button
          className={styles["apply-page__back-btn"]}
          onClick={() => navigate("/opportunities")}
          type="button"
          aria-label="Regresar"
        >
          <ArrowLeft size={20} />
        </button>

        {loading ? (
          <Loader messageType="detalle de oportunidad" />
        ) : opportunity ? (
          <>
            <h1 className={styles["apply-page__title"]}>{opportunity.title}</h1>
            <div className={styles["apply-page__subtitle"]}>{opportunity.description}</div>
            <div className={styles["apply-page__deadline"]}>
              Fecha límite: {new Date(opportunity.deadline).toLocaleDateString()}
            </div>
            <OpportunityApplicationForm opportunityId={id!} utm={utm} />
          </>
        ) : (
          <div className="text-red-400 text-center mt-12">
            La oportunidad no existe o no está disponible.
          </div>
        )}
      </div>
    </div>
  );
};