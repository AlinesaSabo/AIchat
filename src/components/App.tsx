import { Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
