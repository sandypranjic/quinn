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
    const [selectedVariant, setSelectedVariant] = useState();
    const [showVariantError, setShowVariantError] = useState(false);

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

        props.originals.forEach((product) => {
            if (product.id === productId) {
                setCurrentProduct(product);
            }
        });
    }, [props])

    const addToCart = (id) => {
        if (selectedVariant !== '') {
            setShowVariantError(false);
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

        }
    };

    useEffect(() => {
        if (currentProduct && currentProduct.variants) {
            if (currentProduct.variants.length === 1) {
                setSelectedVariant(0);
            } else if (currentProduct.variants.length > 1) {
                setSelectedVariant('');
            }
        }
    }, [currentProduct]);

    useEffect(() => {
        setShowVariantError(false);
    }, [selectedVariant]);

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
                                                return <img key={img.src} src={img.src} alt={img.altText} />;
                                            }
                                        })
                                    }
                                </div>
                                <div className="imageThumbnails">
                                    {
                                        currentProduct.attrs.images.map((thumbnail, index) => (
                                            <img key={thumbnail.src} className={index === selectedImg ? 'selectedThumbnail' : null} onClick={() => { setSelectedImg(index); }} src={thumbnail.src} alt="" />
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

                                {
                                    currentProduct.availableForSale && currentProduct.variants.length > 1
                                        ? (
                                            <label className="variant" htmlFor="variant">
                                                {
                                                    currentProduct.productType === 'top'
                                                        ? 'Size and colour:'
                                                        : 'Options:'
                                                }
                                                <select id="variant" name="variant" onChange={(event) => { setSelectedVariant(event.target.value); setShowVariantError(false); }}>
                                                    <option>Please select</option>
                                                    {
                                                        currentProduct.variants.map((item, index) => {
                                                            return <option value={index} key={`${item.title}-${item.index}`}>{item.title}</option>
                                                        })
                                                    }
                                                </select>
                                            </label>
                                        )
                                        : null
                                }

                                <div className="addToCart">
                                    {
                                        currentProduct.availableForSale && currentProduct.productType !== 'original'
                                            ? (
                                                <>
                                                    <button id="addToCartButton" onClick={() => { if (selectedVariant !== undefined && selectedVariant !== '') { addToCart(currentProduct.variants[selectedVariant].id) } else { setShowVariantError(true); } }} type="button" className={selectedVariant === '' ? 'inactiveButton' : null}>
                                                        <span id="text">Add to Cart</span>
                                                        <img id="confirmation" src={checkmark} alt="" />

                                                    </button>
                                                </>
                                            )
                                            : null

                                    }
                                    {
                                        showVariantError
                                            ? <p className="fadeIn variantError">Please select a
                                                {
                                                currentProduct.productType === 'top' ? ' size and colour' : 'n option'
                                                }
                                                .
                                                </p>
                                            : null
                                    }
                                </div>

                                {
                                    currentProduct.availableForSale && currentProduct.productType === 'original' && (
                                        <div className="originals">
                                            <p className="privateSale">please contact quinnrockliff@gmail.com to purchase originals</p>

                                            <a href="mailto:quinnrockliff@gmail.com?subject=originals">
                                                <span>contact</span>
                                            </a>
                                        </div>
                                    )
                                }

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