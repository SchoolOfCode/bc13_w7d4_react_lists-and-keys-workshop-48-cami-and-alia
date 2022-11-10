import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

//In the <Main/> component (src/components/Main), use the map() method to loop over the the 'posts' state. For each post in the array, return a <Post/> component.

//Map over the posts array
//Callback fn takes in each post
//Callback fn returns a Post component for each post, handing the post into the the prop

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {posts.map(({ title, date, author, text, highlights, image, postId }) => (
        <Post
          title={title}
          date={date}
          author={author}
          text={text}
          highlights={highlights}
          image={image}
          key={postId}
        />
      ))}
    </main>
  );
}

export default Main;
