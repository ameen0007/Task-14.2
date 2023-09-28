import { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from "react-router-dom";



export const Productlist = () => {
  const [productlist, setproductlist] = useState([]);

  useEffect(() => {
    fetchproductlist();
  }, []);

  const fetchproductlist = async () => {
    const response = await axios(" https://product-list-theta.vercel.app/api/product");

    
    setproductlist(response.data);

  };



 

  return (
    <div className="product-main">
      <div className="inner-pro">
        {productlist.map((data) => (
          <Link to={`/product/${data.id}`} key={data.id} className="card">
          
            <div className="img">
              <img src={data.thumbnail} alt="" />
              <div className="discount">
                <h1>{data.discountPercentage + "%"}</h1>
              </div>
            </div>
            <div>
              <div className="inner-card">
                <h1>{data.title}</h1>
              </div>
                <div className="price">
                    <h1>Price : </h1>
                    <div className="inner-price">
                    <span>{data.price}</span>
                    </div>
                    <div className="small">
                    <small><BsCurrencyRupee/></small>
                    </div>
                </div>
              <div>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
        
          </Link>
        
        ))}
      </div>
       
    </div>
    
  );
};
