import { Route, Routes } from "react-router";
import "./App.css";
import Init from "@app/Home/Init/Init";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Init />} />
    </Routes>
  );
};

export default App;
