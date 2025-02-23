import { useState } from 'react';
import { questions } from '../data/questions';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { mbtiDescriptions } from '../data/mbtiDescriptions';

const Test = () => {
  const [answer, setAnswer] = useState({});
  console.log('answer', answer);

  //체크박스와 라벨을 눌렀을때 핸들러
  const checkAnserHandler = (e, question) => {
    const tempAnswer = { ...answer };
    tempAnswer[question.id] = { type: question.type, answer: e.target.value };
    setAnswer(tempAnswer);
  };

  //div박스를 눌렀을때 핸들러
  const divCheckHandler = (e, question) => {
    const input = e.target.querySelector('input');
    if (input) {
      input.checked = true;
      const tempAnswer = { ...answer };
      tempAnswer[input.name] = { type: question.type, answer: input.value };
      setAnswer(tempAnswer);
    }
  };

  const submitHandler = () => {
    const answers = Object.values(answer);
    if (answers.length < 20) {
      alert('모든 문항을 선택해야합니다.');
      return;
    }

    const mbtiResult = calculateMBTI(answers);
    console.log('MBTI 결과:', mbtiDescriptions[mbtiResult]); // 예: "MBTI 결과: ESTJ"
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
                //문항을 표시하는
                return (
                  <div key={`${question.id} + ${idx}`} className='pl-7'>
                    <div
                      onClick={(e) => divCheckHandler(e, question)}
                      className='border-solid border p-4 m-1 rounded-xl'
                    >
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
