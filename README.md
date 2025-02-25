# react-mbti-test README

### 🎯 React 심화 개인 과제 \_ MBTI 테스트

- 배포 링크 : [https://react-mbti-test-eosin.vercel.app/](https://react-mbti-test-eosin.vercel.app/)  
  <br />

## 🖥 프로젝트 소개

- 홈페이지
  ![Image](https://github.com/user-attachments/assets/f7798fa8-eb6c-4762-80cb-826a6b4c7fa7)
  ***
- 테스트페이지
  ![Image](https://github.com/user-attachments/assets/99106eaf-fca9-4af2-ad14-6a79f3ae4dda)
  MBTI검사를 할 수 있는 페이지 입니다.

---

- 테스트 결과페이지
  ![Image](https://github.com/user-attachments/assets/c60145b5-e251-4cdd-9606-c41d2697bc3b)
  MBTI검사 결과를 볼 수 있는 페이지입니다.
  '테스트 결과 공유하기'를 클릭하면 자신의 결과를 공유할 수 있는 URL이 클립보드에 추가됩니다.

---

- 결과공유페이지
  ![Image](https://github.com/user-attachments/assets/ea930ffc-c155-4ad8-9938-8d0c3ce87716)

  클립보드에 저장된 결과 공유 URL로 접속시 보여지는 페이지입니다.

---

- 결과보기페이지
  ![Image](https://github.com/user-attachments/assets/ade3353a-cd48-4800-a6d9-722aa8def4e1)
  자신의 결과와 다른유저가 '공개'로 설정해 놓은 MBTI검사 결과를 볼 수 있는 페이지입니다.

---

- 프로필페이지
  ![Image](https://github.com/user-attachments/assets/fd60b978-65e8-4fa5-bff5-92d078039e14)
  자신의 닉네임을 바꿀 수 있는 페이지입니다.

---

- 로그인페이지
  ![Image](https://github.com/user-attachments/assets/49daf83a-2267-47e5-af85-4455e8f33e91)
  로그인페이지입니다. 회원가입으로 가입되어 있는 아이디로 로그인 할 수 있습니다.

---

  <br />

## ⏳ 개발 기간

📅 **2025 / 02 / 19 ~ 2025 / 02 / 25**  
<br />

## ⚙️ 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br />

## 📂 Pokemon Dex 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜authApi.js
 ┃ ┗ 📜mbtiApi.js
 ┣ 📂components
 ┃ ┣ 📜AuthForm.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜LoginUserHeader.jsx
 ┃ ┣ 📜ResultsItem.jsx
 ┃ ┗ 📜TestForm.jsx
 ┣ 📂constants
 ┃ ┣ 📜mode.js
 ┃ ┣ 📜queryKey.js
 ┃ ┗ 📜url.js
 ┣ 📂data
 ┃ ┣ 📜mbtiDescriptions.js
 ┃ ┗ 📜questions.js
 ┣ 📂hooks
 ┃ ┣ 📂mutations
 ┃ ┃ ┗ 📜useMbtiMutate.js
 ┃ ┗ 📂querys
 ┃ ┃ ┗ 📜useMbtiQuery.js
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜MbtiShare.jsx
 ┃ ┣ 📜Profile.jsx
 ┃ ┣ 📜Results.jsx
 ┃ ┣ 📜Signup.jsx
 ┃ ┗ 📜Test.jsx
 ┣ 📂redex
 ┃ ┣ 📜authSlice.js
 ┃ ┗ 📜configStore.js
 ┣ 📂routers
 ┃ ┗ 📜Router.jsx
 ┣ 📂utils
 ┃ ┗ 📜mbtiCalculator.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

<br />

## 📌 주요 기능

✅ **로그인과 회원가입 기능이 있습니다.**  
✅ **로그인한 유저만 접근할 수 있는 페이지와 모든유저가 접근할 수 있는 페이지가 분리되어있습니다.**  
✅ **프로필페이지에서 현재 로그인중인 유저의 닉네임을 수정 할 수 있습니다..**  
✅ **MBTI 테스트를 통해 자신의 MBTI를 알아볼 수 있습니다.**  
✅ **MBTI 결과를 링크 복사하기 버튼을 통해 링크를 복사하여 공유할 수 있습니다.**  
✅ **MBTI 결과가 데이터베이스에 저장됩니다.**  
✅ **MBTI 결과를 실행한 유저는 자신의 결과 공유여부를 선택하여 다른유저에게 보여줄지 결정할 수 있습니다.**  
✅ **자신의 MBTI결과를 삭제할 수 있습니다.**  
✅ **반응형페이지로 핸드폰에서도 사용할 수 있습니다.**
