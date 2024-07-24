import { useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
  const [limit, setLimit] = useState(20);
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, { pollingInterval: 100000 });
  const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3);
  //   }, 2000);
  // }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      <div className='post__list'>
        <button onClick={() => refetch()}>REFETCH</button>
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts &&
          posts.map((post) => <PostItem key={post.id} post={post} update={handleUpdate} remove={handleRemove} />)}
      </div>
    </div>
  );
};

export default PostContainer;
