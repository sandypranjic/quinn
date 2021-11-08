import React from 'react';
import { Link } from "react-router-dom";

// Animations
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ProductInList = ({ product }) => {
    return (
        <>
            <ScrollAnimation animateIn="fadeIn" duration={0.1} offset={0} delay={0} key={Math.random()} className="productContainer">
                <div className="productPreview">
                    <Link to={`/products/${product.id}`}>
                        <img className="productImage" src={product.attrs.images[0].src} alt="" />
                    </Link>
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
            </ScrollAnimation>
        </>
    )
};

export default ProductInList;