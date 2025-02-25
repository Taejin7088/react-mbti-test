import { useState } from 'react';
import { questions } from '../data/questions';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { useSelector } from 'react-redux';
import { useMbitMutate } from '../hooks/mutations/useMbtiMutate';

const TestForm = ({ setUserMbti }) => {
  //유저가 선택한 값을 저장할 state
  const [answers, setAnswer] = useState({});

  const { userId, nickname } = useSelector((state) => state.auth);

  //텐스택쿼리의 mutete함수 불러오는 훅
  const { createMbtiMutate } = useMbitMutate();

  //체크박스와 라벨을 눌렀을때 핸들러
  const checkAnserHandler = (e, question) => {
    const tempAnswer = { ...answers };
    //{질문id값 :  { type: "E/I", answer: E } } 객체로 저장
    tempAnswer[question.id] = { type: question.type, answer: e.target.value };
    setAnswer(tempAnswer);
  };

  //테스트 문항에 div박스를 눌렀을때 핸들러
  const divCheckHandler = (e, question) => {
    const input = e.target.querySelector('input');
    if (input) {
      //클릭된 영역에 input이 있으면 >> 라벨과 체크박스를 클릭했을 경우는 제외
      //input에 체크박스를 바꿔주고 answer 변경
      //{질문id값 :  { type: "E/I", answer: E } } 객체의 형태로 저장
      input.checked = true;
      const tempAnswer = { ...answers };
      tempAnswer[input.name] = { type: question.type, answer: input.value };
      setAnswer(tempAnswer);
    }
  };

  //제출하기 눌렀을 때 핸들러
  const submitHandler = () => {
    //{질문id값 :  { type: "E/I", answer: E } }  로저장되어있는 객체의 벨류값을
    //[ { type: "E/I", answer: E }, ...] 배열형태로 만들기
    const resultAnswers = Object.values(answers);

    //배열의 길이가 20이 아니면 모든문항을 선택하라는 알람과함께 제출 막기
    if (resultAnswers.length < 20) {
      alert('모든 문항을 선택해야합니다.');
      return;
    }

    //결과값(resultAnswers)으로 mbti 계산하는 함수
    const mbti = calculateMBTI(resultAnswers);

    //한국시간을 기준으로 시간 생성
    const now = new Date();
    const formattedDate = now.toLocaleString('ko-KR');

    const testResult = {
      time: formattedDate,
      nickname: nickname,
      userId: userId,
      isPublic: false,
      mbti: mbti,
    };

    //포스터를 추가하는 API요청을 실행
    createMbtiMutate(testResult);

    //해당하는 mbti에 설명을 리턴해주는 함수
    setUserMbti(mbti);
  };

  return (
    <section className='flex flex-col bg-white mx-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
      <h1 className='pt-7 mb-[50px] text-5xl font-semibold'>MBTI 테스트</h1>
      <div className='flex flex-col'>
        {questions.map((question) => {
          return (
            // 질문을 표시하는 배열 리턴
            <div key={question.id}>
              <div className='p-7 text-xl font-semibold'>
                {question.question}
              </div>
              {question.options.map((option, idx) => {
                //문항을 표시하는 배열 리턴
                return (
                  <div key={`${question.id}+${idx}`} className='px-7'>
                    <div
                      onClick={(e) => divCheckHandler(e, question)}
                      className='border-solid border p-4 m-1 rounded-xl'
                    >
                      <input
                        className='accent-black mr-3'
                        type='radio'
                        name={question.id}
                        value={question.type.split('/')[idx]}
                        id={`${question.id}${idx}id`}
                        onChange={(e) => checkAnserHandler(e, question)}
                      />
                      <label
                        className='text-xl'
                        htmlFor={`${question.id}${idx}id`}
                      >
                        {option}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <button
          onClick={submitHandler}
          className='bg-red-500 border rounded-md p-5 mt-[50px] mb-[200px] text-white'
        >
          제출하기
        </button>
      </div>
    </section>
  );
};

export default TestForm;
