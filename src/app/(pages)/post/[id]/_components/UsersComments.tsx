import { fetchComments, TypeComment } from '@/app/_api/fetchComments';
const PostComments = async ({
  id,
  className = '',
}: {
  id: string;
  className?: string;
}) => {
  const comments: TypeComment[] = await fetchComments(id);
  const userInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  };

  function stringToHslColor(str: string, saturation = 20, lightness = 80) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var h = hash % 360;
    return 'hsl(' + h + ', ' + saturation + '%, ' + lightness + '%)';
  }

  return (
    <>
      <div className={`${className}`}>
        {comments &&
          comments.map((comment: TypeComment) => (
            <div
              key={comment.id}
              className="rounded border bg-white drop-shadow-md px-6 py-4 [&:not(:last-child)]:mb-4"
            >
              <div className="flex justify-start items-center mb-4">
                <div
                  className="relative border border-black/50 rounded-full w-12 h-12"
                  style={{ backgroundColor: stringToHslColor(comment.name) }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
                    {userInitials(comment.name)}
                  </div>
                </div>
                <span className='ml-4 text-xs'>{comment.name}</span>
              </div>
              <p>{comment.body}</p>
              <div className="text-xs mt-8 text-right">Email: {comment.email}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PostComments;
