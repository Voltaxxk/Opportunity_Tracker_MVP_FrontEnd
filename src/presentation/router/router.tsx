import { createBrowserRouter, Navigate } from "react-router-dom";
import { Admin, ApplyPage, Opportunities } from "../pages";
import { DashboardLayout } from "../layouts/DashboardLayout";


export const routes =  [
    {
        to: "/opportunities",
        title: "Oportunidades",
        description : "Ver todas las oportunidades",
        component : <Opportunities />
    },
    {
        to: "/admin",
        title: "Admin",
        description : "Administrar las oportunidades",
        component : <Admin />
    }
]


export const router = createBrowserRouter([{
    path: "/",
    element : <DashboardLayout />,
    children: [
        ...routes.map(route => ({
            path: route.to,
            element: route.component,
        })),
        {
            path: "/opportunities/:id/apply",
            element: <ApplyPage />
        },
        {
            path: "*",
            element: <Navigate to="/opportunities" replace />,
        },
        {
            path: '',
            element : <Navigate to="/opportunities" />
        }
    ]
}])