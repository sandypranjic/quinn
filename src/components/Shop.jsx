import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import ProductInList from './ProductInList';

// Animations
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// Images
import add from '../assets/add.svg';

// Utilities
import scrollToTop from '../utilities/scrollToTop';

const Shop = ({ props }) => {
    const [totalAmt, setTotalAmt] = useState(0);
    const [productFilter, setProductFilter] = useState('');

    const [filteredList, setFilteredList] = useState([]);

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

    useEffect(() => {
        if (props && props.products) {
            setFilteredList(props.products);
        }
    }, [props]);

    useEffect(() => {
        if (filteredList) {
            if (productFilter !== '') {
                const updated = [];
                props.products.forEach((item) => {
                    if (productFilter === item.productType) {
                        updated.push(item);
                    }
                });
                setFilteredList([...updated]);
            } else {
                setFilteredList(props.products);
            }
        }
    }, [productFilter]);

    useEffect(() => {
        if (filteredList.length !== 0) {
            setTotalAmt(filteredList.length);
        }
    }, [filteredList]);

    const productTypes = ['print', 'tote', 'top', 'card', 'gift card'];

    return (
        <>
            <section className="shop wrapper fadeIn">
            <div className="filter">
                <h3>
                    Filter by:
                </h3>
                <ul className="filterOptions">
                    <li>
                        <button onClick={() => { if (productFilter !== '') { setProductFilter(''); } }} className={productFilter === '' ? 'selectedFilter' : null} type="button">All Products</button>
                    </li>
                    {
                        productTypes.map((filter) => (
                            <li>
                                <button onClick={() => { if (productFilter !== filter) { setProductFilter(filter); } }} className={productFilter === filter ? 'selectedFilter' : null} type="button">{filter}s</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
                <h2>
                    Shop
                    {
                        productFilter === ''
                        ? ' > All'
                        : ` > ${productFilter}s`
                    }
                </h2>
                <div className="products column">
                    {
                        filteredList.map((product, index) => {
                            if (product.attrs.images[0] && product.attrs.images[0].src && (index < (totalAmt / 2) || totalAmt === 1)) {
                                if (productFilter === '' || (productFilter === product.productType)) {
                                    return (
                                        <ProductInList product={product} />
                                    )
                                }
                            }
                        })
                    }
                </div>

                <div className="products column">
                    {
                        filteredList.map((product, index) => {
                            if (product.attrs.images[0] && product.attrs.images[0].src && index >= (totalAmt / 2)) {
                                if (productFilter === '' || (productFilter === product.productType)) {
                                    return (
                                        <ProductInList product={product} />
                                    )
                                }
                            }
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Shop;