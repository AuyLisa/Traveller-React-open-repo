import { useNavigate } from 'react-router-dom';
import './LogOut.css';

function LogOut() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Удаляем текущего пользователя из localStorage
    localStorage.removeItem('currentUser');
    navigate('/');
  };
  
  return (
    <button className="logout-button" onClick={handleLogout}>
      Выйти
    </button>
  );
}

export default LogOut;