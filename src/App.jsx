import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Sources from "./pages/Sources/Sources";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <p>HUHUHUHUHUHUHU</p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
