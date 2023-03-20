import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "../router/HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      {homeRoutes.map((route) => (
        <Route
          path={route.path}
          element={<HeaderLayout>{route.children}</HeaderLayout>}
        ></Route>
      ))}
    </Routes>
  );
});
