import {useEffect,useState} from 'react'
import './productpage.css'
import axios from "axios";
import {  useNavigate, useParams } from 'react-router';
import { Header } from '../Header/Header';
import { AiOutlineCaretRight} from 'react-icons/ai'
import { AiOutlineCaretLeft} from 'react-icons/ai'
import { BsCurrencyRupee} from 'react-icons/bs'

export const Productpage = () => {
  
 const [product, setproduct] = useState({})
 const [curreimageindex,setcurreimageindex] = useState(0)

      const  navigate = useNavigate()

  const {id} = useParams()
 console.log(id,"id");

  useEffect(() => {
    handlefetchproductlis()
  }, [])

  const handlefetchproductlis = async()=>{
    const response = await axios(`https://product-list-theta.vercel.app/api/product/${id}`)
    
    
    setproduct(response.data)
  }
  const images = product.images || []

  const nextImage = () => {
   
    setcurreimageindex((prevIndex) =>
      prevIndex === product.images.length- 1 ? 0 : prevIndex + 1
    )
  };

  const prevImage = () => {
    
    setcurreimageindex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  }
   
  const handlenavigate =()=>{
    navigate("/")
  }

  return (
    <div>
      <Header/>
      <div className='btn-con'>
        <button onClick={handlenavigate} className='back'>Back To Home</button>
      </div>
     <div className='singleproduct-main'>
        <div className="singleproduct-inner">
        <div className='cad' >

          <img src={images[curreimageindex]} alt="" />
          <div className='inner-cad'>
             <h1>{product.discountPercentage+"%"}</h1>
          </div>
          <div className='right-btn'>
               <button onClick={nextImage}>< AiOutlineCaretRight/></button>
               <div>
                
               </div>
          </div>
          <div className='left-btn'>
              <button onClick={prevImage} ><AiOutlineCaretLeft/></button>
          </div>
        </div>
       
        <div className='li'>
            <h1>{product.title}</h1>
        </div>
        <div className='li' >
            <h1>Brand : {product.brand}</h1>
        </div >
        <div className='li-price-con' >
          <div>
            <small>Price : </small>
          <span>{product.price}</span>
          </div>
            <div className='price-logo'>
            <span><BsCurrencyRupee/></span>
            </div>
        </div>
        <div className='li' >
            <p>{product.description}</p>
        </div>
        
        <div className='buy-con'>
            <button className='buy' >Buy Now</button>
        </div>
        
     </div>
       
     </div>
    </div>
  )
}
