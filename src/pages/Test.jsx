import { useState } from 'react';
import { questions } from '../data/questions';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { mbtiDescriptions } from '../data/mbtiDescriptions';

// {
//   id: 1,
//   question: '길을 걷다가 낯선 강아지가 다가오면 어떻게 하나요?',
//   options: ['같이 놀아준다', '도망간다'],
//   type: 'E/I',
// },
// {
//   id: 2,
//   question: '피자가 왔을 때, 가장 먼저 하는 행동은 무엇인가요?',
//   options: ['치즈 늘어나는 걸 찍는다', '바로 한 입 먹는다'],
//   type: 'S/N',
// },
// {
//   id: 3,
//   question: '휴대폰을 떨어뜨렸을 때, 가장 먼저 드는 생각은?',
//   options: ['화면 깨졌나?', '내 인생도 깨졌구나...'],
//   type: 'T/F',
// },

const Test = () => {
  const [answer, setAnswer] = useState({});
  console.log('answer', answer);

  const checkAnserHandler = (e, question) => {
    const tempAnswer = { ...answer };
    tempAnswer[question.id] = { type: question.type, answer: e.target.value };
    setAnswer(tempAnswer);
  };

  const submitHandler = () => {
    const mbtiResult = calculateMBTI(Object.values(answer));
    console.log('MBTI 결과:', mbtiDescriptions[mbtiResult]); // 예: "MBTI 결과: ESTJ"
  };

  return (
    <section className='flex flex-col bg-white mr-auto ml-auto items-center rounded-xl w-[100%] h-[100%] md:w-[90%] md:mt-10 md:h-auto'>
      <h1 className='pt-7 mb-[50px] text-5xl font-semibold'>MBTI 테스트</h1>
      <div className='flex flex-col'>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <div className='p-7 text-xl font-semibold'>
                {question.question}
              </div>
              {question.options.map((option, idx) => {
                return (
                  <div key={`${question.id} + ${idx}`} className='pl-7'>
                    <div className='border-solid border p-4 m-1 rounded-xl'>
                      <input
                        className='accent-black mr-3'
                        type='radio'
                        name={question.id}
                        value={question.type.split('/')[idx]}
                        id={`${question.id} + ${idx}`}
                        onChange={(e) => checkAnserHandler(e, question)}
                      />
                      <label
                        className='text-xl'
                        htmlFor={`${question.id} + ${idx}`}
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

export default Test;
