import React from 'react'
import { selectAllUsers } from '../users/userSlice'
import { useSelector } from 'react-redux'
import { UserType } from '../../types/User'

const PostAuthor = ({userId}: {userId:string}) => {
    const users:UserType[] = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
  return (
    <span>
    by {author ? author.name : 'Unknown author'}
    </span>
  )
}

export default PostAuthor
