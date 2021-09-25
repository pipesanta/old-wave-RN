import axios, { AxiosInstance } from 'axios';
import { APIKeysEnum } from './ApiEnums';

export class FlaskApi {

    baseUrl: string;
    axiosIntance: AxiosInstance;

    constructor() {
        this.baseUrl = 'https://proyectoflaskoldwave.herokuapp.com/api';
        this.axiosIntance = axios.create({ baseURL: this.baseUrl });
    }

    searchByKeyword(query: string) {
        return this.axiosIntance.get<any>(`/search?q=${query}`)
            .then(r => {
                let responseObject = r.data[0];
                const sellerName = APIKeysEnum.FLASK;
                const items = responseObject.items.map((item: any) => {
                    item.id = `${sellerName}-${item.id}`;
                    item.sellerKey = APIKeysEnum.FLASK;
                    return item;
                });

                return Promise.resolve(items);
            })
            .catch(e => {
                console.log('errorr', e);
                return Promise.resolve([]);
            })
    }

    searchProductById(productId: string) {
        const [sellerName, realId] = productId.split('-');
        return this.axiosIntance.get<any>(`/item/${realId}`)
            .then(response => {
                // response.data.sellerUrl = '';
                return Promise.resolve(response.data[0]);
            })
            .catch(e => {
                return Promise.resolve(null);
            })
    }

}