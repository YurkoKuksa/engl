import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Sources from "./pages/Sources/Sources";
import Contacts from "./pages/Contacts/Contacts";
import UnderConstruction from "./pages/DefaultPages/UnderConstructionPage/UnderConstructionPage";
import PublicationMenu from "./pages/Publications/PublicationMenu/PublicationsMenuPage";
import Content from "./pages/Publications/PublicationPage/PublicationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sources" element={<Sources />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="publications" element={<PublicationMenu />} />
          <Route path="publications/:slug" element={<Content />} />

          <Route path="c2" element={<UnderConstruction />} />
          <Route path="c3" element={<UnderConstruction />} />
          <Route path="c4" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
