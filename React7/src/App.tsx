import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { posts as postsFromBE, PostType } from "./assets/posts";

import { CreatePost } from "./components/CreatePost/CreatePost";
import { Feed } from "./components/GalleryFeed/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import ThemeProvider from "./hoc/ThemeProvider";

function App() {
  const [posts, setPosts] = useState<PostType[]>(postsFromBE);

  const onNewPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Feed createdPosts={posts}></Feed>
          </Route>
          <Route exact path="/create">
            <CreatePost onNewCreatedPost={onNewPost}></CreatePost>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
