import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "../router/HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {homeRoutes.map((route) => (
          <Route
            path={route.path}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          ></Route>
        ))}

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </LoginUserProvider>
  );
});
