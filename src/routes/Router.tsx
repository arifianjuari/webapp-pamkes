import { Routes, Route } from "react-router-dom";
import {
  DashboardPage,
  FacilityPage,
  HealthPage,
  Login,
  NotFoundPage,
  UsersActivePage,
  UsersPage,
} from "../pages";
import ProtectRoute from "./protectRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/" element={<ProtectRoute />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/users">
          <Route path="/users/active" element={<UsersActivePage />} />
          <Route path="/users/approval" element={<UsersPage />} />
        </Route>
        <Route path="/report-health" element={<HealthPage />} />
        <Route path="/fasility" element={<FacilityPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
