import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import { Context } from "./Context";

const App = () => {

  return (
    <Context>
      <main className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </main>
    </Context>
  )
  
}
export default App;
