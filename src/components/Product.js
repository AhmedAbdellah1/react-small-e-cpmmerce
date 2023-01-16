import React from 'react'
import { Link } from 'react-router-dom';
function Product(props) {

    const { product, showButton } = props;

    return (

        <>

            <div className="card">

                <img src={product.image} className="card-img-top" alt={product.title} />

                <div className="card-body">

                    <h5 className="card-title">{product.title}</h5>

                    <p className="card-text">{product.description}</p>

                    <p>price : {product.price}$</p>

                    {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}

                </div>

            </div>
        </>
    )
} export default Product;

/**
     * this way to pass data
     * 
        const myProduct = props.product.map((product) => {
            return (
                <div className='col-3' key={product.id}>
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.title} />
    
                        <div className="card-body">
    
                            <h5 className="card-title">{product.title}</h5>
    
                            <p className="card-text">{product.description}</p>
    
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            )
        })
     *  
     */




