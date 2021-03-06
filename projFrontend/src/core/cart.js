import React,{useState,useEffect} from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./card";
import { loadCart } from "./helper/cartHelper";
import Stripecheckout from "./stripeCheckout";



const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => { 
      setProducts(loadCart());
  }, [reload]);

  const loadAllProduct = ()=>{
      return (
        <div>
             <h2>This section is to Load products</h2>
             {products.map((product,index)=>{
               return ( <Card 
                  key={index}
                  product={product}
                  removeFromCart={true}
                  addtoCart={false}
                  setReload={setReload}
                  reload={reload}
                 />)
             })}
        </div>

      )
  }

  const loadCheckout = ()=>{
    return (
      <div>
           <h2>This section is for checkout</h2>
      </div>
    )
}
  return (
    <Base title="Cart Page" description="Ready to checkout"> 
      <div className="row text-center">
       <div className="col-6">{loadAllProduct()}</div>
       <div className="col-6">
         <Stripecheckout 
         products={products}
         setReload={setReload}
         />
         </div>
       

      </div>
    </Base>
  );
}

export default Cart;