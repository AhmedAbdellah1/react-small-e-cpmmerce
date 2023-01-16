import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';

const ProductDetails = (props) => {

    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [params.productId]);

    return (
        <Product product={product} showButton={false} />
    )
}

export default ProductDetails
