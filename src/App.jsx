import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import AllContacts from './pages/contacts/AllContacts';
import AddContacts from './pages/contacts/AddContacts';
import DeleteContacts from './pages/contacts/DeleteContacts';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contacts" element={<AllContacts />} />
          <Route path="/add-contacts" element={<AddContacts />} />
          <Route path="/delete-contacts/" element={<DeleteContacts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
