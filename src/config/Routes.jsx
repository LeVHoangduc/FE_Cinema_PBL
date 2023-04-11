import React from "react";

import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Blog from "../pages/blog/Blog";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" exact component={Catalog} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
