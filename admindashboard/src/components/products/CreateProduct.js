import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'
import { Redirect } from 'react-router-dom'
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
class CreateProduct extends Component {
    state = {
        title: '',
        desc: '',
        img: '',
        imgUrl: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state);
    }
    handleFileUpload = (e) => {
        setTimeout(() => {
            let file =  document.getElementById('img').files[0].name
        
            this.setState({
                img: file
            })
            firebase
            .storage()
            .ref("images")
            .child(file)
            .getDownloadURL()
            .then(url => this.setState({ imgUrl: url }));
        // console.log(e.target.files[0].name)
        // if (e.target.files[0]) {
        //     console.log("here")
        //     this.setState({
        //         [e.target.id]: e.target.files[0]
        //     })
        // }
        console.log(this.state)
        }, 1200);
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.createProduct(this.state);
        this.props.history.push('/');
    }
 
  
    
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container form-wrapper mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="img">Upload Image</label>
                                <br/>
                                {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>} */}
                                {this.state.imgUrl && <img width="300px" src={this.state.imgUrl} />}
                                <FileUploader
                                required
                                    accept="image/*"
                                    name="img"
                                    id="img"
                                    //randomizeFilename
                                    storageRef={firebase.storage().ref("images")}                                  
                                    onUploadStart={this.handleFileUpload}
                                   
                                />
                                {/* <input type="file" className="form-control" id="img" onChange={this.handleFileUpload}/> */}
                                {/* <input type="text" className="form-control" id="img" aria-describedby="img" placeholder="Enter email" onChange={this.handleChange} /> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="title" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <input type="text" className="form-control" id="desc" placeholder="description" onChange={this.handleChange} required/>
                            </div>

                            <button type="submit" className="btn btn-info">Submit</button>

                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)
