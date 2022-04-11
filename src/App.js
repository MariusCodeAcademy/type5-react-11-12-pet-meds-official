import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddPet from './pages/AddPet/AddPet';
import MedsPage from './pages/MedsPage/MedsPage';
import NotFound from './pages/NotFound';
import PetsPage from './pages/PetsPage/PetsPage';
import LogsPage from './pages/LogsPage/LogsPage';
import Login from './pages/Login';
import { useState } from 'react';
import AuthContext from './store/authContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function logout() {
    setIsLoggedIn(false);
  }
  function login() {
    setIsLoggedIn(true);
  }
  // paduoti login i context value
  // iskviesti ji loginPage formai submitinant

  const currentContextValue = {
    isLoggedIn,
    logout,
  };

  return (
    <AuthContext.Provider value={currentContextValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <PetsPage />
          </Route>
          <Route path='/add-pet'>
            <AddPet />
          </Route>
          <Route path='/logs/:suniukoId'>
            <LogsPage />
          </Route>
          <Route path='/medication'>
            <MedsPage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Login />
          </Route>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
