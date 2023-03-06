import "./App.css";
// import Navbar from "./@components/Navbar/Navbar";
import Layout from "./@components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AllGames from "./pages/AllGames";
import AddGame from "./pages/AddGame";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/allgames" element={<AllGames />} />
          <Route path="/addgame" element={<AddGame />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
