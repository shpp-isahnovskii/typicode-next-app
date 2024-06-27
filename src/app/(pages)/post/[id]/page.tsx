import UserPost from './_components/UserPost';
import PostComments from './_components/UsersComments';

const Post = async ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className='flex m-12'>
        <UserPost id={params.id} className='m-10 basis-7/12' />
        <PostComments id={params.id} className='m-10 basis-5/12 max-h-[400px] pr-2 overflow-y-scroll' />
      </div>
    </>
  );
};

export default Post;
