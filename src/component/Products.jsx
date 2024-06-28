import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Products = ({ category }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/products`);
                if (response.ok) {
                    const products = await response.json();
                    setData(products);
                    if (category) {
                        setFilter(products.filter((product) => product.category.toLowerCase() === category.toLowerCase()));
                    } else {
                        setFilter(products); // Initialize filter state with all products
                    }
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [category, location.pathname]); // Add location.pathname to the dependency array

    const Loading = () => {
        return (
            <div className="row">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4">
                            <div className="skeleton" style={{ height: '350px' }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const ShowProducts = () => {
        const productsToDisplay = filter.length > 0 ? filter : data;
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {productsToDisplay.map((product) => (
                    <div key={product.id} className="col mb-4">
                        <div className="card h-100 text-center p-3">
                            <img className="card-img-top" src={product.image} alt={product.title} style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">
                                    Explore All
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <hr />
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
