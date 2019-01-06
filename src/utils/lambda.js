export const getMediumPost = async () => {
  const response = await fetch('/mediumAPI');

  const {
    payload: {
      references: { Post },
    },
  } = await response.json();

  return Post;
};
