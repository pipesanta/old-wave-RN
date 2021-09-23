import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext';
import { CompleteProduct } from '../interfaces/appInterfaces';

interface ProductDetails {
    isLoading: boolean;
    productDetail?: CompleteProduct;
}


export const useProductDetail = (productId: string) => {

    const { loadProductById } = useContext(ProductsContext);

    const [state, setState] = useState<ProductDetails>({
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
