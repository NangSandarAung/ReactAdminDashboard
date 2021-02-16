import React from 'react'
import { Link } from 'react-router-dom'
import productReducer from '../../store/reducers/productReducer'
import ProductSummary from './ProductSummary'
const ProductList = ({ products }) => {
    //console.log(projects)
    //const productList = 
    return (
        <div className="">
            { products && products.map(product => {
                return (

                    <ProductSummary product={product} key={product.id} />

                )
            })}
        </div>


    )
}

export default ProductList