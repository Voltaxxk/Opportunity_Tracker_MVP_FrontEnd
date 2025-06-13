import { useApplications } from "../../../hooks/applications/useApplications";
import { ApplicationsTable } from "../../components/admin/ApplicationTable";
import { Loader } from "../../components/loader/Loader";
import styles from "./Admin.module.css";

export const Admin = () => {
  const { data: applications, loading } = useApplications();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className={styles["admin-title"]}>Postulaciones Recibidas</h1>
      {loading ? (
        <Loader messageType="postulaciones..." />
      ) : (
        applications && applications.length > 0 ? (
          <ApplicationsTable applications={applications} />
        ) : (
          <div className="text-center text-gray-500 py-8">No hay postulaciones registradas.</div>
        )
      )}
    </div>
  );
};
