import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext';

const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms/new' component={NewRoom} />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
