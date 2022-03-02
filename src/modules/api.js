const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'VILT9clw43poZrJvaIqT';

export const getScore = async () => {
  const result = await fetch(`${baseURL}/${gameId}/scores/`);
  return result;
};

const postRequest = async (url, newData) => {
  const result = await fetch(`${baseURL}/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newData),
  });
  return result.json();
};

const getResponse = async (newUser) => {
  const data = await postRequest(`${baseURL}/${gameId}/scores/`, newUser);
  const newData = await data;
  return newData;
};

export default getResponse;
