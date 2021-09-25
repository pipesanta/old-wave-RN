import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";


const searchByKeywordQuery = gql`
    query search($name: String){
        search(name: $name){
            query               
        }
    }`

export class GraphQlAPI {

    client;
    constructor() {
        this.client = new ApolloClient({
            uri: 'https://oldwave-graphql.herokuapp.com',
            cache: new InMemoryCache()
        });
    }

    // total
    // items{
    //     id
    //     name
    //     brand
    //     thumbnail
    //     city{
    //     id
    //     name
    //     }
    //     price
    //     rating
    // }
    // seller{
    //     id
    //     name
    // }



    searchByKeyword(query: string) {

        return this.client.query({
            query: searchByKeywordQuery,
            variables: {
                name: ''
            }
        })
            .then(result => {
                console.log('################################');
                console.log({ result });
            })
            .catch(e => {
                console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEr');
                console.log(e);
            })
    }




}