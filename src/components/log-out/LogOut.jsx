import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './LogOut.css';

function LogOut() {
  const navigate = useNavigate();
  
  //юерем функцию из контекста
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <button className="logout-button" onClick={handleLogout}>
      Выйти
    </button>
  );
}

export default LogOut;