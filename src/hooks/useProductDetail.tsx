import { useEffect, useState } from 'react'

interface MovieDetails {
    isLoading: boolean;
    productFull?: any;
}


export const useProductDetail = ( productId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        productFull: undefined,
    });


    const getProductDetail = async() => {
        // Acá se recuperaría de la api con el id del producto
        const movieDetailsResp = {
            id: "2",
            nombre: "Reloj Inteligente",
            marca: "string",
            urlFoto: "https://picsum.photos/100/130",
            ciudad: "string",
            precio: 250000,
            seller: "string",
            rating: 4.7,
            urlFotos: [
              "https://i.picsum.photos/id/775/500/550.jpg?hmac=LqZ1PAwZVmIzmoHPSj5oAmt9mbJvyWGMTBffIWuvZC4",
              "https://picsum.photos/500/550",
              "https://i.picsum.photos/id/103/200/250.jpg?hmac=TbrkC06X9YxjmgIX2tKY5eueQDTQGQUtFS3YmtSCUfg"
            ],
            reseller: {
              nombre: "Samsung",
              urlLogo: "https://picsum.photos/50/50"
            },
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }

        setState({
            isLoading: false,
            productFull: movieDetailsResp 
        })
    }

    useEffect(() => {
        getProductDetail();
        
    }, []);


    return {
        ...state
    }
    
}
