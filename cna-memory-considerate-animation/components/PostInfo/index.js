
const PostInfo = ({ post }) => {
  return (
    <div className='post-info'>
      <div className='author'>
        <img width={35} height={35} className='avatar' src={`/static/avatars/${post.author.avatar}`} />{' '}
        <strong>{post.author.name}</strong> ({post.author.age})
      </div>
      <time>{post.date}</time>
      <style jsx>{`
        .post-info {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #999;
          margin: 10px 0;
        }
        .author {
          color: #555;
        }
        .avatar {
          float: left;
          width: 25px;
          height: 25px;
          margin: 0 10px 10px 0;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default PostInfo;
