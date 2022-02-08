import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import SignOut from './pages/user/SignOut';
import Layout from './components/layout/Layout';
import AddContacts from './pages/contacts/AddContacts';
import AllContacts from './pages/contacts/AllContacts';
import EditContacts from './pages/contacts/EditContacts';
import DeleteContacts from './pages/contacts/DeleteContacts';

/**
 *
 * @returns {JSX.Element} - The overall application.
 */
function App() {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <div>
      {/* The overall layout of the app. */}
      <Layout>
        {/* The routes of the app. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />

          {/* Checks if the user is authenticated and sets the route accordingly. */}
          {isAuth ? (
            <>
              <Route path="/contacts" element={<AllContacts />} />
              <Route path="/add-contacts" element={<AddContacts />} />
              <Route path="/delete-contacts/:id" element={<DeleteContacts />} />
              <Route path="/edit-contacts/:id" element={<EditContacts />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
