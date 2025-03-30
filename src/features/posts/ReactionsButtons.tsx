import { useDispatch } from "react-redux";
import { reacationAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️",
};


import React from 'react'

const ReactionsButtons = ({post}) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
    key={name}
 className="reactionButton"
 type='button'
 onClick={() => dispatch(reacationAdded({ postId: post.id, reaction: name }))}
>
  {emoji} {post.reactions[name]} &nbsp;
    </button>
  ))
  return (
    <div>
           {reactionButtons}
    </div>
  )
}

export default ReactionsButtons
