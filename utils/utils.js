// export const getUserData = async (id, cb) => {
//   try {
//     const getUser = async () => {
//       const response = await fetch(`/api/users/${id}`);

//       const data = await response.json();

//       cb(data);
//     };
//     if (id) getUser();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getReviewLinks = async (id, cb) => {
//   const fetchReviewLinks = async () => {
//     const response = await fetch(`/api/users/reviewLinks/${id}`);
//     const data = await response.json();

//     cb(data);
//   };

//   if (id) fetchReviewLinks();
// };

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

export const getUserData = async (id, cb, retryCount = 0) => {
  try {
    const getUser = async () => {
      const response = await fetch(`/api/users/${id}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      cb(data);
    };

    if (id) getUser();
  } catch (error) {
    console.log(error);

    // Retry if the maximum number of retries is not exceeded
    if (retryCount < MAX_RETRIES) {
      setTimeout(() => {
        getUserData(id, cb, retryCount + 1);
      }, RETRY_DELAY_MS);
    }
  }
};

export const getReviewLinks = async (id, cb, retryCount = 0) => {
  try {
    const fetchReviewLinks = async () => {
      const response = await fetch(`/api/users/reviewLinks/${id}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      cb(data);
    };

    if (id) fetchReviewLinks();
  } catch (error) {
    console.log(error);

    // Retry if the maximum number of retries is not exceeded
    if (retryCount < MAX_RETRIES) {
      setTimeout(() => {
        getReviewLinks(id, cb, retryCount + 1);
      }, RETRY_DELAY_MS);
    }
  }
};
