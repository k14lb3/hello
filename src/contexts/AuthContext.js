import { useState, useEffect, useContext, createContext } from 'react';
import { auth } from 'firebase.js';
import { REF } from 'refs';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const register = async (email, username, password) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new Error('Invalid email address format');
    }
    if (username.length < 6 || username.length > 12) {
      throw new Error('Username must be at least 6 - 12 characters long');
    }
    if (password.length < 8 || password.length > 32) {
      throw new Error('Password must be at least 8 - 32 characters long');
    }
    const id = (await auth.createUserWithEmailAndPassword(email, password)).user
      .uid;
    await REF.USER({ user_uid: id }).set({ username: username });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
