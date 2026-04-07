import Layout from '../../components/layout/Layout';
import RegistrationForm from '../../components/registration-form/RegistrationForm';
import './Registration.css';


function Registration() {
  return (
    <Layout>
      <div className="registration-page">
        <h1 className="registration-page__title">Регистрация</h1>
        <RegistrationForm />
      </div>
    </Layout>
  );
}

export default Registration;