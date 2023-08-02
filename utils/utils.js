export const getUserData = async (id, cb) => {
  try {
    const getUser = async () => {
      const response = await fetch(`/api/users/${id}`);

      const data = await response.json();

      cb(data);
    };
    if (id) getUser();
  } catch (error) {
    console.log(error);
  }
};

export const getReviewLinks = async (id, cb) => {
  const fetchReviewLinks = async () => {
    const response = await fetch(`/api/users/reviewLinks/${id}`);
    const data = await response.json();

    cb(data);
  };

  if (id) fetchReviewLinks();
};
