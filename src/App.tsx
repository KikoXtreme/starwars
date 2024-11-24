import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';
import { StarWarsTable } from './components/StarWarsTable/StarWarsTable';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
        <Route path='/table' element={<StarWarsTable />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
