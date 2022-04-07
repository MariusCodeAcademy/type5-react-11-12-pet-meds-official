import { Route } from 'react-router-dom';
import './App.css';
import PetsPage from './pages/PetsPage/PetsPage';

function App() {
  return (
    <div className='App'>
      <Route path={'/'}>
        <PetsPage />
      </Route>
    </div>
  );
}

export default App;
