import MyFavorite from '@/app/_components/MyFavorite';
import { fetchPost, TypePost } from '@/app/_api/fetchPosts';

const UserPost = async ({ id, className = '' }: { id: string, className?: string }) => {
  const post: TypePost = await fetchPost(id);
  return (
    <>
      <div className={`relative border rounded bg-white px-10 pt-4 pb-12 drop-shadow-md ${className}`}>
        <MyFavorite
          id={+id}
          className="w-5 h-5 absolute right-6 top-5"
        />
        <div className="mt-2 mb-2">id:{post.id}</div>
        <h3 className="text-3xl mb-8">{post.title}</h3>
        <div className="mb-3">from user: {post.userId}</div>
        <p className="text-lg text-justify">{post.body}</p>
      </div>
    </>
  );
};

export default UserPost;
