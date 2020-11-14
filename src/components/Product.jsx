import React, { useState, useEffect } from 'react';
import { Link, Route, useParams } from "react-router-dom";
import Loading from './ui/Loading';

// Utilities
import scrollToTop from '../utilities/scrollToTop';

// Images
import checkmark from '../assets/checkmark.svg';

const Product = ({ props }) => {
    const { productId } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [selectedImg, setSelectedImg] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            scrollToTop();
        }, 300);
    }, [props]);

    useEffect(() => {
        props.products.forEach((product) => {
            if (product.id === productId) {
                setCurrentProduct(product);
            }
        });
    }, [props])

    const addToCart = (id) => {
        props.addToCart(id, quantity);

        const text = document.getElementById('text');
        text.classList.add('buttonFadeOut');

        const confirmation = document.getElementById('confirmation');

        setTimeout(() => {
            text.style.display = 'none';
            confirmation.style.display = 'block';
        }, 300)

        setTimeout(() => {
            confirmation.classList.add('buttonFadeIn');
        }, 400);

        setTimeout(() => {
            confirmation.style.display = 'none';
            confirmation.classList.remove('buttonFadeIn');
            text.classList.remove('buttonFadeOut');
            text.classList.add('textReturn');
        }, 2500);

        setTimeout(() => {
            text.style.display = 'block';
        }, 3000);
    };

    useEffect(() => {
        if (currentProduct.attrs) {
            console.log(currentProduct.attrs.images);
        }
    }, [currentProduct]);

    return (
        <>
            {
                Object.keys(currentProduct).length !== 0
                    ? (
                        <section className="productDetails wrapper fadeIn">
                            <div className="backToAll">
                                <Link to="/">Back to All Products</Link>
                            </div>
                            <div className="imagesContainer">
                                <div className="selectedImage">
                                    {
                                        currentProduct.attrs.images.map((img, index) => {
                                            if (index === selectedImg) {
                                                return <img src={img.src} alt={img.altText} />;
                                            }
                                        })
                                    }
                                </div>
                                <div className="imageThumbnails">
                                    {
                                        currentProduct.attrs.images.map((thumbnail, index) => (
                                            <img className={index === selectedImg ? 'selectedThumbnail' : null} onClick={() => { setSelectedImg(index); }} src={thumbnail.src} alt="" />
                                        ))
                                    }
                                </div>
                            </div>
                            
                            <div className="description">
                                <h2>
                                    {currentProduct.attrs.title.value}
                                </h2>
                                <p>${currentProduct.attrs.variants[0].price} CAD</p>
                                <p className="productDescription" dangerouslySetInnerHTML={{__html: currentProduct.descriptionHtml}}></p>
                                <div className="addToCart">
                                    {
                                        currentProduct.availableForSale
                                            ? (
                                                <>
                                                    <button id="addToCartButton" onClick={() => { addToCart(currentProduct.variants[0].id) }} type="button">
                                                        <span id="text">Add to Cart</span>
                                                        <img id="confirmation" src={checkmark} alt="" />

                                                    </button>
                                                </>
                                            )
                                            : null

                                    }
                                </div>
                                {!currentProduct.availableForSale ? <p className="soldOutNotification">This item is sold out.</p> : null}
                            </div>

                        </section>
                    )
                    : <Loading />
            }
        </>
    );
};

export default Product;