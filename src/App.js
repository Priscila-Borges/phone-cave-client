
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhonesList from "../src/components/PhoneList";
import PhoneDetails from "../src/components/PhoneDetails"
import Navbar from "../src/components/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/phones" element={<PhonesList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </>
  );
}

export default App;