import React, { useState, useEffect } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Menu from './components/layouts/Menu';
import GlobalRoute from './components/global/GlobalRoute';
import { Layout } from 'antd';

// CSS
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import './App.scss';

const App = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)
    const changeCollapsed = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const showContent = routes => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <GlobalRoute
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
                {width > 470 ?
                    (
                        <Sidebar collapsed={collapsed} />
                    ) : (
                        <Menu />
                    )
                }
                <Layout>
                    <Header onClick={changeCollapsed} collapsed={collapsed} width={width} />
                    {showContent(routes)}
                </Layout>
            </Layout>
        </HashRouter>
    );
}


export default App;
