import React, { useState } from 'react'
import { BACKEND_URL, IMAGE_BASE_URL } from '../services/config';
import useFetch from '../hooks/useFetch';

export default function MenuList() {
    let { data: menuItems, loading, error } = useFetch(`${BACKEND_URL}/menus`);
    const [cart, setCart] = useState([]);

    return (
        <div>
            {/* Menu Items Grid */}
            <div className="row g-3 mt-3">
                {menuItems && menuItems.data.map(item => (
                    <div key={item.id} className="col-6 col-md-4 col-lg-3">
                        <div className="card h-100 p-md-3">
                            <img
                                src={`${IMAGE_BASE_URL}/${item.image_path}`}

                                className="card-img-top"
                                alt={item.eng_name}
                                style={{ height: "150px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column" >
                                <h5 className="card-title">{item.mm_name}</h5>
                                <p className="card-text">{item.price} Ks</p>
                                {/* <p>{item.eng_description}</p> */}
                                <button
                                    className="btn btn-danger mt-auto"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
                <div className="mt-4">
                    <h4>Cart ({cart.length})</h4>
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                {item.eng_name} <span>{item.price} Ks</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
