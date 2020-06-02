import React from "react";
import { Switch, HashRouter } from "react-router-dom";
import routes from "./routes";
import GlobalRoute from "./global/GlobalRoute";
import { Layout } from "antd";
// CSS
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import "./global/index.scss";

const App = () => {
  const showContent = (routes) => {
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
    return <Switch> {result} </Switch>;
  };

  return (
    <Layout>
      <HashRouter> {showContent(routes)} </HashRouter>{" "}
    </Layout>
  );
};

export default App;
