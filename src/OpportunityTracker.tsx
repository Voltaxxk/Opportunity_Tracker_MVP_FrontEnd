import { RouterProvider } from "react-router-dom"
import { router } from './presentation/router/router';


export const OpportunityTracker = () => {
  return (
    <RouterProvider router={router} />
  )
}
