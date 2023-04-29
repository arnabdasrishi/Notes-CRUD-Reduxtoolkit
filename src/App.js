import CreateNote from "./components/CreateNote";
import HomePage from "./components/HomePage";
import EditNote from "./components/EditNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/AuthForms/Signin";
import Login from "./components/AuthForms/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreateNote />}></Route>
        <Route path="/edit/:id" element={<EditNote />}></Route>
        <Route path="/delete/:id" element={<CreateNote />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
