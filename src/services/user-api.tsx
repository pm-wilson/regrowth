const URL = process.env.USER_API_URL;

export const getUser = (userData: Object) => {
  console.log("attempting to fetch user data from service...");

  return fetch(`${URL}/api/v1/etc`, userData)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .finally(() => console.log("data fetched"));
};
