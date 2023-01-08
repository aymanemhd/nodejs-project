import "./App.css";
import TopNavbar from "./components/TopNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Homescreen from "./Screens/Homescreen";
import Cart from "./Screens/Cart";
import Registration from "./Screens/Registration";
import Login from "./Screens/Login";
import Adminscreen from "./Screens/AdminScreen";
import AllPizzas from "./components/Admin/AllPizzas";
import AllOrders from "./components/Admin/AllOrders";
import AddPizzas from "./components/Admin/AddPizzas";
import AllUser from "./components/Admin/AllUser";
import EditPizza from "./components/Admin/EditPizza";
import Order from "./Screens/Order";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/admin" element={<Adminscreen />}>
          <Route path="AllPizzas" element={<AllPizzas />} />
          <Route path="AllOrders" element={<AllOrders />} />
          <Route path="AddPizzas" element={<AddPizzas />} />
          <Route path="AllUser" element={<AllUser />} />
          <Route path="Editpizza/:id" element={<EditPizza />} />
        </Route>
        <Route path="/Registration" element={<Registration />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
