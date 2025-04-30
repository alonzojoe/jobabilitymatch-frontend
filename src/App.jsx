import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import FeedLayout from "@/layouts/FeedLayout";
import Feed from "@/pages/Feed/Feed";
import DisabilityTypes from "@/pages/DisabilityTypes/DisabilityTypes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<FeedLayout />}>
            <Route path="" element={<Feed />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="disability-types" element={<DisabilityTypes />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
