import React,{useState,useEffect} from "react";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import "../styles.css";
// import  './home.css'


export default function Home() {
 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data && data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    }).catch(err=>{
      console.log(err)
    })
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base canHide={true} title="Home Page" description="Welcome to the Tshirt Store">

      <div className='hero'>
        <h1 className="3rem 36px"><span className='titleFirst mr-4' 
        // style={{color:'red',fontSize:64}}
        >MY</span>Tshirt</h1>
        <h3 className="description">Welcome to the Tshirt Store</h3>
        {/* <div className="searchSection">
          <input type="text" />
        </div> */}
        <div className="form-control">
                <div className="iconDv">
                <i class="bi bi-search"></i>
                </div>
                <input className="inputAria"
                    type="text"
                    placeholder="Search Product..."
                />
                <button className="backseacrchIcon">
                <i class="bi bi-search"></i>
                </button>
            </div>
      </div>
       <h3>All of the Tshirts</h3>
      <div className="row">
       
        <div className="col-4 text-center ">
          <Card />
        </div>
        <div className="col-4 text-center">
          <Card/>
        </div>
        <div className="col-4 text-center">
          <Card/>
        </div>

        {products?.map((product,index)=>(
            <div key={index} className="col-4 mb-4" text-center>
              <Card product={product} />
            </div>
            )
        )}
      </div>
    </Base>
  );
}
