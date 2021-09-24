import axios from 'axios';

const baseUrlFastApi = 'https://oldwave-server.herokuapp.com';
const baseUrlSpringBoot = 'https://oldwave-server.herokuapp.com';
const baseUrlFlask = 'https://oldwave-server.herokuapp.com';

export const oldWaveFastAPI = axios.create({ baseURL: baseUrlFastApi });
export const oldWaveSpringBoot = axios.create({ baseURL: baseUrlSpringBoot });
export const oldWaveFlask = axios.create({ baseURL: baseUrlFlask });
