import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Conclusion from './Conclusion';
import { Context } from "./Context";

const App = () => {

  return (
    <Context>
      <main className="relative">
        <Header />
        <Routes>
          <Route    path="/"              element={<Home/>}/>
          <Route    path="/products"      element={<Products />}/>
          <Route    path='/cart'          element={<Cart />}/>
          <Route    path='/conclusion'    element={<Conclusion />}/>
        </Routes>
      </main>
    </Context>
  )
  
}
export default App;
