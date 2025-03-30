import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postsSlice";
import { PostType } from "../../types/Post";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts: PostType[] = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostStatus);
  const postsError = useSelector(getPostError);

  useEffect(() => {
    if(postsStatus === 'idle') {
      dispatch(fetchPosts())
    };
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPostss = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
    content = orderedPostss.map((post, k) => <PostsExcerpt key={post.id + k} post={post} />);
  }
  else if (postsStatus === 'failed') {
    content = <p>Failed to load posts {/*{postsError}*/}</p>;
  }

  return (
    <div className="flex flex-col gap-8 items-center ">
      <div className="flex flex-state gap-4 flex-col items-start text-left">
        <h2 className="text-5xl text-bold">Posts</h2>
        {content}
      </div>
    </div>
  );
}

export default PostsList;
