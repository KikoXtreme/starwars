import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import StarWarsTable from './components/StarWarsTable/StarWarsTable';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
        <Route path='/table' element={<StarWarsTable />}></Route>
      </Routes>
    </div>
  );
}

export default App;
