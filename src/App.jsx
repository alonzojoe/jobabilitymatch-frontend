import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
