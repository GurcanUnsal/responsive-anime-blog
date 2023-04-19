import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main_page/MainPage";
import PostPage from "./pages/post_page/PostPage";
import NewPostPage from "./pages/new_post_page/NewPostPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/new-post" element={<NewPostPage />} />
    </Routes>
    </>
  );
}

export default App;
