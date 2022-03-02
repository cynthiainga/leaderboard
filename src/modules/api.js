const ApiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

export const getScore = async () => {
  const result = await fetch(ApiUrl);
  return result;
};

const postRequest = async (url, newData) => {
  const result = await fetch(ApiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newData),
  });
  return result.json();
};

const getResponse = async (newUser) => {
  const data = await postRequest(ApiUrl, newUser);
  const newData = await data;
  return newData;
};

export default getResponse;
