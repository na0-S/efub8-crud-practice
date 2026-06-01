import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPosts, deletePost } from "../api/postApi";

function HomePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠어요?")) return;
    await deletePost(id);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <Header>
        <h1>📋 게시판</h1>
        <WriteButton onClick={() => navigate("/create")}>글 작성</WriteButton>
      </Header>

      <PostList>
        {posts.length === 0 && <Empty>게시글이 없어요. 첫 글을 작성해보세요!</Empty>}
        {posts.map((post) => (
          <PostCard key={post.id}>
            <PostInfo>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
            </PostInfo>
            <ButtonGroup>
              <DetailButton onClick={() => navigate(`/post/${post.id}`)}>
                상세보기
              </DetailButton>
              <EditButton onClick={() => navigate(`/edit/${post.id}`)}>
                수정
              </EditButton>
              <DeleteButton onClick={() => handleDelete(post.id)}>
                삭제
              </DeleteButton>
            </ButtonGroup>
          </PostCard>
        ))}
      </PostList>
    </Container>
  );
}

export default HomePage;

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

const Empty = styled.p`
  text-align: center;
  color: #999;
  margin-top: 60px;
`;

const PostCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const PostInfo = styled.div`
  flex: 1;
  overflow: hidden;
`;

const PostTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostContent = styled.p`
  font-size: 13px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`;

const DetailButton = styled.button`
  background-color: #e3f2fd;
  color: #1976d2;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;

  &:hover {
    background-color: #bbdefb;
  }
`;

const EditButton = styled.button`
  background-color: #fff3e0;
  color: #f57c00;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;

  &:hover {
    background-color: #ffe0b2;
  }
`;

const DeleteButton = styled.button`
  background-color: #ffebee;
  color: #d32f2f;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;

  &:hover {
    background-color: #ffcdd2;
  }
`;