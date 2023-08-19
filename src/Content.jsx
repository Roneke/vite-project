import axios from "axios";
import { useState, useEffect } from "react";
import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import { Modal } from "./Modal";
import { PostShow } from "./PostsShow";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

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

  const handleUpdatePost = (id, params) => {
    axios
      .patch(`http://localhost:3000/posts/${id}.json`, params)
      .then((response) => {
        setPosts(
          posts.map((post) => {
            if (post.id === response.data.id) {
              return response.data;
            } else {
              return post;
            }
          })
        );
      });
  };

  // destroy function

  const handleDestroyPost = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}.json`).then((response) => {
      console.log(response);
      setPosts(posts.filter((post) => post.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/post/new"
          element={<PostNew onCreatePost={handleCreatePost} />}
        />
        <Route
          path="/posts"
          element={<PostIndex posts={posts} onSelect={handleShowPost} />}
        />
      </Routes>

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow
          post={currentPost}
          onUpdatePost={handleUpdatePost}
          closeModal={handleClose}
          onDestroyPost={handleDestroyPost}
        />
      </Modal>
    </div>
  );
}
