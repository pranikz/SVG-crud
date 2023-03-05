import "./App.css";
// import Navbar from "./@components/Navbar/Navbar";
import Layout from "./@components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AllGames from "./pages/AllGames";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/allgames" element={<AllGames />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
