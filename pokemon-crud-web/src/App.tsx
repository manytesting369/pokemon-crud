import { Route, Routes } from "react-router";
import Init from "./app/Home/Init/Init";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Init />} />
    </Routes>
  );
};

export default App;
