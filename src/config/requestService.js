import axios from 'axios';
const SERVER_URL = 'https://node3197.herokuapp.com';

function get(subUrl) {
    return axios.get(SERVER_URL + subUrl);
}

export default { get };