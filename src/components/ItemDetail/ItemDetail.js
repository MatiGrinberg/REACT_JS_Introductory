import React, { useState, useContext, useEffect }  from 'react'
import {Redirect} from 'react-router-dom'
import '../../estilados/App.css'
import {useStateValue, AuthProvider,AuthContext } from '../Context/Context'
import ItemCount from '../ItemCount/ItemCount'
import {BrowserRouter as Router, Switch, Route, useParams, Link} from 'react-router-dom'
import {app,db} from '../Firebase/Firebase'

function ItemDetail(props) {
    
    // Logged in?
    // const {currentUser} = useContext(AuthContext)
    // if (!currentUser) {
    //     return <Redirect to='/login'/>}

    // Loading Product desde FireStore usando la URL Parametros
    const ref = db.collection("ItemCollection")
    const {ropa_id} = useParams()
    const [doc, setDoc] = useState()
    
    function getProduct() {
        ref.doc(ropa_id).get().then((snapshot) => {
          setDoc(snapshot.data())})
      }
    
      useEffect(() => {
        getProduct();
      });
    
    
    // Return
    if (!doc) {
        return <div>Loading...</div>;
      }
    if(doc){
    return (
        
        <div className='individual'>
        
            <div className='home_img'>
                <img src={doc.image} alt='product'/>  
            </div>
            <div className='texto_prod'>   
                <h2 className='des'>{doc.desc}</h2> 
                <h3>$ {doc.price}</h3>           
            </div>
            <div>
            <ItemCount prod={doc} onAddFirst={props.onAddFirst} onAdd={props.onAdd} onRemove={props.onRemove} cartItems={props.cartItems}/>
            </div>
            <div>
                <Link to='/'>
                <button class='clasico'>Volver</button>
                </Link>
            </div>
            <div >
                <Link to='/cart'>
                    <button class='clasico'>Terminar mi compra</button>
                </Link>  
            
            </div>
        
        </div>
    )}
}

export default ItemDetail
