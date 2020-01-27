import React, { useState } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import { Layout } from 'antd';

// CSS
import 'antd/dist/antd.css';
import './App.scss';

const App = () => {

    const [collapsed, setCollapsed] = useState(false);

    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    };

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
            <Layout>
                <Sidebar collapsed={collapsed} />
                <Layout>
                    <Header onClick={changeCollapsed} collapsed={collapsed} />
                    {showContent(routes)}
                </Layout>
            </Layout>
        </HashRouter>
    );
}


export default App;
