import React from "react";
import { useSelector } from "react-redux";
// import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postsSlice";
// import { PostType } from "../../types/Post";
// import PostsExcerpt from "./PostsExcerpt";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";
import {useParams} from 'react-router-dom'
const SinglePagePost = () => {
  
  const {postId} = useParams();

    // retrieve postid

//   const dispatch = useDispatch();

//   const posts: PostType[] = useSelector(selectAllPosts);
//   const postsStatus = useSelector(getPostStatus);
//   const postsError = useSelector(getPostError);


  const post = useSelector(state=> selectPostById(state, Number(postId)))

  console.log(post, "and the post id is ", Number(postId))


  if(!post) {
    return (
        <section>
            <h2>Post not found</h2>
        </section>
    )
  }

  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <p>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>

        </p>
        <ReactionsButtons post={post}/>
    </article>
  )
}
//   useEffect(() => {
//     if(postsStatus === 'idle') {
//       dispatch(fetchPosts())
//     };
//   }, [postsStatus, dispatch]);

//   let content;
//   if (postsStatus === 'loading') {
//     content = <p>Loading...</p>;
//   } else if (postsStatus === 'succeeded') {
//     const orderedPostss = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
//     content = orderedPostss.map((post, k) => <PostsExcerpt key={post.id + k} post={post} />);
//   }
//   else if (postsStatus === 'failed') {
//     content = <p>Failed to load posts {/*{postsError}*/}</p>;
//   }



export default SinglePagePost
