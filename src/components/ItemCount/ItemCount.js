import {Link,useHistory} from 'react-router-dom'
import React,{ useContext }  from 'react'
import {Redirect} from 'react-router-dom'
import '../../estilados/App.css'
import {useState , useStateValue} from 'react'
import NavBar from '../NavBar/NavBar';
// import Checkout from '../NoRequeridas/Checkout';
// import { AuthProvider,AuthContext } from '../NoRequeridas/Context'


function ItemCount(props) {
    // Variables + Funciones
    const {prod, cartItems, onAdd, onRemove, onAddFirst, id} = props;
    const exist = cartItems.find(item =>item.id === prod.id)
    // const {currentUser} = useContext(AuthContext)
    // const total = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    
    // Logged in?
    // if (!currentUser) {
    //     return <Redirect to='/login'/>}
    
    // Return
    return (
            
            <div className='cart'>
                {/* <h1>Items</h1> */}
                
                <div className="cart_text">
                    { cartItems.length===0 && <h2>No tenes items seleccionados</h2>}
                </div>
                <div className='subt'>
                <button class='clasico' onClick={()=>onAddFirst(prod)}>Agregar</button>
                    {cartItems.map((item)=>(
                        <div key={item.id} className='subt'>
                            {/* <h3>{item.title}</h3>
                            <h3>{item.qty} x ${item.price}</h3> */}
                            { item.id===id && 
                            <div> 
                                <div>{ item.qty<10 &&<button className='btn_cart' onClick={()=>onAdd(item)}>+</button>}</div>
                                <span className='actual'>{item.qty}</span>
                                <div><button className='btn_cart' onClick={()=>onRemove(item)}>-</button></div>
                            </div>
                            }
                        </div>
                    ))}
                    
                    {/* <button class='clasico' onClick={()=>onAddFirst(prod)}>Agregar</button>
                    <div><button className='btn_cart' onClick={()=>onAdd(exist)}>+</button></div>
                    <div><button className='btn_cart' onClick={()=>onRemove(exist)}>-</button></div> */}
                </div>
           
                {/* {cartItems.length !== 0 && (
                    <div className='tot'>
                        <div >
                            <div className="col-2">
                                <strong>Total $</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>{total}</strong>
                            </div>
                        </div>
                            
                        <div >
                            <Link to='/checkout'>
                                <button class='clasico'>Checkout</button>
                            </Link>    
                        </div>
                    </div>
                )} */}
            </div> 
              
        )
}

export default ItemCount

