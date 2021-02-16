import producttReducer from "../reducers/productReducer";

export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase }) => {
        //make async call to database 
        console.log("data")
        const firestore = getFirebase().firestore();
        let count = 0;
        firestore.collection("products").get().then((res) => 
        
        firestore.collection('products').add({
            ...product,
            sku: 'P_SKU' + (res.size + 1) + (Math.floor(Math.random() * 100000)),
            createdAt: new Date()
        }).then(() => {
            //dispatch start
            dispatch({ type: 'CREATE_PRODUCT', product })
        }).catch((err)=>{
            dispatch({type:'CREATE_PRODUCT_ERROR', err})        
        })

        )
       
    }
};

export const updateProduct = (product) => {
    console.log(product)
    return (dispatch, getState, { getFirebase }) => {
        //make async call to database
        
        const firestore = getFirebase().firestore();
        // let data =  firestore.collection('products').doc(product.id);
        console.log("ssss",product.id)
        firestore.collection('products').doc(product.id).update({
            ...product,
            updatedAt: new Date()
        }).then(() => {
            //dispatch start
            dispatch({ type: 'UPDATE_PRODUCT', product })
        }).catch((err)=>{
            console.log(err);  
        })
       
    }
};

export const deleteProduct = (id) => {
    console.log(id)
    return (dispatch, getState, { getFirebase }) => {
        //make async call to database
        
        const firestore = getFirebase().firestore();
        // let data =  firestore.collection('products').doc(id);
        
        firestore.collection('products').doc(id).delete().then(() => {
            //dispatch start
            dispatch({ type: 'DELETE_PRODUCT', id })
        }).catch((err)=>{
            console.log(err);  
        })
       
    }
};