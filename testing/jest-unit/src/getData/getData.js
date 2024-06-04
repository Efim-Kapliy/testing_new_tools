const axios = require('axios').default;
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');

const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const userIds = response.data.map((user) => user.id);
    return mapArrToStrings(userIds);
  } catch (e) {}
};

module.exports = getData;
