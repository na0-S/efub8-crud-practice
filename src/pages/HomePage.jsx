import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPosts, deletePost } from "../api/postApi";

function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  // TODO 6: 컴포넌트가 처음 렌더링될 때 게시글 목록을 불러오세요.
  // 힌트: useEffect와 getPosts()를 사용하세요.
  useEffect(() => {
    /* TODO: 여기에 코드를 작성하세요 */
  }, []);

  // TODO 7: 게시글 삭제 핸들러를 완성하세요.
  // 힌트: deletePost(id) 호출 후 목록을 다시 불러오거나 state를 업데이트하세요.
  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠어요?")) return;
    /* TODO: 여기에 코드를 작성하세요 */
  };

  return (
    <Container>
      <Header>
        <h1>📋 게시판</h1>
        <WriteButton onClick={() => navigate("/create")}>글 작성</WriteButton>
      </Header>

      {/* TODO 8: posts 배열을 map으로 순회하며 게시글 목록을 렌더링하세요. */}
      <PostList>
        {/* TODO: 여기에 코드를 작성하세요 */}
        {/* 힌트: 각 게시글 카드에 제목, 내용 미리보기, 상세보기/수정/삭제 버튼이 있으면 좋아요! */}
      </PostList>
    </Container>
  );
}

export default HomePage;

// --- Styled Components ---
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
  }
`;

const WriteButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background-color: #43a047;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;