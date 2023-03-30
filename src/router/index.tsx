import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hearder from "../components/Header/Header"
import DistributionPage from "../pages/distribution/distribution";
import PickUp from "../pages/pick_up/pick_up"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Hearder />
      <Routes>
        <Route path="/" element={<DistributionPage />} />
        <Route path="/pick_up" element={<PickUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
