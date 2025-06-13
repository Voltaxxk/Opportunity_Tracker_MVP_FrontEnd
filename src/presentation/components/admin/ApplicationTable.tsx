import type { ApplicationTable } from "../../../interfaces/application.interface";
import styles from "./ApplicationTable.module.css";

const utmBadgeStyles: Record<string, string> = {
  utm_source: styles["applications-table__utm-badge--source"],
  utm_medium: styles["applications-table__utm-badge--medium"],
  utm_campaign: styles["applications-table__utm-badge--campaign"],
};

export const ApplicationsTable = ({ applications }: ApplicationTable) => (
 <>
    <div className={styles["applications-table__legend"]}>
      <span className={styles["applications-table__legend-item"]}>
        <span className={`${styles["applications-table__utm-badge"]} ${styles["applications-table__utm-badge--source"]}`}></span>
        UTM Source
      </span>
      <span className={styles["applications-table__legend-item"]}>
        <span className={`${styles["applications-table__utm-badge"]} ${styles["applications-table__utm-badge--medium"]}`}></span>
        UTM Medium
      </span>
      <span className={styles["applications-table__legend-item"]}>
        <span className={`${styles["applications-table__utm-badge"]} ${styles["applications-table__utm-badge--campaign"]}`}></span>
        UTM Campaign
      </span>
    </div>
    <div className={styles["applications-table__scroll"]}>
      <table className={styles["applications-table"]}>
        <thead>
          <tr className={styles["applications-table__header-row"]}>
            <th className={styles["applications-table__cell"]}>Nombre</th>
            <th className={styles["applications-table__cell"]}>Email</th>
            <th className={styles["applications-table__cell"]}>Mensaje</th>
            <th className={styles["applications-table__cell"]}>Oportunidad</th>
            <th className={styles["applications-table__cell"]}>Fecha</th>
            <th className={styles["applications-table__cell"]}>UTM</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr className={styles["applications-table__row"]} key={app.id}>
              <td className={styles["applications-table__cell"]}>{app.name}</td>
              <td className={styles["applications-table__cell"]}>{app.email}</td>
              <td className={styles["applications-table__cell"]}>{app.message}</td>
              <td className={styles["applications-table__cell"]}>{app.opportunity?.title ?? "—"}</td>
              <td className={styles["applications-table__cell"]}>
                {new Date(app.createdAt).toLocaleString()}
              </td>
              <td className={styles["applications-table__cell"]}>
                {app.utmSource && (
                  <span
                    className={`${styles["applications-table__utm-badge"]} ${styles["applications-table__utm-badge--source"]}`}
                  >
                    {app.utmSource}
                  </span>
                )}
                {app.utmMedium && (
                  <span
                    className={`${styles["applications-table__utm-badge"]} ${styles["applications-table__utm-badge--medium"]}`}
                  >
                    {app.utmMedium}
                  </span>
                )}
                {app.utmCampaign && (
                  <span
                    className={`${styles["applications-table__utm-badge"]} ${styles["applications-table__utm-badge--campaign"]}`}
                  >
                    {app.utmCampaign}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);