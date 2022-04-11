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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      <Header isLoggedIn={isLoggedIn} />
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
  );
}

export default App;
