import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./DashboardLayout.module.css";


export const DashboardLayout = () => {
  return (
    <div className={styles["dashboard-layout"]}>
      <div className={styles["dashboard-layout__container"]}>
        <Outlet />
      </div>
    </div>
  );
};
