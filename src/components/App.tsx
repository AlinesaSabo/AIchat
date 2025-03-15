import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import "./App.css";
import { Suspense } from "react";
import Loader from "./Loader/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
