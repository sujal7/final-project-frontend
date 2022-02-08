import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import Layout from './components/layout/Layout';
import SignUp from './pages/user/SignUp';
import SignIn from './pages/user/SignIn';
import AllContacts from './pages/contacts/AllContacts';
import AddContacts from './pages/contacts/AddContacts';
import DeleteContacts from './pages/contacts/DeleteContacts';
import EditContacts from './pages/contacts/EditContacts';
import SignOut from './pages/user/SignOut';

function App() {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <div>
      <Layout>
        {isAuth ? (
          <Routes>
            <Route path="/contacts" element={<AllContacts />} />
            <Route path="/add-contacts" element={<AddContacts />} />
            <Route path="/delete-contacts/:id" element={<DeleteContacts />} />
            <Route path="/edit-contacts/:id" element={<EditContacts />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        )}
      </Layout>
    </div>
  );
}

export default App;
