# 리액트를 이용한 웹 사이트 만들기
리액트 사이트 처음으로 만들어 보기

## 리액트란?


## 설치
cd 파일이름 설치할 파일로 들어감
npx create-react-app . (파일이 이미 있을 때 파일 안에 설치 할 때)
npx create-react-app react-webpage (react-webpage 파일을 만들고 그 안에 설치)
code . 명령 프롬포트에서 해당 파일 바로 실행

## 디자인
디자인 참조는 웹상에 공유되어 있는 디자인으로 작업했습니다. [피그마 디자인] (https://www.figma.com/file/KU1EQXMJ9KJDEyTbgrWRn6/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%B0%B8%EC%A1%B0?type=design&node-id=0%3A1&mode=design&t=sZW9trhIG6wI2DDy-1)

## 작업순서
### 기초 설정
- 필요 없는 파일 삭제 (public 파일에 index.html & src 파일에 App.js, index.js 제외하고 삭제)
- rafce : 기본 문법 나오기 --> 확장 프로그램 ES7 설치해야 함
- App.js : 기존 내용 삭제하고 rafce
- index.js : 아래 코드만 남기기
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
- index.html :
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>리액트로 웹 사이트 만들기</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
- 리액트 시작 : npm start

## 수정 업데이트
git add .
git status
git commit -m "이름"
git push -u origin main

npm i sass 버전관리

## 라이브러리 설치
sass를 설치 : `npm install sass`
react-router-dom 설치 : `npm install react-router-dom`
react-icons 설치 : `npm install react-icons`