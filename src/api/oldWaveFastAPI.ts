import axios, { AxiosInstance } from 'axios';
import { APIKeysEnum } from './ApiEnums';

export class FastApi {

    baseUrl: string;
    axiosIntance: AxiosInstance;

    constructor() {
        this.baseUrl = 'https://d1eylshvb8atwe.cloudfront.net/api/v1';
        this.axiosIntance = axios.create({ baseURL: this.baseUrl });
    }

    searchByKeyword(query: string) {
        return this.axiosIntance.get<any>(`/search?q=${query}`)
            .then(r => {
                let items = r.data.items;
                const sellerName = APIKeysEnum.FAST;

                items = items.map((item: any) => {
                    item.id = `${sellerName}-${item.id}`;
                    item.sellerKey = APIKeysEnum.FAST;

                    return item;
                });

                return Promise.resolve(items);
            })
            .catch(e => {
                console.log('errorrrr', e);
                return Promise.resolve([]);
            })
    }

    searchProductById(productId: string) {
        const [sellerName, realId] = productId.split('-');

        return this.axiosIntance.get<any>(`/items/${realId}`)
            .then(response => {
                // response.data.sellerUrl = '';
                return Promise.resolve(response.data);
            })
            .catch(e => {
                return Promise.resolve(null);
            })
    }

}