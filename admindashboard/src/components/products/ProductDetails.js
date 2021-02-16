import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import FileUploader from "react-firebase-file-uploader";
import { updateProduct } from '../../store/actions/productActions'
import firebase from "firebase";
class ProductDetails extends Component {
    //console.log(state)
    state = {
        id: this.props.match.params.id,
        title: this.props.product.title,
        desc: this.props.product.desc,
        img: this.props.product.img,
        imgUrl: this.props.product.imgUrl
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state);
    }
    handleFileUpload = (e) => {
        setTimeout(() => {
            let file = document.getElementById('img').files[0].name

            this.setState({
                img: file
            })
            firebase
                .storage()
                .ref("images")
                .child(file)
                .getDownloadURL()
                .then(url => this.setState({ imgUrl: url }));

            //console.log(this.state)
        }, 1500);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.updateProduct(this.state);
        this.props.history.push('/');
    }
    render() {
        const { product } = this.props;

        //console.log(this.state)
        return (
            <div className="container form-wrapper mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="img">Edit Image</label>
                                <br />

                                {this.state.imgUrl ? <img width="300px" src={this.state.imgUrl} /> : <img width="300px" src={product.imgUrl} />}
                                <FileUploader

                                    accept="image/*"
                                    name="img"
                                    id="img" e
                                    storageRef={firebase.storage().ref("images")}
                                    onUploadStart={this.handleFileUpload}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Product ID</label>
                                <input type="text" className="form-control" id="sku" placeholder="sku" value={product.sku} required disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="title" onChange={this.handleChange} defaultValue={product.title} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <input type="text" className="form-control" id="desc" placeholder="description" onChange={this.handleChange} defaultValue={product.desc} required />
                            </div>

                            <button type="submit" className="btn btn-info">Update</button>

                        </form>
                    </div>
                </div>

            </div>
        )
    }




}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    //console.log(id)
    const products = state.firestore.data.products
    const product = products ? products[id] : null
    return {
        product: product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateProduct: (product) => dispatch(updateProduct(product))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'products', orderBy: ['createdAt', 'desc'] }
    ])
)(ProductDetails)
