import { FC, MouseEvent } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {
  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = () => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div className='post' onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
