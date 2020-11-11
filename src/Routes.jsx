import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';

// Components
import Shop from './components/Shop';
import Product from './components/Product';
import About from './components/About';
import Press from './components/Press';
import Contact from './components/Contact';

const Routes = ({ products, addToCart }) => {
    const location = useLocation();
    const background = location.state && location.state.background;

    const routes = [
        {
            path: '/',
            text: 'Shop',
            component: Shop,
            exact: true,
            props: {
                products: [...products],
                addToCart: addToCart,
            },
        },
        {
            path: '/products/:productId',
            text: 'Product Details',
            component: Product,
            exact: true,
            props: {
                products: [...products],
                addToCart: addToCart,
            },
        },
        {
            path: '/about',
            text: 'About',
            component: About,
            exact: true,
            props: {},
        },
        {
            path: '/press',
            text: 'Press',
            component: Press,
            exact: true,
            props: {},
        },
        {
            path: '/contact',
            text: 'Contact',
            component: Contact,
            exact: true,
            props: {},
        },
    ];

    return (
        <>
            <Switch location={background || location}>
                {
                    routes.map(({component: Cmp, ...route}, i) => (
                        <Route
                            key={route.path}
                            // path={route.path}
                            // exact={route.exact}
                            // component={route.component}
                            {...route}
                            render={props => <Cmp props={route.props} />} 
                            // props={route.props}
                            // props={route.text === 'Shop' ? products : null}
                        />
                    ))
                }
            </Switch>
        </>
    )
}

export default Routes;
