import React from 'react'

const WatchComponentsCommentsData = ({commentsData}) => {
  return (
    <div className='py-3'>
        {(commentsData  &&
        <div className='flex gap-4'>
          <div>
            <img className='rounded-3xl' src= {commentsData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" />
          </div>
          <div>
          <div className='flex gap-4 items-center'>
            <h2 className='rounded-3xl bg-gray-200 py-2 px-2 text-sm ' >{commentsData?.snippet.topLevelComment.snippet.authorDisplayName}</h2>
            <h3 className="text-sm" > {commentsData?.snippet.topLevelComment.snippet.publishedAt} </h3> 
          </div>
          <h3 className="text-[14px]" dangerouslySetInnerHTML={{__html: commentsData?.snippet.topLevelComment.snippet.textOriginal.replace(/\n/g,"<br>"),}}/>
          <div className='flex gap-4 items-center text-gray-500'>
            <img className='w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/768px-Ei-like.svg.png" alt="" />
            <h3 className="text-sm">{commentsData?.snippet?.topLevelComment?.snippet?.likeCount} </h3>
            <img className='w-4' src="https://www.svgrepo.com/show/75824/dislike.svg" alt="" />
            <p className="text-sm">Reply</p>
          </div>
          </div>
        </div>)}

    </div>
  )
}

export default WatchComponentsCommentsData