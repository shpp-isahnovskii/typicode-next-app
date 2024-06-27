export type TypePost = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export const fetchPosts = async <T>(): Promise<T[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_TYPI_CODE_URL}/posts`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const fetchPost = async <T>(id: string): Promise<T> => {
  return await fetch(`${process.env.NEXT_PUBLIC_TYPI_CODE_URL}/posts/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
