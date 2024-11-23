import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import { RouteNames } from "./RouteNames";
import { Quests } from "../../pages/Quests";
import { Referral } from "../../pages/Referral";
import { Leaderboard } from "../../pages/Leaderboard";
import { Profile } from "../../pages/Profile";
import { MainScreen } from "../../pages/MainScreen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute auth={true} />}>
        <Route path={RouteNames.HOME} element={<MainScreen />}>
          <Route index element={<Quests />} />
          <Route path={RouteNames.REFERRAL} element={<Referral />} />
          <Route path={RouteNames.LEADERBOARD} element={<Leaderboard />} />
          <Route path={RouteNames.PROFILE} element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};
