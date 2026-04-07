import Layout from '../../components/layout/Layout';
import LogIn from '../../components/log-in/LogIn';
import './Login.css';


function Login() {
  return (
    <Layout>
      <div className="login-page">
        <h1 className="login-page__title">Войти</h1>
        <LogIn />
      </div>
    </Layout>
  );
}

export default Login;