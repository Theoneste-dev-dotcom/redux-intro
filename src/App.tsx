import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'


function App() {
  return (
    <div className='bg-stone-900  text-white h-auto w-auto'>
     {/* <Counter/> */}
     <AddPostForm/>
     <PostsList/>
    
    </div>
  )
}

export default App
