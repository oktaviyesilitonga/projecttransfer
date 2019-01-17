import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailBank from '../src/container/DetailBank/DetailBank';
import Error404 from '../src/container/Error404/Error404';
import ResendCode from '../src/container/ResendCode/ResendCode';
import TranferSuccess from '../src/container/Transfer/TransferSuccess/TransferSuccess';
import TransferUnsuccess from '../src/container/Transfer/TransferUnsuccess/TransferUnsuccess';
import Welcome from '../src/container/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/detailbank" component={DetailBank} />
          <Route path="/resendcode" component={ResendCode} />
          <Route path="/transfersuccess" component={TranferSuccess} />
          <Route path="/transferunsuccess" component={TransferUnsuccess} />
          <Route path="/error404" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;