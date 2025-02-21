import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { LOGIN } from '../constants/mode';

const Login = () => {
  return (
    <>
      <AuthForm mode={LOGIN}>
        계정이 없으신가요?
        <Link className='text-red-500 ml-3 font-bold' to={'/signup'}>
          회원가입
        </Link>
      </AuthForm>
    </>
  );
};

export default Login;
