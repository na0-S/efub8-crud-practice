import axios from "axios";

// ✅ axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://efub6-seminar-front.p-e.kr",
});

// ✅ 게시글 목록 조회
export const getPosts = async () => {
  const response = await api.get("/api/posts");
  return response.data;
};

// ✅ 게시글 단건 조회
export const getPostById = async (id) => {
  const response = await api.get(`/api/posts/${id}`);
  return response.data;
};

// ✅ 게시글 작성
export const createPost = async (data) => {
  const response = await api.post("/api/posts", data);
  return response.data;
};

// ✅ 게시글 수정
export const updatePost = async (id, data) => {
  const response = await api.patch(`/api/posts/${id}`, data);
  return response.data;
};

// ✅ 게시글 삭제
export const deletePost = async (id) => {
  await api.delete(`/api/posts/${id}`);
};