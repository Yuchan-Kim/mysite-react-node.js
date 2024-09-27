import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';
import JoinOk from './pages/user/JoinOk';
import ModifyForm from './pages/user/ModifyForm';
import Form from './pages/attach/Form';
import Form2 from './pages/attach/Form2';
import Result from './pages/attach/Result';




import './css/mysite.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/user/loginform' element={<LoginForm />} />
          <Route path='/user/joinform' element={<JoinForm />} />
          <Route path='/user/joinok' element={<JoinOk />} />
          <Route path='/user/modifyform' element={<ModifyForm />} />
          <Route path='/attach/form' element={<Form />} />
          <Route path='/attach/result' element={<Result />} />
          <Route path='/attach/form2' element={<Form2 />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
