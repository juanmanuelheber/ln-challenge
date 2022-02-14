import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./views/Home";
import { Section } from "./views/Section";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:section" element={<Section />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
