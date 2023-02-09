import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
