import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";

// Images
import add from '../assets/add.svg';

// Utilities
import scrollToTop from '../utilities/scrollToTop';

const Shop = ({ props }) => {

    useEffect(() => {
        setTimeout(() => {
            scrollToTop();
        }, 500);
    }, []);

    useEffect(() => {
        if (props) {
            console.log(props.products);
            props.products.forEach((product) => {
                console.log(product.attrs.images);
            })
        }
    }, [props])

    const quickAdd = (id) => {
        console.log(id);
    };

    return (
        <section className="shop wrapper fadeIn">
            <h2>shop</h2>
            <div className="products">
                {
                    props.products.map((product) => {
                        if (product.attrs.images[0] && product.attrs.images[0].src) {
                            return (
                                <div key={Math.random()} className="productContainer">
                                    <div className="productPreview">
                                        <Link to={`/products/${product.id}`}>
                                            <img className="productImage" src={product.attrs.images[0].src} alt="" />
                                        </Link>
                                        {/* <div className="addToCart">
                                            <button onClick={() => { quickAdd(product.variants[0].id); }}>
                                                <span>Add to Cart</span>
                                                <img src={add} alt="Add to cart" />
                                            </button>
                                        </div> */}
                                    </div>
                                    <div className="productInfo">
                                        <Link to={`/products/${product.id}`}>
                                            <p className={!product.availableForSale ? 'notAvailable' : null}>
                                                {product.attrs.title.value}
                                            </p>
                                            {
                                                !product.availableForSale
                                                    ? <p className="soldOut">Sold Out</p>
                                                    : null
                                            }
                                        </Link>
                                        <Link to={`/products/${product.id}`}>
                                            <p className="price">${product.attrs.variants[0].price} </p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </section>
    );
};

export default Shop;