import React from "react";

import "./index.css";

//PLAN for Image 
//  image: { link: 'link', alt: 'alt' }
//<img src = "link" alt = "alt">
//image.link   image.alt 


function Post({ title, date, author, text, highlights, image }) {
  return <article>
  <h2>{title}</h2>
  <h3>{date}</h3>
  <h3>{author}</h3>
  <p>{text}</p>
 
  {highlights.map(highlight=>{
    //const keyID = highlights.findIndex(index=>index===highlight)
    const keyID = highlights.indexOf(highlight)
    console.log(keyID)
    return <li>{highlight}</li>
  })}

  <img src = {image.link}  alt = {image.alt}/>


  </article>;
}

export default Post;
