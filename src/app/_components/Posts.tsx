import Link from 'next/link';
import MyFavorite from './MyFavorite';
import { fetchPosts, TypePost } from '@/app/_api/fetchPosts';

export default async function PostsPage() {
  const posts: TypePost[] = await fetchPosts();

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-8 p-14">
      {posts &&
        posts.map((post: TypePost) => (
          <div
            key={post.id}
            className="flex h-full flex-col rounded bg-white/95 drop-shadow-md overflow-hidden"
          >
            <h3 className="relative border-b border-primary px-4 pt-4 pb-3">
              <span className="block truncate max-w-[calc(100%-40px)]">
                {post.title}
              </span>
              <span className="absolute top-1 right-2 text-xs">
                id: {post.id}
                <MyFavorite id={+post.id} className="ml-auto w-4" />
              </span>
            </h3>
            <Link
              href={`/post/${post.id}`}
              className="transition-all group hover:bg-white"
            >
              <p className="px-4 pt-2 pb-6 overflow-hidden h-20 text-ellipsis text-sm">
                {post.body.length > 50 ? post.body.slice(0, 50) : post.body}
                <span className="[&>*]:transition-all group-hover:[&>*]:ml-[2px]">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </p>
              <span className="absolute text-xs px-2 overflow-hidden text-ellipsis right-0 bottom-2">
                by user: {post.userId}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
}
