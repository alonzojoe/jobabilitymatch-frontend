import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<AppLayout />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
