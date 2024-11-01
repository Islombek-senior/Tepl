import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./selectedProducts/ProductList";
import Cards from "./cards/Cards";
import Basket from "./selectedProducts/Basket";
import Like from "./selectedProducts/Like";
import Footer from "./footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveNav from "./nav/Nav";
import ForCurer from "./components/ForCurer";
import ReturnPro from "./components/ReturnPro";
import Contact from "./components/Contact";
import NewThings from "./components/NewThings";
import Discount from "./components/Discount";
import Buying from "./selectedProducts/Buying";

export const Contexts = createContext();

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [like, setLike] = useState([]);
  const [protect, setProtect] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);

  return (
    <ChakraProvider>
      <Contexts.Provider
        value={{
          data,
          setData,
          basket,
          setBasket,
          like,
          setLike,
          protect,
          setProtect,
        }}
      >
        <div style={{ background: "#e9e8e840" }}>
          <Router>
            <Header />
            <ResponsiveNav />
            <Routes>
              <Route path="/" element={<Cards />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/like" element={<Like />} />
              <Route path="/productList/:id" element={<ProductList />} />
              <Route path="/buying/:id" element={<Buying />} />
              {/* ///////////////////////////////////////// */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/forcurer" element={<ForCurer />} />
              {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/discount" element={<Discount />} />
              {/* </Route> */}
              <Route path="/newthings" element={<NewThings />} />
              <Route path="/returnpro" element={<ReturnPro />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </Contexts.Provider>
    </ChakraProvider>
  );
}

export default App;
