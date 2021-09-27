import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { products } from "./components/products";
const Cart = () => {

const [item, setItem] = useState(products);
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>7</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count">totalItem </span>
                    items in shopping cart
                </p>
                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((item,index)=>{
                                    return(
                                        <Items
                                        {...item}
                                        key={index}
                                        />
                                    )
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Card Total : <span>2220rs</span> </h3>
                    <button>Checkout</button>
                </div>
            </section>
        </>
    );
};

export default Cart;