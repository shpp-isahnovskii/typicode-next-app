export type TypeComment = {
  postId: string,
  id: string,
  name: string,
  email: string,
  body: string,
};

export const fetchComments = async <T>(postId: string): Promise<T[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_TYPI_CODE_URL}/posts/${postId}/comments`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
