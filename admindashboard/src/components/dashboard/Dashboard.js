import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
    
    render(){
        //console.log(this.props)
        const { products, auth } = this.props;
        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        return(
            <div className="dashboard container">
                 <ProductList products={products} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        products: state.firestore.ordered.products,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products', orderBy: ['createdAt','desc'] }
    ])
)(Dashboard)