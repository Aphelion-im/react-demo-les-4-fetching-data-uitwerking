// DOMException: signal is aborted without reason at cleanup
// Error komt door React 18 update and React StrictMode:
// https://stackoverflow.com/questions/73140563/axios-throwing-cancelederror-with-abort-controller-in-react
// "Note, this only happens in Strict + development mode. In a production build, effects will only be called once and when their dependencies change."
// https://stackoverflow.com/questions/72489140/react-18-strict-mode-causing-component-to-render-twice
// Oplossing: if (controller.signal.aborted) return;  --> Plaatsen in het catch blok EN React.StrictMode kan aanblijven.

import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductPage from "./pages/ProductPage/ProductPage";
import Nav from "./components/Nav/Nav";

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/products" element={ <Products/> }/>
        <Route path="/products/:id" element={ <ProductPage/> }/>
      </Routes>
    </>
  );
}

export default App;


