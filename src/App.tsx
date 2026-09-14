// src/App.tsx 
import styled from 'styled-components';
import PostItem from './components/PostItem';
import type { Post } from './types';
import type { Comment } from './types';
import CommentItem from './components/CommentItem';
import Button from "./components/Button";
import { useState } from 'react';

const DUMMY: Post[] = [
  { id: 1, title: '첫 글', content: '반갑습니다', author: '동건' },
  { id: 2, title: '두번째 글', content: '나는야 TS 초고수', author: '선우(최)' },
];

const DUMMYComment: Comment[] = [
  { author: "허현", role: 'student', content: '정진아 저번주 과제 kfc인가 그거 냇어'},
  { author: "이정진", role: 'admin', content: '아 그래? 과제는 다했으니까 통과로 바꿔줄게'},
];

const Title = styled.h1`
  color: #2f6feb;
`;

function App() {
  const [title, setTitle] = useState("");
  
  const [content,setContent] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTitle(e.target.value);
};
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setContent(e.target.value);
};


  return (
    <>
      <Title>🐘 TS 미니 게시판</Title>
      <input
        value={title}
        onChange={handleTitleChange}  
        placeholder="제목을 입력하세요"
      />
      <p>입력 중: {title}</p>

      <textarea
        value={content}
        onChange={handleContentChange}>
      </textarea>
      <p>textarea 입력 중인 내용: {content}</p>

      <Button label="확인" onClick={() => alert("버튼 클릭테스트!")} />
      {DUMMY.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}

      {DUMMYComment.map((comment)=> (
        <CommentItem comment={comment}/>
      ))}
    </>
  );
}

export default App;