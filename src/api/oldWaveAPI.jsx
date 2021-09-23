import axios from 'axios';

const baseUrlFastApi = 'https://oldwave-json-server-definitive.herokuapp.com';
const baseUrlSpringBoot = 'https://oldwave-json-server-definitive.herokuapp.com';
const baseUrlFlask = 'https://oldwave-json-server-definitive.herokuapp.com';

export const oldWaveFastAPI = axios.create({ baseURL: baseUrlFastApi });
export const oldWaveSpringBoot = axios.create({ baseURL: baseUrlSpringBoot });
export const oldWaveFlask = axios.create({ baseURL: baseUrlFlask });
