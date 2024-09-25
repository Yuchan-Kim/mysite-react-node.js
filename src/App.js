import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';




import './css/mysite.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/user/loginform' element={<LoginForm />} />
          <Route path='/user/joinform' element={<JoinForm />} />
          <Route path='/user/joinok' element={<JoinOk />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
