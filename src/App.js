import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import routes from './routes';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
const App = () => {
    const showContent = routes => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        layout={route.layout}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

    return (
        <HashRouter>
            {showContent(routes)}
            <Header />
            <Sidebar />
            <Footer />
        </HashRouter>
    );
}


export default App;
