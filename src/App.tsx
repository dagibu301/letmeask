import { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { firebase, auth } from './services/firebase';

export const AuthContext = createContext({} as any);

const App = () => {
  const [user, setUser] = useState();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL ) {
          throw new Error('Missing information from Google Account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    });
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms/new' component={NewRoom} />
        </Switch>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
