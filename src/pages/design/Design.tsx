import { Route, Routes } from "react-router-dom";

import DesignHome from "./DesignHome";
import Apollo from "./projects/Apollo/Apollo";
import Aura from "./projects/Aura/Aura";

const Design = () => {
  return (
    <Routes>
      <Route index element={<DesignHome />} />
      <Route path="aura" element={<Aura />} />
      <Route path="apollo" element={<Apollo />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default Design;
