import Layout from '@ui/layout/Layout';
import LogIn from '@public/account/log-in/LogIn';
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