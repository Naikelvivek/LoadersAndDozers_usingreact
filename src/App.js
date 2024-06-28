import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'; 
import Products from './component/Products';
import ImageComponent from './component/ImageComponent'; 
import Information from './component/Information';
import ProductCard from './component/ProductCard';
import Product from './component/Product';
import Cart from './component/Cart';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/products/equipment" 
                    element={<Products category="equipment" />} 
                />
                <Route 
                    path="*" 
                    element={
                        <>
                            <Navbar />
                            <ImageComponent />
                            <Information/>
                            <Routes>
                                <Route path="/" element={<Products />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/product/:id" element={<Product />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                            <ProductCard/>
                        </>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
