import axios from 'axios';
const baseUrl = 'https://swapi.dev/api/';
export const getPeople = () => {
  try {
    return getPeopleData(`${baseUrl}people`);
  } catch (error) {
    throw error;
  }
};

async function getPeopleData(url) {
  let result = [];
  while (url !== null) {
    const response = await axios({
      url,
      method: 'GET',
    });
    result = result.concat(response.data.results);
    url = response.data.next
      ? response.data.next.replace('http', 'https')
      : null;
  }
  return result;
}
