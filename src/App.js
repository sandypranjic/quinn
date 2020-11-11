import React, { useEffect, useState } from 'react';
import './App.scss';
import Routes from './Routes';
import Client from 'shopify-buy';


// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/ui/Cart';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [userEntry, setUserEntry] = useState('');
  const [pw, setPw] = useState('quinntest');
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("97c0500f32570b8cf862172699bf5e2b");
  const [products, setProducts] = useState([]);
  const [checkoutId, setCheckoutId] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [newItem, setNewItem] = useState({});

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
    client.product.fetchAll().then((products) => {
      setProducts(products);
    });
  }, []);

  useEffect(() => {
    // Create an empty checkout
    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      setShoppingCart(checkout);
      setCheckoutId(checkout.id);
    });
  }, []);

  // useEffect(() => {
  //   if (Object.keys(shoppingCart).length !== 0 && cartItems.length === 0) {
  //     const updated = [...shoppingCart.lineItems];
  //     setCartItems([...updated]);
  //   }
  //   console.log(shoppingCart);
  // }, [shoppingCart]);

  const addToCart = (id, amount) => {
    // const updated = [...cartItems];
    // updated.push({ variantId: id, quantity: amount });
    // setCartItems([...updated]);
    setNewItem({ variantId: id, quantity: amount });
  };

  useEffect(() => {
    if (newItem.variantId && newItem.quantity) {
      client.checkout.addLineItems(checkoutId, newItem).then((checkout) => {
        // Do something with the updated checkout
        setShoppingCart(checkout);
      });
    }
  }, [newItem]);

  useEffect(() => {
    console.log('SHOPPING CART UPDATED', shoppingCart);
  }, [shoppingCart]);

  // const addProductsToCart = () => {
  //   const itemsToAdd = [];

  //   products.forEach((product) => {
  //     itemsToAdd.push({ variantId: product.variants[0].id, quantity: 1 });
  //   });

  //   client.checkout.addLineItems(checkoutId, itemsToAdd).then((checkout) => {
  //     // Do something with the updated checkout
  //     console.log(checkout); // Array with one additional line item
  //     setShoppingCart(checkout);
  //   });

  // };

  return (
    <>
      {
        userEntry === pw
          ? (
            <>
              <div className="global" id="global">
                <Header
                  shoppingCart={shoppingCart}
                  showCart={showCart}
                  hideCart={hideCart}
                  toggleCart={toggleCart}
                />
                <main id="main">
                  <Routes products={products} addToCart={addToCart} />
                </main>
                <Footer />
              </div>
              <Cart
                hideCart={hideCart}
                showCart={showCart}
                shoppingCart={shoppingCart}
                toggleCart={toggleCart}
              />
            </>
          )
          : (
            <form className="password">
              <input onChange={(event) => { setUserEntry(event.target.value); }} type="text" placeholder="password"></input>
            </form>
          )
      }
    </>
  );
}

export default App;
