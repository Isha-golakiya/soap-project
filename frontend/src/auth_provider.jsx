import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from './store/slice/user_slice';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();  

  const verifyToken = async () => {
    const token = localStorage.getItem("token");

    
    if (!token) {
      dispatch(setUser(null));
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/authVerify', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const user = res.data.data.data; 
      dispatch(setUser(user));
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(setUser(null));
    } 
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
