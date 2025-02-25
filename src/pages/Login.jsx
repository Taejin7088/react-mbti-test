import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { LOGIN } from '../constants/mode';

//로그인 페이지 AuthForm을 LOGIN 모드로 리턴받아서 사용됨
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
