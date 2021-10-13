import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
    createHttpLink
} from "@apollo/client";
import { APIKeysEnum } from "./ApiEnums";
// import 'cross-fetch/polyfill';
// import fetch from 'isomorphic-fetch';
import fetch from 'node-fetch';

const SearchByKeywordQuery: any = gql`
    query searchQUERY($name: String){
        search(name: $name){
            query,
            total
            items{
                id
                name
                brand
                thumbnail
                city{
                id
                name
                }
                price
                rating
            }
            seller{
                id
                name
            }

        }
    }
    `

const SearchItemById: any = gql`
    query detail($id: ID) {
        item(id: $id){
            id
            name
            brand
            pictures
            city {
                id
                name
            }
            price
            rating
            description
            seller{
                id
                name
                logo
            }
        }
    }
`

export class GraphQlAPI {

    client: any;

    constructor() {
        this.client = new ApolloClient({
            link: createHttpLink({
                // fetch: fetch,
                uri: 'http://54.146.30.122:3200/graphql',
            }),
            cache: new InMemoryCache()
        });
    }


    searchByKeyword(query: string) {

        return this.client.query({
            query: SearchByKeywordQuery,
            variables: {
                name: query,
            }
        })
            .then((response: any) => {

                const responseData = response?.data?.search || {};
                const sellerName = APIKeysEnum.GRAPHQL;

                const items = (responseData.items || [])
                    .map((item: any) => {
                        const itemCopy = JSON.parse(JSON.stringify(item))
                        itemCopy.id = `${sellerName}-${item.id}`;
                        itemCopy.sellerKey = sellerName;
                        return itemCopy;
                    });

                return Promise.resolve(items);

            })
            .catch((e: any) => {
                console.log(e);
                return Promise.resolve([]);
            })
    }

    searchProductById(productId: string) {
        const [sellerName, realId] = productId.split('-');

        return this.client.query({
            query: SearchItemById,
            variables: {
                id: realId
            }
        })
            .then((response: any) => {
                const responseData = response?.data?.item || {};
                return Promise.resolve(responseData);
            })
            .catch((e: any) => {
                console.log(e);
                return Promise.resolve(null);
            })
    }
}