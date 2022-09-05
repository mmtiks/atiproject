import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import RegisterRental from './components/RegisterRental';
import RentalList from './components/RentalList'
import UpdateRental from './components/UpdateRental';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes classname = "bg-black">
          <Route index element={<RentalList />} />
          <Route path="/" element={<RentalList />}></Route>
          <Route path="/RentalList" element={<RentalList />} />
          <Route path="/editRental/:id" element={<UpdateRental />} />
          <Route path="/RegisterRental" element={<RegisterRental/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
