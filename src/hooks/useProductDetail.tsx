import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext';

interface MovieDetails {
    isLoading: boolean;
    productDetail?: any;
}


export const useProductDetail = (productId: string) => {

    const { loadProductById } = useContext(ProductsContext);

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        productDetail: undefined,
    });


    const getProductDetail = async () => {
        // Acá se recuperaría de la api con el id del producto

        const product = await loadProductById(productId);

        setState({
            isLoading: false,
            productDetail: product
        })
    }

    useEffect(() => {
        getProductDetail();
    }, []);


    return {
        ...state
    }

}
