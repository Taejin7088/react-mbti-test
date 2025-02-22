import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updataProfile } from '../api/authApi';
import { setUserInfo } from '../redex/authSlice';

const Profile = () => {
  const userInfo = useSelector((state) => state.auth);

  const [inputNickname, setInputNickname] = useState(userInfo.nickname);

  const disPatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nickname', inputNickname);
    try {
      const data = await updataProfile(formData);

      if (!data.success) throw data;

      disPatch(setUserInfo({ ...userInfo, nickname: inputNickname }));
      alert('닉네임이 변경 되었습니다.');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section className='flex flex-col bg-white mr-auto ml-auto items-center rounded-xl w-[100%] h-[100%] md:w-[50%] md:mt-10 md:h-auto pb-10'>
      <h1 className='text-[40px] p-[20px]'>프로필 수정</h1>
      <div className='bg-gray-100 w-[90%] p-4 rounded-md'>
        <form
          onSubmit={onSubmitHandler}
          className='flex flex-col p-4 rounded-md gap-7'
          action='submit'
        >
          <label htmlFor='nickname'>현재 닉네임 : {userInfo.nickname}</label>
          <input
            id='nickname'
            type='text'
            value={inputNickname}
            placeholder='닉네임'
            onChange={(e) => {
              setInputNickname(e.target.value);
            }}
            className='bg-white border rounded-md p-5'
          />
          <button className='bg-red-500 border rounded-md p-5 text-white'>
            로그인
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
