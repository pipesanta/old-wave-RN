import axios, { AxiosInstance } from 'axios';

export class FastApi {

    baseUrl: string;
    axiosIntance: AxiosInstance;

    constructor() {
        this.baseUrl = 'http://3.143.212.203/api/v1';
        this.axiosIntance = axios.create({ baseURL: this.baseUrl });
    }

    searchByKeyword(query: string) {
        return this.axiosIntance.get<any>(`/search?q=${query}`)
            .then(r => {
                let items = r.data.items;
                const sellerName = r.data.seller.name;
                items = items.map((item: any) => {
                    item.id = `${sellerName}-${item.id}`;
                    item.sellerName = sellerName;
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
        console.log('##############');

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