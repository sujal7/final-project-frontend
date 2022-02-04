import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import UserForm from './components/common/UserForm';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
