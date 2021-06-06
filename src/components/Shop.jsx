import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import ProductInList from './ProductInList';

// Animations
import "animate.css/animate.min.css";

// Utilities
import scrollToTop from '../utilities/scrollToTop';

const Shop = ({ props }) => {
    const [totalAmt, setTotalAmt] = useState(0);
    const [productFilter, setProductFilter] = useState('');

    const [filteredList, setFilteredList] = useState([]);

    const newItemIds = props.newProducts.map((item) => (item.id));
    const newItems = props.products.filter((item) => ([...newItemIds].includes(item.id)));

    const originalIds = props.originals.map((item) => (item.id));
    const originalItems = props.products.filter((item) => ([...originalIds].includes(item.id)))

    const orderNewItems = () => {        
        const ordered = props.products.filter((item) => (![...newItemIds].includes(item.id) && ![...originalIds].includes(item.id)));

        newItems.forEach((item) => {
            ordered.unshift(item);
        });

        originalItems.forEach((item) => {
            ordered.unshift(item);
        });

        return ordered;
    };

    useEffect(() => {
        setTimeout(() => {
            scrollToTop();
        }, 500);
    }, []);

    useEffect(() => {
        if (props && props.products) {
            const ordered = orderNewItems();
            setFilteredList(ordered);
        }
    }, [props]);

    useEffect(() => {
        if (filteredList) {
            if (productFilter !== '') {
                if (productFilter === 'new') {
                    setFilteredList([...newItems]);
                } else {
                    const updated = [];
                    props.products.forEach((item) => {
                        if (productFilter === item.productType) {
                            updated.push(item);
                        }
                    });
                    setFilteredList([...updated]);
                }
            } else {
                const ordered = orderNewItems();
                setFilteredList(ordered);
            }
        }
    }, [productFilter]);

    useEffect(() => {
        if (filteredList.length !== 0) {
            setTotalAmt(filteredList.length);
        }
    }, [filteredList]);

    const productTypes = ['new', 'original', 'print', 'tote', 'top', 'stationary', 'gift card'];
    
    const filterWithOneItem = () => {
        if (totalAmt === 1) {
            return true;
        }
    };

    const columnOneOdd = (index) => {
        if (totalAmt % 2 !== 0) {
            if (index < ((totalAmt / 2) - 1)) {
                return true;
            }
        }
    }

    const columnOneEven = (index) => {
        if (totalAmt % 2 === 0) {
            if (index < totalAmt / 2) {
                return true;
            }
        }
    }

    const columnTwoOdd = (index) => {
        if (totalAmt !== 1 && totalAmt % 2 !== 0) {
            if (index >= ((totalAmt / 2) - 1)) {
                return true;
            }
        }
    }

    const columnTwoEven = (index) => {
        if (totalAmt % 2 === 0) {
            if (index >= totalAmt / 2) {
                return true;
            }
        }
    }

    const formatFilterName = (name) => {
        if (['new', 'stationary'].includes(name)) {
            return name;
        } else {
            return `${name}s`;
        }
    };

    return (
        <>
            <section className="shop wrapper fadeIn">
            <h2>
                Shop
                {
                    productFilter === ''
                    ? ' > All'
                    : ` > ${formatFilterName(productFilter)}`
                }
            </h2>
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
                            <li key={filter}>
                                <button onClick={() => { if (productFilter !== filter) { setProductFilter(filter); } }} className={productFilter === filter ? 'selectedFilter' : null} type="button">
                                {formatFilterName(filter)}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
                <div className="promoBanner">
                    <div>
                        <p>Free shipping on orders over $150 in Canada!</p>
                    </div>
                </div>
                <div className="products column">
                    {
                        filteredList.map((product, index) => {
                            if (product.attrs.images[0] && product.attrs.images[0].src && (columnOneEven(index) || columnOneOdd(index) || filterWithOneItem())) {
                                if (productFilter === ''
                                || (productFilter === product.productType)
                                || (productFilter === 'new' && newItemIds.includes(product.id))) {
                                    return (
                                        <ProductInList key={product.id} product={product} />
                                    )
                                }
                            }
                        })
                    }
                </div>

                <div className="products column">
                    {
                        filteredList.map((product, index) => {
                            if (product.attrs.images[0] && product.attrs.images[0].src && (columnTwoOdd(index) || columnTwoEven(index))) {
                                if (productFilter === ''
                                || (productFilter === product.productType)
                                || (productFilter === 'new' && newItemIds.includes(product.id))
                                ) {
                                    return (
                                        <ProductInList key={product.id} product={product} />
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