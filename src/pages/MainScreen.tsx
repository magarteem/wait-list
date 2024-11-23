import { Outlet } from "react-router-dom";
import { Header } from "../widgets/header/Header";
import { SidBarMenu } from "../widgets/sidBarMenu/SidBarMenu";
import { MainLayout } from "../shared/layouts/mainLayout/MainLayout";

export const MainScreen = () => {
  return (
    <div className="gridMainLayout">
      <SidBarMenu />
      <div>
        <Header />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </div>
  );
};
