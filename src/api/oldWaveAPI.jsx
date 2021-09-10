import axios from 'axios';

const baseURL = 'https://json-server-oldwave.herokuapp.com';

const oldWaveAPI = axios.create({ baseURL });

export default oldWaveAPI;