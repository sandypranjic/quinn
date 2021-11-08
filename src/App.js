import React, { useEffect, useState } from 'react';
import './App.scss';
import Routes from './Routes';
import Client from 'shopify-buy';


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/ui/Cart';
import MobileNav from './components/MobileNav';

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [token, setToken] = useState("97c0500f32570b8cf862172699bf5e2b");
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [priorityProducts, setPriorityProducts] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [checkoutId, setCheckoutId] = useState('');
  const [showCart, setShowCart] = useState(false);

  // Updating the cart:
  const [newItem, setNewItem] = useState({ id: '', quantity: '' });
  const [updateItem, setUpdateItem] = useState([{ id: '', quantity: '' }]);

  // Mobile Nav
  const [showNav, setShowNav] = useState(false);

  const client = Client.buildClient({
    domain: 'quinnrockliff.myshopify.com/',
    storefrontAccessToken: token,
  });

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const hideCart = () => {
    setShowCart(false);
  };
  
  useEffect(() => {
    client.product.fetchAll(100).then((products) => {
      setProducts(products);
    });
    client.collection.fetchAllWithProducts({productsFirst: 50}).then((collections) => {
      const newCollection = collections.filter((col) => (col.title === 'new'));
      if (newCollection[0]) {
        setNewProducts(newCollection[0].products);
      }

      const priorityCollection = collections.filter((col) => (col.title === 'priority'));
      if (priorityCollection[0]) {
        setPriorityProducts(priorityCollection[0].products);
      }

      const originalsCollection = collections.filter((col) => (col.title === 'originals'));
      if (originalsCollection[0]) {
        setOriginals(originalsCollection[0].products);
      }
    });
  }, []);

  useEffect(() => {
    client.checkout.create().then((checkout) => {
      setShoppingCart(checkout);
      setCheckoutId(checkout.id);
    });
  }, []);

  const addToCart = (id, amount) => {
    setNewItem({ variantId: id, quantity: amount });
  };

  const updateQuantity = (id, amount) => {
    const update = [];
    update.push({ id: id, quantity: amount });
    setUpdateItem(update);
  };

  useEffect(() => {
    if (newItem.variantId && newItem.quantity) {
      client.checkout.addLineItems(checkoutId, newItem).then((checkout) => {
        setShoppingCart(checkout);
      });
    }
  }, [newItem]);

  useEffect(() => {
    if (checkoutId && shoppingCart.length !== 0 && updateItem[0].id !== '' && updateItem[0].quantity !== '') {
      client.checkout.updateLineItems(checkoutId, updateItem).then((checkout) => {
        setShoppingCart(checkout);
      });
    }
  }, [updateItem]);

  const showMobileNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="global" id="global">
        <Header
          shoppingCart={shoppingCart}
          showCart={showCart}
          hideCart={hideCart}
          toggleCart={toggleCart}
          showMobileNav={showMobileNav}
        />
        <main id="main">
          <Routes
            products={products}
            newProducts={newProducts}
            addToCart={addToCart}
            originals={originals}
            priorityProducts={priorityProducts}
          />
        </main>
        <Footer />
      </div>
      <Cart
        hideCart={hideCart}
        showCart={showCart}
        shoppingCart={shoppingCart}
        toggleCart={toggleCart}
        updateQuantity={updateQuantity}
      />
      <MobileNav showNav={showNav} showMobileNav={showMobileNav} />
    </>
  );
}

export default App;
