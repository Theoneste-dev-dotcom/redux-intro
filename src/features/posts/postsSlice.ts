import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { PostsType} from "../../types/Post";
import { sub } from "date-fns";
import axios from "axios";

const baseUrl ='https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
 try{
  const response  = await axios.get(baseUrl);
  return response.data;
 }catch(err){
   
   return err.message;
 }
})

export const addNewPost = createAsyncThunk(
  "posts/addNewPost", async(initialPost) => {
    try{
       const respons = await axios.post(baseUrl, initialPost);
       return respons.data;
  }catch(err){
    return err.message;
  }
  }
)

const initialState: {
  posts: PostsType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
} = {
  posts: [],
  status: 'idle',
  error: null,
};



const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date:new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp:0,
              wow:0,
              heart:0,
              rocket:0,
              coffee:0
            }
          } ,
        };
      },
    },
    reacationAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
    extraReducers(builder) {
      builder
        .addCase(fetchPosts.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.status = 'succeeded'
          let min = 1;
         const loadedPosts = action.payload.map((post) => {
           post.date = sub(new Date(), {minutes: min++}).toISOString()
           post.reactions = {
             thumbsUp:0,
             wow:0,
             heart:0,
             rocket:0,
             coffee:0
           }
           return post
        
           })
           console.log(state.posts.length)
          state.posts = loadedPosts;
         })

        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })

        .addCase(addNewPost.fulfilled, (state, action) => {
          action.payload.userId = Number(action.payload.userId)
          action.payload.date = new Date().toISOString()
          action.payload.reactions = {
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
          }
          console.log(action.payload)
          state.posts.push(action.payload)
        })
    }
});

export const { postAdded, reacationAdded } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export default postsSlice.reducer;
