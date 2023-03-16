import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";

export const homeRoutes = [
  {
    path: "user_management",
    children: <UserManagement />
  },
  {
    path: "setting",
    children: <Setting />
  }
];
