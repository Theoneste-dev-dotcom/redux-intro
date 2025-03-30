import {parseISO, formatDistanceToNow} from 'date-fns'
import React from 'react'

const TimeAgo = ({timestamp}: {timestamp:date}) => {
  let timeAgo = ''
  if(timestamp) {
    const the_date= parseISO(timestamp)
    const timePeriod = formatDistanceToNow(the_date)
    timeAgo = `${timePeriod} ago`

  }
  return (

      <span>&nbsp; <i>{timeAgo}</i></span>
  )
}

export default TimeAgo
