import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import { APIKeysEnum } from "./ApiEnums";


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

    client;
    constructor() {
        this.client = new ApolloClient({
            uri: 'https://oldwave-graphql.herokuapp.com/graphql',
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
            .then(response => {

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
            .catch(e => {
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
            .then(response => {
                const responseData = response?.data?.item || {};
                return Promise.resolve(responseData);
            })
            .catch(e => {
                console.log(e);
                return Promise.resolve(null);
            })
    }
}