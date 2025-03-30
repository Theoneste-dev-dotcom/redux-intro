import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "@reduxjs/toolkit";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";
import { UserType } from "../../types/User";
//nanoid will helps to generate random ids
const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const users:UserType[] = useSelector(selectAllUsers);


  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus == 'idle';

  const onSavePostClick = () => {
    if (canSave) {
     try {
      setAddRequestStatus('pending')
      dispatch(addNewPost({title, body: content, userId})).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
     }catch(err){
       console.error('Failed to save the post:', err);
     }finally {
      setAddRequestStatus('idle')
     }
    }
  };


  const usersOptions = users.map(user => (
    <option className="text-black" key={user.id} value={user.id}>
     {user.name}
    </option>
  ))
  return (
    <div className="flex items-center flex-col justify-content-center">
      {" "}
      <section className="flex flex-col gap-4 mt-20 mb-20 items-center w-[50vw]">
        <h2 className="text-3xl font-bold mb-4">Add a New Post</h2>
        <form className="flex flex-col gap-4 w-[80%]">
          <label className="text-lg " htmlFor="postTitle">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            className="rounded-lg bg-stone-500  text-white"
            value={title}
            onChange={onTitleChange}
          />
          <label htmlFor="postAuthor" className="text-lg">
            Author:
          </label>
          <select name="postAuthor" className="bg-stone-500 text-white" id="postAuthor" onChange={onAuthorChange}>
            {usersOptions}
          </select>
          <label className="text-lg " htmlFor="postContent">
            Post Content:
          </label>
          <textarea
            name="postContent"
            id="postContent"
            className="rounded-lg bg-stone-500 text-white"
            value={content}
            onChange={onContentChange}
          ></textarea>

          <button
            className="bg-gray-950 text-white py-2 rounded-lg"
            type="button"
            onClick={onSavePostClick}
            disabled={!canSave}
          >
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
