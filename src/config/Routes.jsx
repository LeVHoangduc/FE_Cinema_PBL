import React from "react";

import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Evalute from "../pages/blog/Blog";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/blog" component={Evalute} />
      <Route path="/" exact component={Home} />
      
    </Switch>
  );
};

export default Routes;
