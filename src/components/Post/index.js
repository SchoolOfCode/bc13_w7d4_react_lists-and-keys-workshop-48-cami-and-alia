import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return <article>{text}</article>;
}

export default Post;
