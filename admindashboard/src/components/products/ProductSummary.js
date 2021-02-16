import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { deleteProduct } from '../../store/actions/productActions'

const ProductSummary = (props) => {
    console.log(props)
    const { product } = props;
    const history = useHistory()
    const handleDelete = (id) =>{
        props.deleteProduct(id);
        //history.goBack();
    }
    return (

        <div className="card mb-3 mt-5" >
            <div className="row no-gutters">
                <div className="col-12 col-md-4 img-wrapper">
                    <img width="100" height="100"className="card-img-top" 
                    src={product.imgUrl} alt="Card image" />
                     <p className="card-text"> <strong>{product.sku}</strong></p>
                </div>
                <div className="col-12 col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                       
                        <p className="card-text"><small className="text-muted">{product.desc}</small></p>
                        <Link className="btn btn-primary"  to={{
                            pathname: '/products/' + product.id }} key={product.id}>
                            Edit
                        </Link>
                        <button onClick={()=>{handleDelete(product.id)}} className="btn btn-danger ml-5">Delete</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(deleteProduct(id))
    }
}
export default connect(null,mapDispatchToProps)(ProductSummary)