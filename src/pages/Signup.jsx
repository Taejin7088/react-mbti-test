import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { SIGNUP } from '../constants/mode';

const Signup = () => {
  return (
    <>
      <AuthForm mode={SIGNUP}>
        이미계정이 있으신가요?
        <Link className='text-red-500 ml-3 font-bold' to={'/login'}>
          로그인
        </Link>
      </AuthForm>
    </>
  );
};

export default Signup;
