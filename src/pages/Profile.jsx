import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updataProfile } from '../api/authApi';
import { setUserInfo } from '../redex/authSlice';

//프로필을 수정할 수 있는 페이지
const Profile = () => {
  const userInfo = useSelector((state) => state.auth);

  //유저가 변경할 닉네임의 input창의 값을 저장하는 state
  //초기값은 전역에서 관리중인 유저의 원래 닉네임
  const [inputNickname, setInputNickname] = useState(userInfo.nickname);

  const disPatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //api요청에서 필요한 form데이터로 닉네임 바꿔주기
    const formData = new FormData();
    formData.append('nickname', inputNickname);
    try {
      //회원정보서버에 프로필변경을 요청하는 API
      const data = await updataProfile(formData);

      //값이 변경되지 않았으면 전역값 그대로 두기
      if (!data.success) throw data;

      //닉네임 변경이 옳바르게 완료되면 전역에서관리중인 user정보 수정
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
