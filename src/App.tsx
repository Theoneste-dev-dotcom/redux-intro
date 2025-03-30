import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import SinglePagePost from './features/posts/SinglePostPage'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
function App() {
  return (
    <div className='bg-stone-900  text-white h-auto w-auto'>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<PostsList/>}/>

      <Route path='post'>
        <Route index element={<AddPostForm/>}/>
        <Route path=':postId' element={<SinglePagePost/>}/>
        {/* <Route path='edit/:postId' element={<EditPostForm/>}/> */}
      </Route>


    {/* 
    Route path users
      route index element userLIst
      Route path :userId elment Userpage
      
      
    for catching all 404 pages
    Route path * element {Navigate to "/" replace />}*/}

    </Routes>
    
    </div>
  )
}

export default App
