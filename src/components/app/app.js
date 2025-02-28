import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

import { UserProvider } from '../../contexts/user-context';

const App = () => {
  const [name, setName] = useState('Ivan');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={() => <h1>Error Page!</h1>} />
          <Route path="/" component={() => <p>404 - not found :(</p>} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
