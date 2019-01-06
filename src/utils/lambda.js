export const getMediumPost = async () => {
  const response = await fetch('/.netlify/functions/mediumApi');

  const {
    payload: {
      references: { Post },
    },
  } = await response.json();

  return Post;
};
