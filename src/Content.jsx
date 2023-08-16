import axios from "axios";
import { useState, useEffect } from "react";
import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import { Modal } from "./Modal";
import { PostShow } from "./PostsShow";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

export function Content() {
  const [currentPost, setCurrentPost] = useState({});
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
    console.log(post);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Login />
      <PostNew onCreatePost={handleCreatePost} />
      <SignUp />
      <PostIndex posts={posts} onSelect={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} />
      </Modal>
    </div>
  );
}
