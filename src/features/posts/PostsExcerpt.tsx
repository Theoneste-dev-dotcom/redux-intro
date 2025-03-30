import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

const PostsExcerpt = ({post}) => {
  return (
    <article

    className="border-2 border-gray-500 p-6 rounded-lg w-[98%]"
  >
    <h3 className="text-gray-gray-500 text-3xl font-semibold">
      {post.title}
    </h3>
    <p className="text-xl">{post.body.substring(0, 100)}</p>
    <p>
      {" "}
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </p>
    <ReactionsButtons post={post}/>
  </article>
  )
}

export default PostsExcerpt
