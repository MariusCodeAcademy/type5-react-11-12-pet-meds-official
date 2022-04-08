import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddPet from './pages/AddPet/AddPet';
import MedsPage from './pages/MedsPage/MedsPage';
import NotFound from './pages/NotFound';
import PetsPage from './pages/PetsPage/PetsPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact>
          <PetsPage />
        </Route>
        <Route path='/add-pet'>
          <AddPet />
        </Route>
        <Route path='/medication'>
          <MedsPage />
        </Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
